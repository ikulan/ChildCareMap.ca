import { ReactNode } from "react";
import { useState } from "react";

type ToggleElemProps = {
  disabled?: boolean;
  checked?: boolean;
  children: ReactNode;
};

function ToggleElem({
  disabled = false,
  checked = true,
  children,
}: ToggleElemProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const textColor = disabled ? "text-gray-900" : "text-gray-400";

  const toggleStyle =
    "peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 rtl:peer-checked:after:translate-x-[-100%]";
  const toggleStyleAppend = disabled
    ? "peer-checked:bg-indigo-300 peer-focus:ring-indigo-100"
    : "peer-checked:bg-indigo-600 peer-focus:ring-indigo-300";

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Update state based on checkbox status
  };

  return (
    <div className={`flex rounded p-2 hover:bg-gray-100 ${textColor}`}>
      <label className="inline-flex w-full cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          checked={isChecked}
          onChange={handleCheckboxChange}
          disabled={disabled}
        />
        <div className={toggleStyle + " " + toggleStyleAppend}></div>
        <span className="ms-3 text-sm font-medium">{children}</span>
      </label>
    </div>
  );
}

export default ToggleElem;
