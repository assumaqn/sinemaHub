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
    // <section className=" items-center justify-center h-screen grid grid-rows-[auto_2fr_auto] bg-gray-950/100 overflow-y-scroll max-w-md overflow-x-hidden  mx-auto  ">
    <section className="h-screen grid grid-rows-[auto_2fr_auto] bg-gray-950/100 overflow-y-scroll sm:justify-normal justify-center overflow-x-hidden ">
      <PageNav />
      <main>{isLoading ? <Loader /> : <Outlet />}</main>
      <Footer />
    </section>
  );
}

export default AppLayout;
