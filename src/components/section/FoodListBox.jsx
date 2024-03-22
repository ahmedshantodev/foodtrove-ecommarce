import React, { useState } from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import three from "/public/images/Food-slide-three.png";
import sideImage from "/public/images/side-image-5.png";
import two from "/public/images/Food-slide-two.png";
import Image from "../layout/Image";
import { Link } from "react-router-dom";

const FoodListBox = () => {
  const [itemOpen, setItemOpen] = useState("three");

  return (
    <section className="py-[100px] relative">
      <Image
        imageLink={sideImage}
        altText={"random-image"}
        className={"absolute top-2/4 -translate-y-2/4 right-[3%] animate-pulse"}
      />
      <Container>
        <Flex className={"justify-between gap-x-6 h-[475px]"}>
          <div
            onClick={() => setItemOpen("one")}
            className={`${
              itemOpen == "one" ? "w-2/4" : "w-1/4"
            } duration-300 cursor-pointer`}
          >
            <Link to={itemOpen == "one" ? "/category" : ""}>
              <Image
                imageLink={three}
                altText={"random-image"}
                className={
                  "w-full rounded-[6px] object-cover object-left h-[100%]"
                }
              />
            </Link>
          </div>
          <div
            onClick={() => setItemOpen("two")}
            className={`${
              itemOpen == "two" ? "w-2/4" : "w-1/4"
            } duration-300 cursor-pointer`}
          >
            <Link to={itemOpen == "two" ? "/category" : ""}>
              <Image
                imageLink={three}
                altText={"random-image"}
                className={
                  "w-full rounded-[6px] object-cover object-left h-[100%]"
                }
              />
            </Link>
          </div>
          <div
            onClick={() => setItemOpen("three")}
            className={`${
              itemOpen == "three" ? "w-2/4" : "w-1/4"
            } duration-300 cursor-pointer`}
          >
            <Link to={itemOpen == "three" ? "/category" : ""}>
              <Image
                imageLink={three}
                altText={"random-image"}
                className={
                  "w-full rounded-[6px] object-cover object-left h-full"
                }
              />
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default FoodListBox;
