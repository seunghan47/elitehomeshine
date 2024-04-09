import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../components/page_wrapper/Header";
import Footer from "../components/page_wrapper/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
