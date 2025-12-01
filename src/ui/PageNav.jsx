import { useSearch } from "../Services/SearchContext";
import Logo from "./Logo";
import SearchQuery from "./SearchQuery";

function PageNav() {
  const { query, dispatch } = useSearch();
  return (
    <header className=" flex items-center justify-between py-2 px-8 sm:px-40  h-[80px] border-b border-gray-700 ">
      <Logo />
      <SearchQuery
        searchType="headerSearch"
        placeholder="Search Movies"
        query={query}
        dispatch={dispatch}
      />
    </header>
  );
}

export default PageNav;
