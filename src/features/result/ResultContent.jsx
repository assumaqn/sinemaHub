import MovieCard from "./MovieCard";
import { getMovie } from "../../Services/MovieFetchAPI";
import { useLoaderData } from "react-router";

function ResultContent() {
  const movies = useLoaderData();
  const { Search } = movies;

  return (
    <div className="sm:max-w-7xl max-w-lg mx-auto py-7 grid sm:grid-cols-5 grid-cols-2 items-center justify-between gap-x-8 gap-y-10 ">
      {Search.map((movie) => (
        <MovieCard
          title={movie.Title}
          image={movie.Poster}
          year={movie.Year}
          genre={movie.Type}
          key={movie.imdbID}
        />
      ))}
    </div>
  );
}

export async function loader({ params }) {
  const movies = await getMovie(params.query);

  return movies;
}

export default ResultContent;
