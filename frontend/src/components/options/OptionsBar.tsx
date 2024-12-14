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
            className="inline-flex items-center rounded-s-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={configState.toggleCityPanel}
          >
            <MapPinIcon className="me-2 h-4 w-4" />
            Region: {cityObj.name}
          </button>
          {configState.cityPanelIsOpen && <CityPanel />}
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center rounded-e-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={configState.toggleFilterPanel}
          >
            <FilterTuneIcon className="me-2 h-4 w-4" />
            Filters
          </button>
          {configState.filterPanelIsOpen && <FilterPanel />}
        </div>
      </div>
    </>
  );
}

export default OptionsBar;
