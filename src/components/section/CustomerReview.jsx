import React from "react";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import Flex from "../layout/Flex";
import ReviewCard from "../layout/ReviewCard";
import Container from "../layout/Container";
import clientImageOne from "/public/images/client-image-one.jpg";
import clientImageTwo from "/public/images/client-image-two.jpg";
import clientImageThree from "/public/images/client-image-three.jpg";
import sideImage from "/public/images/side-image-6.png";
import Image from "../layout/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SectionHeader from "../layout/SectionHeader";

const CustomerReview = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
  };

  let review = [
    {
      id: "01",
      image: clientImageOne,
      info: "Co Founder",
      name: "Stephen Smith",
      review:
        "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.",
      rating: 5,
    },
    {
      id: "02",
      image: clientImageTwo,
      info: "Manager",
      name: "Lorem Robinson",
      review:
        "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.",
      rating: 4.5,
    },
    {
      id: "03",
      image: clientImageThree,
      info: "Team Leader",
      name: "Saddika Alard",
      review:
        "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.",
      rating: 5,
    },
    {
      id: "04",
      image: clientImageTwo,
      info: "Senior Developer",
      name: "jack Alard",
      review:
        "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.",
      rating: 4.5,
    },
  ];

  return (
    <section className="pt-[100px] relative">
      <Image
        imageLink={sideImage}
        altText={"random-image"}
        className={"absolute top-[18%] left-[2%] animate-pulse"}
      />
      <Container>
        <SectionHeader
          heading={"Great Words From People"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."
          }
        />
        <div className="slider-container">
          <Slider {...settings}>
            {review.map((item, index) => (
              <ReviewCard
                className={"w-[416px] mt-24"}
                key={item.id}
                clientImage={item.image}
                clientInfo={item.info}
                clientName={item.name}
                clientWords={item.review}
                rating={item.rating}
              />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default CustomerReview;
