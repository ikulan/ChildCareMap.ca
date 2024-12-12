import DropdownMenu from "./menu/DropdownMenu";
import OptionsBar from "./options/OptionsBar";
import SiteLogo from "./SiteLogo";

function Header() {
  return (
    <header className="px-4 py-2.5">
      <div className="flex flex-wrap items-center justify-between">
        <SiteLogo />
        <OptionsBar />
        <DropdownMenu />
      </div>
    </header>
  );
}

export default Header;
