import React from "react";
import Banner from "../components/section/Banner";
import Category from "../components/section/Category";
import PopulerProducts from "../components/section/PopulerProducts";
import ExtraService from "../components/section/ExtraService";
import GreatDeal from "../components/section/GreatDeal";
import FoodListBox from "../components/section/FoodListBox";
import CustomerReview from "../components/section/CustomerReview";
import LatestNews from "../components/section/LatestNews";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <PopulerProducts />
      <ExtraService />
      <GreatDeal />
      <FoodListBox />
      <CustomerReview />
      <LatestNews />
    </>
  );
};

export default Home;
