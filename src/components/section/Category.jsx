import React, { useState } from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import List from "../layout/List";
import Listitem from "../layout/Listitem";
import Image from "../layout/Image";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import { Link } from "react-router-dom";
import mashroom from "../../../public/images/mashroom.png";

const Category = () => {
  let categoryInfo = [
    {
      name: "cake & milk",
      item: "(65 items)",
      images: [
        { link: "../../../public/images/category image two.png", path: "" },
        { link: "../../../public/images/category image one.png", path: "" },
      ],
    },
    {
      name: "fresh meat",
      item: "(30 items)",
      images: [
        { link: "../../../public/images/category image one.png", path: "" },
        { link: "../../../public/images/category image two.png", path: "" },
      ],
    },
    {
      name: "vegetables",
      item: "(25 items)",
      images: [
        { link: "../../../public/images/category image two.png", path: "" },
        { link: "../../../public/images/category image one.png", path: "" },
      ],
    },
    {
      name: "apple & mango",
      item: "(45 items)",
      images: [
        { link: "../../../public/images/category image one.png", path: "" },
        { link: "../../../public/images/category image two.png", path: "" },
      ],
    },
    {
      name: "stawberry",
      item: "(68 items)",
      images: [
        { link: "../../../public/images/category image two.png", path: "" },
        { link: "../../../public/images/category image one.png", path: "" },
      ],
    },
  ];

  // useState ta dynamic kora hoynay
  const [cetegoryOpen, setCategoryOpen] = useState("cake & milk");
  return (
    <section className="pt-[100px] mb-10 relative">
      <Image
        imageLink={mashroom}
        altText={"random-image"}
        className={"absolute top-[17%] right-[4%] animate-pulse"}
      />
      <Container>
        <Flex className={"gap-x-6"}>
          <div className="w-1/3">
            <List className={"space-y-[5px]"}>
              {categoryInfo.map((item) => (
                <Listitem
                  onClick={() => setCategoryOpen(item.name)}
                  className={
                    "bg-[#F7F7F8] group py-4 rounded-[5px] text-center border border-[#E9E9E9] cursor-pointer"
                  }
                >
                  <Heading
                    text={item.name}
                    className={`font-poppins font-medium capitalize transition-all duration-300 group-hover:text-primary-color ${
                      cetegoryOpen == item.name
                        ? "text-primary-color"
                        : "text-primary-text"
                    }`}
                  />
                  <Paragraph
                    text={item.item}
                    className={"font-poppins text-secondary-text"}
                  />
                </Listitem>
              ))}
              <Listitem
                className={
                  "bg-[#F7F7F8] py-7 rounded-[5px] text-center border border-[#E9E9E9]"
                }
              >
                <Heading
                  text={"view more"}
                  className=" font-poppins font-medium text-primary-color capitalize cursor-pointer"
                />
              </Listitem>
            </List>
          </div>
          <Flex className="w-2/3 justify-between gap-x-6">
            {categoryInfo.map(
              (item) =>
                cetegoryOpen == item.name &&
                item.images.map((item) => (
                  <Link to={item.path}>
                    <Image
                      imageLink={item.link}
                      altText={item.name}
                      className={" rounded-[5px]"}
                    />
                  </Link>
                ))
            )}
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Category;
