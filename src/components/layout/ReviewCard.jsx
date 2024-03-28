import React from "react";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import Flex from "./Flex";
import quotation from "/public/images/quotation-image.png";
import Image from "./Image";
import StarRating from "./StarRating";

const ReviewCard = ({
  className,
  clientImage,
  clientInfo,
  clientName,
  clientWords,
  rating,
}) => {
  return (
    <div
      className={`${className} relative pt-[82px] px-[62px] pb-8 rounded-md text-center bg-[#F7F7F8] border border-[#E9E9E9]`}
    >
      <Image
        imageLink={quotation}
        altText={"quotation-image"}
        className={"w-[50px] absolute top-5 left-8"}
      />
      <Image
        imageLink={quotation}
        altText={"quotation-image"}
        className={"w-[50px] absolute bottom-5 right-8 rotate-180"}
      />
      <div className="w-[140px] absolute top-0 -translate-y-2/4 left-2/4 -translate-x-2/4 p-[15px] bg-white rounded-full border-l-2 border-b-2 border-[#E9E9E9]">
        <Image
          imageLink={clientImage}
          altText={"clientImage-image"}
          className={"w-full rounded-full"}
        />
      </div>
      <Paragraph
        text={clientInfo}
        className={" text-secondary-text font-poppins mb-2.5"}
      />
      <Heading
        as="h3"
        text={clientName}
        className="font-poppins text-lg font-bold mb-[14px]"
      />
      <q className="text-secondary-text font-poppins text-sm">{clientWords}</q>
      <Flex className={"justify-center items-center mx-auto mt-2"}>
        <StarRating rating={rating} />
      </Flex>
    </div>
  );
};

export default ReviewCard;
