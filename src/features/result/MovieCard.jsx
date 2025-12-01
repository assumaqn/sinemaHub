import { FaCalendarAlt } from "react-icons/fa";

function MovieCard({ image, title, year, genre }) {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden 
      w-full bg-stone-900/40
      h-auto sm:h-[430px]                        /* FIXED HEIGHT ON BIGGER SCREENS */
      hover:shadow-amber-600 hover:shadow-sm cursor-pointer
      hover:-translate-y-1 transition-all duration-200 group"
    >
      {/* IMAGE */}
      <div className="w-full aspect-[2/3] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover 
          transition-all duration-300 group-hover:opacity-70 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="pt-2 pb-4 px-3 space-y-2 flex-grow flex flex-col">
        <h3 className="font-semibold text-stone-100 text-sm sm:text-base line-clamp-2">
          {title}
        </h3>

        <div className="flex justify-between items-center mt-auto">
          <span className="flex items-center gap-2 text-xs sm:text-sm text-stone-300">
            <FaCalendarAlt className="text-sm" />
            {year}
          </span>

          <span
            className="inline-block bg-stone-700 py-[3px] px-2 text-xs sm:text-sm 
            text-stone-200 rounded-xl"
          >
            {genre}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
