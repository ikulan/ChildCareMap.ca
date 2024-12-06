import Hamburger from "./Hamburger";
import SearchBar from "./SearchBar";
import SiteLogo from "./SiteLogo";

function Header() {
  return (
    <header className="px-4 py-2.5">
      <div className="flex flex-wrap items-center justify-between">
        <SiteLogo />
        <SearchBar />
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
