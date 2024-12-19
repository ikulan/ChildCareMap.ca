import useCityStore from "../../stores/cityStore";
import useConfigStore from "../../stores/configStore";

import { FilterTuneIcon } from "../icons/FilterTuneIcon";
import { MapPinIcon } from "../icons/MapPinIcon";
import FilterPanel from "./FilterPanel";
import CityPanel from "./CityPanel";

function OptionsBar() {
  const cityObj = useCityStore((state) => state.cityObj);
  const configState = useConfigStore();

  return (
    <>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <div>
          <button
            type="button"
            className="inline-flex items-center rounded-s-full border border-gray-200 bg-white px-2 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm md:px-4"
            onClick={configState.toggleCityPanel}
          >
            <MapPinIcon className="me-1 h-4 w-4 sm:me-2" />
            <span className="hidden sm:block">Region:</span>
            <span className="max-w-48 truncate">{cityObj.name}</span>
          </button>
          {configState.cityPanelIsOpen && <CityPanel />}
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center rounded-e-full border border-gray-200 bg-white px-2 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:text-sm md:px-4"
            onClick={configState.toggleFilterPanel}
          >
            <FilterTuneIcon className="me-1 h-4 w-4 sm:me-2" />
            Filters
          </button>
          {configState.filterPanelIsOpen && <FilterPanel />}
        </div>
      </div>
    </>
  );
}

export default OptionsBar;
