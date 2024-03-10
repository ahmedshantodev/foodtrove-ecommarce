import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import { RiShoppingBagLine, RiStarHalfFill, RiStarFill } from "react-icons/ri";

import productImage1 from "../../../public/images/product image 1.png";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";

const ProductCardOne = ({
  path,
  className,
  imageLink,
  category,
  ratting,
  productName,
  offerPrice,
  normalPrice,
}) => {
  return (
    <Link to={path}>
      <div
        className={`${className} relative bg-white border border-[#e9e9e9] rounded-[5px] px-[13px] pt-[13px] pb-[20px] text-center`}
      >
        <Image
          imageLink={imageLink}
          altText={"random-iamge"}
          className={"w-full bg-white border border-[#e9e9e9] rounded-[5px]"}
        />
        <div className="w-[40px] h-[40px] flex justify-center items-center bg-white border-[2px] border-[#e9e9e9] rounded-full absolute top-[270px] left-2/4 -translate-x-2/4 cursor-pointer">
          <RiShoppingBagLine className="text-primary-color text-lg" />
        </div>
        <Heading
          text={category}
          className=" text-secondary-text mt-8 capitalize mb-[8px]"
        />
        <Flex className={"justify-center gap-x-[6px] mb-3"}>
          <Flex className={"justify-center items-center gap-x-[2px]"}>
            <RiStarFill className="text-[#F5885F] text-[13px]" />
            <RiStarFill className="text-[#F5885F] text-[13px]" />
            <RiStarFill className="text-[#F5885F] text-[13px]" />
            <RiStarFill className="text-[#F5885F] text-[13px]" />
            <RiStarFill className="text-[#F5885F] text-[13px]" />
          </Flex>
          <Paragraph
            text={ratting}
            className={" font-poppins text-[11px] text-secondary-text"}
          />
        </Flex>
        <Paragraph
          text={productName}
          className={"font-poppins text-[15px] font-medium mb-[11px] px-2"}
        />
        <Flex className={"justify-center items-center gap-x-2.5 mb-[3px]"}>
          <Paragraph
            text={offerPrice}
            className={"text-primary-color font-poppins font-bold"}
          />
          <Paragraph
            text={normalPrice}
            className={
              "font-poppins font-medium text-secondary-text line-through"
            }
          />
        </Flex>
      </div>
    </Link>
  );
};

export default ProductCardOne;
