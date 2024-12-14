import argparse
import csv
import json
import sys


# SERVICE_TYPE_MAPPING = {
#     "SRVC_UNDER36_YN": "Under 36 months",
#     "SRVC_30MOS_5YRS_YN": "2.5 - 5 yrs",
#     "PRESCHOOL_MORNING_YN": "Preschool",
#     "PRESCHOOL_MIDDAY_YN": "Preschool",
#     "PRESCHOOL_AFTERNOON_YN": "Preschool",
#     "SRVC_OOS_KINDER_YN": "Out of School Care",
#     "SRVC_OOS_GR1_AGE12_YN": "Out of School Care"
# }

SERVICE_TYPE_MAPPING = {
    "SRVC_UNDER36_YN": 0,
    "SRVC_30MOS_5YRS_YN": 1,
    "PRESCHOOL_MORNING_YN": 2,
    "PRESCHOOL_MIDDAY_YN": 2,
    "PRESCHOOL_AFTERNOON_YN": 2,
    "SRVC_OOS_KINDER_YN": 3,
    "SRVC_OOS_GR1_AGE12_YN": 3
}


def gen_feature(row):
    """
    Generate a location Point entry
    """

    # service type
    services = [code for key, code in SERVICE_TYPE_MAPPING.items() if row.get(key) == "Y"]
    services = list(set(services))  # de-duplicate

    # merge address
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
        "phone": row["PHONE"],
        "services": services
      }
    }

    return feature


def get_cities(args):
    """
    Retrieves a list of cities based on user input.
    """
    if args.city:
        return [args.city]

    cities = []
    if args.cityfile:
        try:
            with open(args.cityfile, "r") as infile:
                cities = [line.strip() for line in infile if line.strip()]
        except FileNotFoundError:
            raise FileNotFoundError(f"Error: File '{args.cityfile}' not found.")
        except Exception as e:
            raise Exception(f"An error occurred while reading '{args.cityfile}': {e}")

    return cities


def main(args):
    """
    Processes the input CSV file and generates a GeoJSON file.
    """
    features = []

    # Get the list of selected cities
    try:
        selected_cities = get_cities(args)
    except Exception as e:
        print(f"Error while loading cities: {e}")
        return

    # Read the input CSV file
    try:
        with open(args.input, encoding="utf-8-sig") as csvfile:
            csv_reader = csv.DictReader(csvfile)

            for row in csv_reader:
                # Filter by city if specified
                city = (row.get("CITY") or "").strip()
                if selected_cities and city not in selected_cities:
                    continue

                # Parse the row and generate a GeoJSON feature
                features.append(gen_feature(row))

                # Stop processing if the feature limit is reached
                if args.n and len(features) >= args.n:
                    break
    except FileNotFoundError:
        print(f"Error: File '{args.input}' not found.")
        return
    except Exception as e:
        print(f"An error occurred while processing '{args.input}': {e}")
        return

    print(f"{len(features)} rows parsed successfully.")

    # Write the GeoJSON output
    try:
        with open(args.output, "w", encoding="utf-8") as outfile:
            json.dump(
                {
                    "type": "FeatureCollection",
                    "features": features,
                },
                outfile,
                #indent=2  # Pretty-print for readability
            )
        print(f"GeoJSON data successfully written to '{args.output}'.")
    except Exception as e:
        print(f"An error occurred while writing to '{args.output}': {e}")


if __name__ == '__main__':
    # Parse command-line arguments
    parser = argparse.ArgumentParser(
        description="Process a CSV file and generate a GeoJSON file.",
        epilog="Example: python script.py input.csv output.geojson --city 'Vancouver'"
    )

    # Required arguments
    parser.add_argument("input", help="Path to the input CSV file")
    parser.add_argument("output", help="Path to the output GeoJSON file")

    # Optional arguments
    parser.add_argument("-n", type=int, help="Process only the top N rows")
    parser.add_argument("--city", help="Process rows for a single city")
    parser.add_argument("--cityfile", help="Process rows for cities listed in a file")

    # Parse arguments
    args = parser.parse_args()

    try:
        sys.exit(main(args))
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        sys.exit(1)


