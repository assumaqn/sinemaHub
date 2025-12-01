import { useState } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";

function Hero() {
  const [query, setQuery] = useState("");
  const navigation = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    if (!query) return;
    navigation(`/search/${query}`);
    setQuery("");
  }
  return (
    <div className="bg-gradient-to-r from-stone-800/100 from-10%  via-yellow-600/30 via-40% to-stone-800/100 to-60% py-[280px] px-10 flex flex-col gap-10 h-[470px] items-center justify-center">
      <h1 className="text-6xl font-extrabold flex flex-col gap-2 items-center pt-32">
        Discover Your next{" "}
        <span className="text-amber-500 text-5xl">Favorite Film</span>
      </h1>
      <p className="text-md text-stone-400 font-normal max-w-2xl mx-auto">
        Search through millions of movies, TV series, and episodes. Find
        detailed information, ratings, and more.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 items-center justify-center my-10 ">
          <input
            type="search"
            placeholder="search for movies,series,episodes.."
            className="input"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button to={`${query}`} type="primary">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Hero;
