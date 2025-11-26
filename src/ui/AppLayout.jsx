import { Outlet } from "react-router";
import Footer from "./Footer";
import PageNav from "./PageNav";

function AppLayout() {
  return (
    <section className="h-screen grid grid-rows-[auto_1fr_auto] ">
      <PageNav />
      <main>{<Outlet />}</main>
      <Footer />
    </section>
  );
}

export default AppLayout;
