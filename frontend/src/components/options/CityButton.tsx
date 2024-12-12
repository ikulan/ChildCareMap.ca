import { useMap } from "react-map-gl";
import useCityStore from "../../stores/cityStore";
import useConfigStore from "../../stores/configStore";

function CityButton({ cityObj }) {
  const setCityObj = useCityStore((state) => state.setCityObj);
  const closeAllPanels = useConfigStore((state) => state.closeAllPanels);
  const { daycareMap } = useMap();

  const onClick = () => {
    setCityObj(cityObj);
    closeAllPanels();
    daycareMap?.easeTo({
      center: [cityObj.longitude, cityObj.latitude],
      zoom: cityObj.zoom,
      duration: 1000,
    });
  };

  return (
    <button
      className="group relative m-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 p-0.5 text-sm font-medium text-indigo-800 hover:text-white focus:outline-none group-hover:from-indigo-600 group-hover:to-indigo-400"
      onClick={onClick}
    >
      <span className="relative rounded-md bg-white px-3 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0">
        {cityObj.name}
      </span>
    </button>
  );
}

export default CityButton;
