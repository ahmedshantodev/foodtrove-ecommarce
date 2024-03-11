import React from "react";
import Image from "./Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const ServiceCard = ({ className , imageLink, altText, HeadingText, ParagraphText }) => {
  return (
    <div className={`${className} bg-[#f7f7f8] rounded-[5px] border border-[#e9e9e9] pt-5 pb-[25px] px-[25px] text-center`}>
      <Image
        imageLink={imageLink}
        altText={altText}
        className={"mb-4 w-[45px] mx-auto"}
      />
      <Heading
        text={HeadingText}
        className=" font-poppins font-semibold text-lg mb-[9px]"
      />
      <Paragraph
        text={ParagraphText}
        className="px-[10%] font-poppins font-light text-sm text-secondary-text"
      />
    </div>
  );
};

export default ServiceCard;
