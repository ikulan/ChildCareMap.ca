import CityButton from "./CityButton";

const cities = [
  {
    handle: "metro_van",
    name: "Metro Vancouver",
    longitude: -122.9196,
    latitude: 49.2144,
    zoom: 10,
  },
  {
    handle: "island",
    name: "Victoria / Vancouver Island",
    longitude: -123.6063,
    latitude: 48.8137,
    zoom: 8.5,
  },
  {
    handle: "fraser_valley",
    name: "Abbotsford / Fraser Valley",
    longitude: -122.1895,
    latitude: 49.1332,
    zoom: 10.5,
  },
  {
    handle: "interior",
    name: "Kamloops / Kelowna / Interior",
    longitude: -118.6357,
    latitude: 50.0708,
    zoom: 7,
  },
  {
    handle: "northern",
    name: "Prince George / Northern",
    longitude: -124.5967,
    latitude: 54.6695,
    zoom: 6.5,
  },
];

function CityButtons() {
  return (
    <div className="gap-1">
      {cities.map((city) => (
        <CityButton key={city.handle} cityObj={city} />
      ))}
    </div>
  );
}

function CityPanel({ asPanel = true }) {
  if (asPanel === true) {
    return (
      <div className="absolute z-10 mt-2 w-80 divide-y divide-gray-100 rounded-lg bg-white p-2 shadow">
        <CityButtons />
      </div>
    );
  }
  return <CityButtons />;
}

export default CityPanel;
