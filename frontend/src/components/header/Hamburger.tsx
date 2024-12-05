import { useState } from "react";
import { HamburgerIcon } from "../icons/HamburgerIcon";

function Hamburger() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="relative inline-block">
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={toggle}
      >
        <span className="sr-only">Open main menu</span>
        <HamburgerIcon className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow">
          <ul className="py-2 text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
