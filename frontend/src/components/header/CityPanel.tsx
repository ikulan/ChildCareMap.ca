import CityButton from "./CityButton";

const cities = [
  {
    handle: "coquitlam",
    name: "Coquitlam",
    longitude: -122.79413,
    latitude: 49.27962,
    zoom: 12,
  },
  {
    handle: "port_coquitlam",
    name: "Port Coquitlam",
    longitude: -122.75106,
    latitude: 49.269857,
    zoom: 13,
  },
  {
    handle: "port_moody",
    name: "Port Moody",
    longitude: -122.864243,
    latitude: 49.276661,
    zoom: 13,
  },
];

function CityPanel() {
  return (
    <div className="absolute z-10 mt-2 w-72 divide-y divide-gray-100 rounded-lg bg-white shadow">
      <div className="gap-1">
        {cities.map((city) => (
          <CityButton key={city.handle} cityObj={city} />
        ))}
      </div>
    </div>
  );
}

export default CityPanel;
