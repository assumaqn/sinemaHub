import { useLoaderData, useParams } from "react-router";
import Button from "../../ui/Button";
import SearchQuery from "../../ui/SearchQuery";
import { useSearch } from "../../Services/SearchContext";
function ResultHeader() {
  const { query: searchQuery, dispatch } = useSearch();

  const movies = useLoaderData();
  const search = movies.Search.length;

  const { query } = useParams();
  return (
    <div className="py-5 mx-auto">
      <div className="grid grid-rows-2 items-center justify-center   gap-y-3 py-6   ">
        <h3 className="text-2xl text-stone-200 font-semibold">Search Result</h3>

        <SearchQuery
          searchType="resultSearch"
          dispatch={dispatch}
          query={searchQuery}
          type="small"
        />
      </div>
      <p className="justify-items-start pl-5 sm:pl-10 text-stone-300 text-sm">
        Found {search} result for "{query}"
      </p>
    </div>
  );
}

export default ResultHeader;
