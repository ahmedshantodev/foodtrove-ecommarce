import React from "react";
import Banner from "../components/section/Banner";
import Category from "../components/section/Category";
import PopulerProducts from "../components/section/PopulerProducts";
import ExtraService from "../components/section/ExtraService";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <PopulerProducts />
      <ExtraService />
    </>
  );
};

export default Home;
