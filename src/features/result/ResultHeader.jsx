import { useLoaderData, useParams } from "react-router";
import Button from "../../ui/Button";
function ResultHeader() {
  const movies = useLoaderData();
  // const search = movies.Search.length;
  const search = 10;
  const { query } = useParams();
  return (
    <div className="py-5 ">
      <div className="grid grid-rows-2 items-center justify-center  gap-y-3 py-6   ">
        <h3 className="text-2xl text-stone-200 font-semibold">Search Result</h3>
        <div className="flex items-center justify-center gap-3 ">
          <input
            type="search"
            placeholder="search for movies,series,episodes.."
            className="input w-[550px] py-2"
          />
          <Button type="small">Search</Button>
        </div>
      </div>
      <p className="justify-items-start pl-10 text-stone-300 text-sm">
        Found {search} result for "{query}"
      </p>
    </div>
  );
}

export default ResultHeader;
