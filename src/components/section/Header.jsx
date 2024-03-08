import React, { useState } from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Input from "../layout/Input";
import Image from "../layout/Image";
import Button from "../layout/Button";
import Paragraph from "../layout/Paragraph";
import companyLogo from "../../../public/images/logo.png";
import { RiUser3Line, RiHeart3Line, RiShoppingCartLine } from "react-icons/ri";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [allCategoryOpen, setAllCategoryOpen] = useState(false);

  return (
    <section className="">
      <Container>
        <Flex className={"items-center justify-between"}>
          <picture>
            <Image
              imageLink={companyLogo}
              altText={"company-logo"}
              className={"w-[162px]"}
            />
          </picture>
          <Flex className="rounded-[6px] items-center border-primary-color border">
            <Input
              type={"text"}
              placeholder={"Search For items"}
              className={
                "py-3 px-4 w-[424px] outline-none font-poppins placeholder:text-secondary-text text-secondary-text rounded-bl-md rounded-tl-lg"
              }
            />
            <div className="relative">
              <Button
                onClick={() => setAllCategoryOpen(!allCategoryOpen)}
                className={
                  "flex items-center bg-white capitalize gap-x-3 px-3 py-3 border-l border-primary-color"
                }
              >
                all category{" "}
                <FiChevronDown
                  className={`mt-1 transition-all duration-150 ease-in ${
                    allCategoryOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
              <div
                className={`bg-white w-[150px] text-center py-2.5 absolute top-[30px] left-2/4 -translate-x-2/4 rounded-[5px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-all duration-150 ease-in space-y-2 [&>*:nth-last-child(1)]:text-primary-color ${
                  allCategoryOpen
                    ? "visible opacity-100 translate-y-5 "
                    : "invisible opacity-0 translate-y-0 "
                }`}
              >
                <Paragraph
                  text={"cake & milk"}
                  className={
                    "capitalize hover:text-primary-color font-semibold cursor-pointer"
                  }
                />
                <Paragraph
                  text={"fresh meat"}
                  className={
                    "capitalize hover:text-primary-color font-semibold cursor-pointer"
                  }
                />
                <Paragraph
                  text={"vegetables"}
                  className={
                    "capitalize hover:text-primary-color font-semibold cursor-pointer"
                  }
                />
                <Paragraph
                  text={"apple & mango"}
                  className={
                    "capitalize hover:text-primary-color font-semibold cursor-pointer"
                  }
                />
                <Paragraph
                  text={"stawberry"}
                  className={
                    "capitalize hover:text-primary-color font-semibold cursor-pointer"
                  }
                />
                <Paragraph
                  text={"view more"}
                  className={
                    "capitalize hover:text-primary-color font-semibold cursor-pointer"
                  }
                />
              </div>
            </div>
            <Button className="bg-primary-color text-white py-4 px-5 text-lg group/button rounded-br-[6px] rounded-tr-[6px]">
              <FiSearch className="group-hover/button:scale-110 transition-all duration-200 ease-in" />
            </Button>
          </Flex>
          <Flex className={"items-center gap-x-8"}>
            <Link className={"flex items-center gap-x-2 group"}>
              <RiUser3Line className="text-[22px] group-hover:text-primary-color transition-all duration-300 ease-in" />
              <Paragraph
                text="account"
                className={
                  "font-semibold capitalize text-[20px] group-hover:text-primary-color transition-all duration-300 ease-in"
                }
              />
            </Link>
            <Link className={"flex items-center gap-x-2 group"}>
              <div className=" relative">
                <RiHeart3Line className="text-[22px] group-hover:text-primary-color transition-all duration-300 ease-in" />
                {/* <span className="flex items-center justify-center absolute -top-[5px] -right-[5px] text-[10px] bg-primary-color w-[16px] h-[16px] text-white rounded-full">
                  5
                </span> */}
              </div>
              <Paragraph
                text="wishlist"
                className={
                  "font-semibold capitalize text-[20px] group-hover:text-primary-color transition-all duration-300 ease-in"
                }
              />
            </Link>
            <Link className={"flex items-center gap-x-2 group"}>
              <div className=" relative">
                <RiShoppingCartLine className="text-[22px] group-hover:text-primary-color transition-all duration-300 ease-in" />
                <span className="flex items-center justify-center absolute -top-[5px] -right-[5px] text-[10px] bg-primary-color w-[16px] h-[16px] text-white rounded-full">
                  5
                </span>
              </div>
              <Paragraph
                text="cart"
                className={
                  "font-semibold capitalize text-[20px] group-hover:text-primary-color transition-all duration-300 ease-in"
                }
              />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Header;
