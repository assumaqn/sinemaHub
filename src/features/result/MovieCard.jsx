import { FaCalendarAlt } from "react-icons/fa";

function MovieCard({ image, title, year, genre }) {
  return (
    <div className="flex flex-col  rounded-xl w-[240px] h-[380px] overflow-hidden hover:shadow-amber-600 hover:shadow-sm cursor-pointer hover:-translate-y-1 transition-all duration-200 group">
      <div className="w-[240px] h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover  bg-gradient-to-b from-stone-700/100 from-5%   to-transparent  group-hover:opacity-70 transition-all duration-300 group-hover:scale-110 "
        />
      </div>

      <div className="pt-2 pb-4 px-3 space-y-3  bg-stone-800/40">
        <h3>{title}</h3>
        <p className="flex justify-between items-center">
          <span className="flex items-center gap-2 text-sm text-stone-300">
            <FaCalendarAlt />
            {year}
          </span>
          <span className="inline-block bg-stone-600 py-[3px] px-1.5 text-sm text-stone-200 rounded-xl">
            {genre}
          </span>
        </p>
      </div>
    </div>
  );
}
export default MovieCard;
