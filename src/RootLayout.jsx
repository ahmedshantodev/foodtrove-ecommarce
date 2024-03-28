import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/section/Navbar";
import Header from "./components/section/Header";
import Footer from "./components/section/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
