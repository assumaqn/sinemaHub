import Logo from "./Logo";

function PageNav() {
  return (
    <header className=" flex items-center justify-between py-2 px-10 h-[80px] border-b border-gray-700">
      <Logo />
      <div>
        <input
          type="search"
          placeholder="Search Movies"
          className="w-[150px] py-1 px-4 focus:outline-none focus:w-52 transition-all duration-200 focus:ring-1 focus:ring-stone-800 border-none rounded-xl focus:ring-offset-2 bg-stone-500 text-stone-200 placeholder:text-sm placeholder:text-stone-900 placeholder:text-center"
        />
      </div>
    </header>
  );
}

export default PageNav;
