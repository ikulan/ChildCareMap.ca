import DropdownMenu from "./menu/DropdownMenu";
import OptionsBar from "./options/OptionsBar";
import SiteLogo from "./SiteLogo";

function Header() {
  return (
    <header className="px-4 py-2.5">
      <div className="flex flex-wrap items-center justify-between">
        <div className="md:order-1">
          <SiteLogo />
        </div>
        <div className="md:order-3">
          <DropdownMenu />
        </div>
        <div className="md:order-2">
          <OptionsBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
