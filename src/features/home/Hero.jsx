import SearchQuery from "../../ui/SearchQuery";
import { useSearch } from "../../Services/SearchContext";

function Hero() {
  const { query, dispatch } = useSearch();

  return (
    <div className="max-w-md sm:max-w-full  mx-auto bg-gradient-to-r from-stone-800/100 from-10%  via-yellow-600/30 via-40% to-stone-800/100 to-60% py-[300px]  sm:py-[280px] px-10 flex flex-col  gap-5 sm:gap-10 h-[470px] items-center justify-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold flex flex-col gap-2 items-center pt-15 sm:pt-32">
        Discover Your next{" "}
        <span className="text-amber-500 text-3xl sm:text-5xl">
          Favorite Film
        </span>
      </h1>
      <p className="text-sm sm:text-md text-stone-400 font-normal max-w-xs sm:max-w-2xl mx-auto">
        Search through millions of movies, TV series, and episodes. Find
        detailed information, ratings, and more.
      </p>
      <SearchQuery
        searchType="normal"
        dispatch={dispatch}
        query={query}
        to={`${query}`}
        type="primary"
      />
    </div>
  );
}

export default Hero;
