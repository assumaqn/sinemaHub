import { FaCalendarAlt } from "react-icons/fa";

const sampleMovie = {
  id: 4,
  title: "Kung Fu Panda",
  year: "2018",
  genre: "Series",
  description:
    "Po mentors four panda children who suddenly gain mysterious kung fu powers from ancient chi warriors.",
  image:
    "https://i.pinimg.com/736x/79/30/23/7930238b287032bc313e2e50448cce40.jpg",
};

function ResultContent() {
  return (
    <div className="max-w-7xl mx-auto py-5 grid grid-cols-5 items-center justify-between gap-7">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}

export default ResultContent;

function MovieCard() {
  return (
    <div className="flex flex-col  rounded-lg w-[240px] overflow-hidden hover:shadow-amber-600 hover:shadow-inner cursor-pointer hover:-translate-y-1 transition-all duration-200">
      <div className="w-[240px] h-[300px] ">
        <img
          src={sampleMovie.image}
          alt={sampleMovie.description}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="pt-2 pb-4 px-3 space-y-3  bg-stone-800/40">
        <h3>{sampleMovie.title}</h3>
        <p className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm text-stone-300">
            <FaCalendarAlt />
            {sampleMovie.year}
          </span>
          <span className="inline-block bg-stone-600 py-[3px] px-1.5 text-sm text-stone-200 rounded-xl">
            {sampleMovie.genre}
          </span>
        </p>
      </div>
    </div>
  );
}
