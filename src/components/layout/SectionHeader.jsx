import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const Header = ({ className, heading, paragraph }) => {
  return (
    <div className={`${className} text-center`}>
      <Heading
        as="h3"
        text={heading}
        className=" font-arial font-bold text-[32px]"
      />
      <Paragraph
        text={paragraph}
        className={`text-secondary-text w-[600px] mx-auto mt-4 font-poppins text-sm`}
      />
    </div>
  );
};

export default Header;
