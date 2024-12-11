import ToggleElem from "./ToggleElem";

function FilterPanel() {
  return (
    <div className="absolute z-10 mt-2 w-56 divide-y divide-gray-100 rounded-lg bg-white shadow">
      <ul className="space-y-1 p-3 text-sm text-gray-700">
        <li>
          <ToggleElem key="0">Under 3</ToggleElem>
        </li>
        <li>
          <ToggleElem key="1">3 - 5 yrs</ToggleElem>
        </li>
        <li>
          <ToggleElem key="2">Preschool</ToggleElem>
        </li>
        <li>
          <ToggleElem key="3">Out of School Care</ToggleElem>
        </li>
      </ul>
    </div>
  );
}

export default FilterPanel;
