import React, { useState } from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import three from "/public/images/Food-slide-three.png";
import sideImage from "/public/images/side-image-5.png";
import two from "/public/images/Food-slide-two.png";
import Image from "../layout/Image";

const FoodImageSlide = () => {
  const [itemOpen, setItemOpen] = useState("three");

  return (
    <section className="py-[100px] relative">
      <Image
        imageLink={sideImage}
        altText={"random-image"}
        className={"absolute top-2/4 -translate-y-2/4 right-[3%]"}
      />
      <Container>
        <Flex className={"justify-between gap-x-6 h-[475px]"}>
          <div
            onClick={() => setItemOpen("one")}
            className={`${
              itemOpen == "one" ? "w-2/4" : "w-1/4"
            } duration-300 cursor-pointer`}
          >
            <Image
              imageLink={three}
              altText={"random-image"}
              className={
                "w-full rounded-[5px] object-cover object-left h-[100%]"
              }
            />
          </div>
          <div
            onClick={() => setItemOpen("two")}
            className={`${
              itemOpen == "two" ? "w-2/4" : "w-1/4"
            } duration-300 cursor-pointer`}
          >
            <Image
              imageLink={three}
              altText={"random-image"}
              className={
                "w-full rounded-[5px] object-cover object-left h-[100%]"
              }
            />
          </div>
          <div
            onClick={() => setItemOpen("three")}
            className={`${
              itemOpen == "three" ? "w-2/4" : "w-1/4"
            } duration-300 cursor-pointer`}
          >
            <Image
              imageLink={three}
              altText={"random-image"}
              className={"w-full rounded-[5px] object-cover object-left h-full"}
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default FoodImageSlide;
