import React, { useState } from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import three from "/public/images/Food-slide-three.png";
import sideImage from "/public/images/side-image-5.png";
import two from "/public/images/Food-slide-two.png";
import Image from "../layout/Image";
import { Link } from "react-router-dom";

const FoodListBox = () => {
  const [itemOpen, setItemOpen] = useState(2);

  let listItem = [
    {
      id: 1,
      image: three,
      imageAltText: "random-food-image",
      path: "/category",
    },
    {
      id: 2,
      image: three,
      imageAltText: "random-food-image",
      path: "/category",
    },
    {
      id: 3,
      image: three,
      imageAltText: "random-food-image",
      path: "/category",
    },
  ];

  return (
    <section className="pt-[100px] relative">
      <Image
        imageLink={sideImage}
        altText={"random-image"}
        className={"absolute top-2/4 -translate-y-2/4 right-[3%] animate-pulse"}
      />
      <Container>
        {/* hight ta dynamin kora hoynay */}
        <Flex className={"justify-between gap-x-6 h-[475px]"}>
          {listItem.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setItemOpen(index)}
              className={`${
                itemOpen == index ? "w-2/4" : "w-1/4"
              } duration-300 cursor-pointer`}
            >
              <Link to={itemOpen == index ? item.path : ""}>
                <Image
                  imageLink={item.image}
                  altText={item.imageAltText}
                  className={`w-full rounded-[6px] object-cover h-[100%] duration-300 ${
                    itemOpen == index ? "object-left" : "object-[15%]"
                  }`}
                />
              </Link>
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default FoodListBox;
