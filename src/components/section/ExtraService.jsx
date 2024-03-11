import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Image from "../layout/Image";
import ServiceCard from "../layout/ServiceCard";
import sideImage4 from "../../../public/images/side-image-4.png";
import packing from "../../../public/images/packing.png";
import support from "../../../public/images/support.png";
import delivery from "../../../public/images/delivery.png";
import payment from "../../../public/images/payment.png";

const ExtraService = () => {
  return (
    <section className="mt-24 mb-24 relative">
      <Image
        imageLink={sideImage4}
        altText={"random iamge"}
        className=" absolute top-[5%] left-[5%] animate-pulse"
      />
      <Container>
        <Flex className={"justify-between items-center gap-x-6"}>
          <ServiceCard
            className="w-1/4"
            imageLink={packing}
            altText={"random iamge"}
            HeadingText={"Product Packing"}
            ParagraphText={
              "Lorem ipsum dolor sit amet, consectetur adipisicing."
            }
          />
          <ServiceCard
            className="w-1/4"
            imageLink={support}
            altText={"random iamge"}
            HeadingText={"24X7 Support"}
            ParagraphText={
              "Lorem ipsum dolor sit amet, consectetur adipisicing."
            }
          />
          <ServiceCard
            className="w-1/4"
            imageLink={delivery}
            altText={"random iamge"}
            HeadingText={"Delivery in 5 Days"}
            ParagraphText={
              "Lorem ipsum dolor sit amet, consectetur adipisicing."
            }
          />
          <ServiceCard
            className="w-1/4"
            imageLink={payment}
            HeadingText={"Payment Secure"}
            ParagraphText={
              "Lorem ipsum dolor sit amet, consectetur adipisicing."
            }
          />
        </Flex>
      </Container>
    </section>
  );
};

export default ExtraService;
