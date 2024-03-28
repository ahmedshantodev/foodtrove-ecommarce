import React from "react";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const NewsCard = ({
  className,
  postBy,
  postCategory,
  newsHeading,
  newsPath,
  newsImage,
  imageAltText,
  postDate,
  postMonth
}) => {
  console.log(className);
  return (
    <div
      className={`${className} bg-white rounded-[5px] overflow-hidden border borde-[#e9e9e9] relative`}
    >
      <div className="py-[29px] pr-[46px] pl-[25px]">
        <Paragraph
          text={`By ${postBy} | ${postCategory}`}
          className={"text-secondary-text font-arial text-sm mb-2.5"}
        />
        <Heading
          as="h3"
          text={newsHeading}
          className=" font-poppins text-[17px] font-semibold mb-3"
        />
        <Link to={newsPath} className=" font-arial font-bold text-[#64B496]">
          Read More...
        </Link>
      </div>
      <div className=" absolute bottom-[15px] right-[15px] text-center block rounded-[5px] bg-[#484a4c] opacity-90 py-[15px] px-[18px]">
        <Paragraph
          text={postDate}
          className={"text-white font-arial text-[23px] font-bold leading-none"}
        />
        <Paragraph
          text={postMonth}
          className={"text-[17px] font-lato text-white"}
        />
      </div>
      <picture>
        <Image
          imageLink={newsImage}
          altText={imageAltText}
          className={"w-full"}
        />
      </picture>
    </div>
  );
};

export default NewsCard;
