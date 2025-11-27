function Button({ children, type }) {
  const baseClass =
    "text-sm bg-amber-600 inline-block border-none text-stone-800  rounded-xl hover:bg-amber-300 transition-colors duration-200";

  const style = {
    primary: baseClass + " py-3 px-5",
    small: baseClass + " py-2 px-4",
  };

  return <button className={style[type]}>{children}</button>;
}

export default Button;
