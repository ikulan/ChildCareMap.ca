import SearchBar from "./SearchBar";
import SiteLogo from "./SiteLogo";

function Header() {
  return (
    <nav className="border-b border-gray-200 px-4 py-2.5">
      <div className="flex flex-wrap items-center justify-between">
        <SiteLogo />
        <SearchBar />
      </div>
    </nav>
  );
}

export default Header;
