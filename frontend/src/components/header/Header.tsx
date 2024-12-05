import Hamburger from "./Hamburger";
import SearchBar from "./SearchBar";
import SiteLogo from "./SiteLogo";

function Header() {
  return (
    <header className="border-b border-gray-200 px-4 py-2.5">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <SiteLogo />
        <SearchBar />
        <Hamburger />
      </div>
    </header>
  );
}

export default Header;
