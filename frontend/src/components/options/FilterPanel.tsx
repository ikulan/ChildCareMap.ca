import Tag from "../common/Tag";
import ToggleElem from "../common/ToggleElem";

function FilterPanel() {
  return (
    <div className="absolute z-10 mt-2 w-56 divide-gray-100 rounded-lg bg-white shadow">
      <div className="flow justify-items-end px-2 pt-2">
        <Tag color="gray-500">Coming Soon!</Tag>
      </div>
      <ul className="space-y-1 pb-3 text-xs text-gray-700 sm:px-3 sm:text-sm">
        <li>
          <ToggleElem key="0" disabled>
            Under 3 yrs
          </ToggleElem>
        </li>
        <li>
          <ToggleElem key="1" disabled>
            3 - 5 yrs
          </ToggleElem>
        </li>
        <li>
          <ToggleElem key="2" disabled>
            Preschool
          </ToggleElem>
        </li>
        <li>
          <ToggleElem key="3" disabled>
            Out of School Care
          </ToggleElem>
        </li>
      </ul>
    </div>
  );
}

export default FilterPanel;
