import CityButton from "./CityButton";
import Tag from "../common/Tag";

const cities = [
  {
    handle: "metro_van",
    name: "Metro Vancouver",
    longitude: -123.138573,
    latitude: 49.263569,
    zoom: 12,
  },
  {
    handle: "island",
    name: "Victoria / Vancouver Island",
    longitude: -123.367264,
    latitude: 48.427502,
    zoom: 12,
  },
  {
    handle: "fraser_valley",
    name: "Abbotsford / Fraser Valley",
    longitude: -122.3235,
    latitude: 49.0527,
    zoom: 12,
  },
  {
    handle: "interior",
    name: "Kamloops / Kelowna / Interior",
    longitude: -119.4935,
    latitude: 49.884488,
    zoom: 12,
  },
  {
    handle: "northern",
    name: "Prince George / Northern",
    longitude: -122.747772,
    latitude: 53.912579,
    zoom: 12,
  },
];

function CityPanel() {
  return (
    <div className="absolute z-10 mt-2 w-80 divide-y divide-gray-100 rounded-lg bg-white p-2 shadow">
      <div className="gap-1">
        {cities.map((city) => (
          <CityButton key={city.handle} cityObj={city} />
        ))}
      </div>
    </div>
  );
}

export default CityPanel;
