import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";
import PageNav from "./PageNav";
import Loader from "./Loader";
import { useState } from "react";
import { SearchProvider } from "../Services/SearchContext";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <section className="h-screen grid grid-rows-[auto_2fr_auto] bg-gray-950/100 overflow-y-scroll ">
      <PageNav />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
      <Footer />
    </section>
  );
}

export default AppLayout;
