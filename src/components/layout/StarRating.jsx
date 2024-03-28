import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import Flex from './Flex'

const StarRating = ({ rating }) => {
  let stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      Math.floor(rating) > i ? (
        <MdOutlineStarPurple500 className="text-[#F5885F] text-[22px]" />
      ) : rating > i && rating < i + 1 ? (
        <MdStarHalf className="text-[#F5885F] text-[22px]" />
      ) : (
        <MdOutlineStarBorder className="text-[#F5885F] text-[22px]" />
      )
    );
  }

  return <Flex className="flex">{stars}</Flex>;
};

export default StarRating;