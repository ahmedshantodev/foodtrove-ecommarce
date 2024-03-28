import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Image from "../layout/Image";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import List from "../layout/List";
import Listitem from "../layout/Listitem";
import logo from "/public/images/logo.png";
import { GrLocation } from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";
import { TbPhone } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  let company = [
    {
      id: "01",
      name: "about us",
      path: "/about-us",
    },
    {
      id: "02",
      name: "Delivery Information",
      path: "/delivery-information",
    },
    {
      id: "03",
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      id: "04",
      name: "Terms & Conditions",
      path: "/terms&conditions",
    },
    {
      id: "05",
      name: "contact Us",
      path: "/contact-us",
    },
    {
      id: "06",
      name: "Support Center",
      path: "/support-center",
    },
  ];

  let category = [
    {
      id: "01",
      name: "Dairy & Bakery",
      path: "/dairy&bakery",
    },
    {
      id: "02",
      name: "Fruits & Vegetable",
      path: "/fruits&vegetable",
    },
    {
      id: "03",
      name: "Snack & Spice",
      path: "/snack&spice",
    },
    {
      id: "04",
      name: "Juice & Drinks",
      path: "/juice&drinks",
    },
    {
      id: "05",
      name: "Chicken & Meat",
      path: "/chicken&meat",
    },
    {
      id: "06",
      name: "Fast Food",
      path: "/fast-food",
    },
  ];

  return (
    <section className="bg-[#f7f7f8] py-[100px] border-t borde-[#e9e9e9]">
      <Container>
        <Flex>
          <Flex className="w-2/3">
            <div className="w-2/4 pr-[33px]">
              <Image imageLink={logo} altText={"company-logo"} className={""} />
              <Paragraph
                text={
                  "FoodTrove is the biggest market of grocery products. Get your daily needs from our store."
                }
                className={"text-secondary-text font-poppins text-sm mb-7"}
              />
              <List>
                <Listitem
                  className={
                    "text-secondary-text font-poppins text-sm mb-6 flex gap-x-[14px] leading-none text-[20px] hover:text-primary-color duration-300 ease-in-out"
                  }
                >
                  <GrLocation className="text-[22px] text-primary-color" />
                  <a
                    href="https://maps.app.goo.gl/5Di8fVyeKPRNUdQdA"
                    target="_blank"
                    className={"leading-normal"}
                  >
                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY
                    4783, USA.
                  </a>
                </Listitem>
                <Listitem
                  className={
                    "text-secondary-text font-poppins text-sm mb-6 flex items-center gap-x-[14px] leading-none text-[24px] hover:text-primary-color duration-300 ease-in-out"
                  }
                >
                  <RiMailSendLine className="text-[22px] text-primary-color" />

                  <a href="mailto:example@email.com">example@email.com</a>
                </Listitem>
                <Listitem
                  className={
                    "text-secondary-text font-poppins text-sm mb-6 flex items-center gap-x-[14px] leading-none text-[24px] hover:text-primary-color duration-300 ease-in-out"
                  }
                >
                  <TbPhone className="text-[22px] text-primary-color" />
                  <a href="tel:+911234567890">+91 123 4567890</a>
                </Listitem>
              </List>
            </div>
            <div className="w-1/4 mt-6">
              <Heading
                as="h4"
                text="Company"
                className="font-arial text-lg font-bold"
              />
              <List className={"mt-5"}>
                {company.map((item) => (
                  <Listitem
                    className={
                      "text-secondary-text capitalize font-poppins text-sm mb-6 flex items-center gap-x-[14px] leading-none text-[24px] hover:text-primary-color duration-300 ease-in-out"
                    }
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </Listitem>
                ))}
              </List>
            </div>
            <div className="w-1/4 mt-6">
            <Heading
                as="h4"
                text="Category"
                className="font-arial text-lg font-bold"
              />
              <List className={"mt-5"}>
                {category.map((item) => (
                  <Listitem
                    className={
                      "text-secondary-text capitalize font-poppins text-sm mb-6 flex items-center gap-x-[14px] leading-none text-[24px] hover:text-primary-color duration-300 ease-in-out"
                    }
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </Listitem>
                ))}
              </List>
            </div>
          </Flex>
          <div className="bg-green-100 w-1/3 mt-6">33%</div>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
