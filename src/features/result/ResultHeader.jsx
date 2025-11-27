import Button from "../../ui/Button";
function ResultHeader() {
  return (
    <div className="border-b border-stone-300 pb-4 ">
      <div className="grid grid-rows-2 items-center justify-center  gap-y-3 py-6   ">
        <h3 className="text-xl text-stone-200 font-semibold">Search Result</h3>
        <div className="flex items-center justify-center gap-3 ">
          <input
            type="search"
            placeholder="search for movies,series,episodes.."
            className="input w-[550px] py-2"
          />
          <Button type="small">Search</Button>
        </div>
      </div>
      <p className="justify-items-start pl-2 text-stone-300 text-sm">
        Found 209 result for "pand"
      </p>
    </div>
  );
}

export default ResultHeader;
