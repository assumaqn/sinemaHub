import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <h2 className="text-lg font-semibold text-stone-100 capitalize">
          🎬 SinemaHub
        </h2>
      </Link>
    </div>
  );
}

export default Logo;
