import { Link } from "react-router-dom";

function Button({ children, type, to }) {
  const baseClass =
    "text-sm bg-amber-600 inline-block border-none text-stone-800  rounded-xl hover:bg-amber-300 transition-colors duration-200";

  const style = {
    primary: baseClass + " py-3 px-5",
    small: baseClass + " py-2 px-4",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  return <button className={style[type]}>{children}</button>;
}

export default Button;
