import { Outlet } from "react-router";
import Footer from "./Footer";
import PageNav from "./PageNav";

function AppLayout() {
  return (
    <section className="h-screen grid grid-rows-[auto_2fr_auto] bg-gray-950/100 overflow-y-scroll ">
      <PageNav />
      <main>{<Outlet />}</main>
      <Footer />
    </section>
  );
}

export default AppLayout;
