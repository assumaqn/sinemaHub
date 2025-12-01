import Logo from "./Logo";
import SearchQuery from "./SearchQuery";

function PageNav() {
  return (
    <header className=" flex items-center justify-between py-2 px-40  h-[80px] border-b border-gray-700 ">
      <Logo />
      <div>
        <SearchQuery searchType="headerSearch" placeholder="Search Movies" />
      </div>
    </header>
  );
}

export default PageNav;
