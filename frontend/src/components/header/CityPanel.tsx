import CityButton from "./CityButton";

function CityPanel() {
  return (
    <div className="absolute z-10 mt-2 w-72 divide-y divide-gray-100 rounded-lg bg-white shadow">
      <div className="gap-1">
        <CityButton>Coquitlam</CityButton>
        <CityButton>Port Coquitlam</CityButton>
        <CityButton>Port Moody</CityButton>
      </div>
    </div>
  );
}

export default CityPanel;
