import React from "react";
import Banner from "../components/section/Banner";
import Category from "../components/section/Category";
import PopulerProducts from "../components/section/PopulerProducts";
import ExtraService from "../components/section/ExtraService";
import GreatDeal from "../components/section/GreatDeal";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <PopulerProducts />
      <ExtraService />
      <GreatDeal />
    </>
  );
};

export default Home;
