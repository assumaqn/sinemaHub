import Logo from "./Logo";

function PageNav() {
  return (
    <header className="bg-slate-400 flex items-center justify-between py-4 px-6 h-[80px]">
      <Logo />
      <div>
        <input type="search" placeholder="Search Movies" />
      </div>
    </header>
  );
}

export default PageNav;
