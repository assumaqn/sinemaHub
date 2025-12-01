import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <h2 className=" text-md font-medium sm:text-lg  sm:font-semibold text-stone-100 capitalize flex justify-center items-center">
          <span>🎬</span>SinemaHub
        </h2>
      </Link>
    </div>
  );
}

export default Logo;
