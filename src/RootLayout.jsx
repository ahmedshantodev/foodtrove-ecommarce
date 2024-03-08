import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/section/Navbar";
import Header from "./components/section/Header";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
