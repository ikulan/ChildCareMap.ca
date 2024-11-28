import argparse
import csv
import json
import sys


SERVICE_TYPE_MAPPING = {
    "SRVC_UNDER36_YN": 0,
    "SRVC_30MOS_5YRS_YN": 1,
    "PRESCHOOL_MORNING_YN": 2,
    "PRESCHOOL_MIDDAY_YN": 2,
    "PRESCHOOL_AFTERNOON_YN": 2,
    "SRVC_OOS_KINDER_YN": 3,
    "SRVC_OOS_GR1_AGE12_YN": 4
}


def gen_feature(row):
    # service type
    services = [code for key, code in SERVICE_TYPE_MAPPING.items() if row.get(key) == "Y"]
    services = list(set(services))  # deduplicate

    # address
    if row["ADDRESS_2"]:
        address = " ".join([row["ADDRESS_1"], row["ADDRESS_2"]])
    else:
        address = row["ADDRESS_1"]

    # geojson object for the entry
    feature = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [row["LONGITUDE"], row["LATITUDE"]]
      },
      "properties": {
        "id": row["FAC_PARTY_ID"],
        "name": row["NAME"],
        "address": address,
        "city": row["CITY"],
        "services": services
      }
    }

    return feature


def main(args):
    features = []

    # Read the input CSV file
    try:
        with open(args.input, encoding="utf-8-sig") as csvfile:
            csv_reader = csv.DictReader(csvfile)

            for row in csv_reader:
                # Filter by city if the `city` argument is provided
                if args.city and row["CITY"] and row.get("CITY").strip() != args.city:
                    continue

                # parse the row and generate a geojson feature
                features.append(gen_feature(row))

                # Stop if the number of features reaches the limit (`args.n`)
                if args.n and len(features) >= args.n:
                    break
    except FileNotFoundError:
        print(f"Error: File '{args.input}' not found.")
        return
    except Exception as e:
        print(f"An error occurred while processing the file: {e}")
        return

    print(f"{len(features)} rows parsed.")

    # Write to a GeoJSON output file
    try:
        with open(args.output, "w", encoding="utf-8") as outfile:
            json.dump(
                {
                    "type": "FeatureCollection",
                    "features": features,
                },
                outfile,
                indent=2,
            )
        print(f"GeoJSON data successfully written to '{args.output}'.")
    except Exception as e:
        print(f"An error occurred while writing to '{args.output}': {e}")



if __name__ == '__main__':
    # Parse command-line arguments
    parser = argparse.ArgumentParser(description="Process a CSV file and generate a GeoJSON file.")

    # Required arguments
    parser.add_argument("input", help="Path to the input CSV file")
    parser.add_argument("output", help="Path to the output GeoJSON file")

    # Optional arguments
    parser.add_argument("-n", type=int, help="Only process the top N rows")
    parser.add_argument("--city", help="Only process rows for the specified city name")

    # Parse arguments
    args = parser.parse_args()

    try:
        sys.exit(main(args))
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        sys.exit(1)



