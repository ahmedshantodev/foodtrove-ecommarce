import React, { useState } from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import Image from "../layout/Image";
import { FaArrowRight } from "react-icons/fa";
import leftBannerImage from "../../../public/images/populer product page banner image.png";
import { Link } from "react-router-dom";
import ProductCardOne from "../layout/ProductCardOne";
import { profuctInfo } from "../../Demo Data/ProductDetails";
import carret from "../../../public/images/carret.png";
import sideImage2 from "../../../public/images/side-image-2.png";
import sideImage3 from "../../../public/images/side-image-3.png";
import one from "../../../public/images/one.png";
import two from "../../../public/images/two.png";
import three from "../../../public/images/three.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const PopulerProducts = () => {
  const [dotActive, setDotActive] = useState(0);

  let category = [
    { name: "all" },
    { name: "snake" },
    { name: "vegetable" },
    { name: "fruit" },
    { name: "bakery" },
  ];
  const [categoryItemOpen, setCategoryItemOpen] = useState(category.at(0).name);

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-25px",
        }}
      >
        <ul style={{ display: "flex" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i == dotActive
            ? {
                width: "10px",
                height: "10px",
                margin: "3px",
                backgroundColor: "#f53e32",
                border: "1px #f53e32 solid",
                borderRadius: "50%",
              }
            : {
                width: "10px",
                height: "10px",
                margin: "3px",
                backgroundColor: "white",
                border: "1px #f53e32 solid",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      >
        {}
      </div>
    ),
  };

  return (
    <section className="mt-[100px] relative">
      <Image
        imageLink={carret}
        altText={"random-image"}
        className={"absolute top-[30%] left-[5%] animate-pulse"}
      />
      <Image
        imageLink={sideImage2}
        altText={"random-image"}
        className={"absolute top-[77%] left-[10%] animate-pulse"}
      />
      <Image
        imageLink={sideImage3}
        altText={"random-image"}
        className={"absolute top-[92%] right-[4%] animate-pulse"}
      />
      <Container>
        <div className="text-center">
          <Heading
            text={"populer products"}
            className=" font-arial font-bold text-[32px] mb-4 capitalize"
          />
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."
            }
            className={
              "font-poppins text-sm text-secondary-text w-[595px] mx-auto mb-8"
            }
          />
        </div>
        <Flex className={"justify-between gap-x-6"}>
          <div className="w-[25%] ">
            <div className="mb-3">
              {category.map((item) => (
                <div
                  onClick={() => setCategoryItemOpen(item.name)}
                  className={
                    "flex justify-between items-center py-[14px] pl-4 pr-7 group rounded-[5px] bg-[#F7F7F8] border border-[#E9E9E9] mb-[5px]  cursor-pointer"
                  }
                >
                  <Paragraph
                    text={item.name}
                    className={`capitalize font-poppins text-sm font-medium group-hover:text-primary-color transition-all duration-200 ${
                      categoryItemOpen == item.name && " text-primary-color"
                    }`}
                  />
                  <FaArrowRight
                    className={`group-hover:text-primary-color transition-all duration-300  group-hover:translate-x-2 ${
                      categoryItemOpen == item.name &&
                      " text-primary-color translate-x-2"
                    }`}
                  />
                </div>
              ))}
            </div>
            <Link>
              <Image
                imageLink={leftBannerImage}
                altText={"random-image"}
                className={"w-full"}
              />
            </Link>
          </div>
          <div className="w-3/4">
            <Flex className={"flex-wrap gap-x-6"}>
              {profuctInfo.map((item) => (
                <ProductCardOne
                  className={"w-[303px] mb-6"}
                  imageLink={item.image}
                  category={item.category}
                  ratting={item.ratting}
                  productName={item.productName}
                  offerPrice={item.offerPrice}
                  normalPrice={item.normalPrice}
                />
              ))}
            </Flex>
          </div>
        </Flex>
        <div className="mt-[90px]">
          <Slider {...settings}>
            <Link className="pr-6">
              <Image
                imageLink={one}
                altText={"random-image"}
                className={"w-full"}
              />
            </Link>
            <Link className="pr-6">
              <Image
                imageLink={two}
                altText={"random-image"}
                className={"w-full"}
              />
            </Link>
            <Link className="pr-6">
              <Image
                imageLink={three}
                altText={"random-image"}
                className={"w-full"}
              />
            </Link>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default PopulerProducts;
