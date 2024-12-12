import CityButton from "./CityButton";
import Tag from "../common/Tag";

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
    <div className="absolute z-10 mt-2 w-80 divide-y divide-gray-100 rounded-lg bg-white p-2 shadow">
      <div className="gap-1">
        {cities.map((city) => (
          <CityButton key={city.handle} cityObj={city} />
        ))}
        <div className="relative inline-flex">
          <div className="flex w-40 rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-gray-500">
            <span className="mr-2 flex items-center">Other</span>
            <Tag color="gray-500">Coming Soon!</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityPanel;
