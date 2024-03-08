import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "../layout/Image";
import bannerImage from "../../../public/images/banner-slider-image.png";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const [dotActive, setDotActive] = useState(0);

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul className="flex gap-x-5 items-center"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "16px",
                height: "16px",
                backgroundColor: "#64B496",
                borderRadius: "50%",
                border: "2px solid #64B496",
                cursor: "pointer",
              }
            : {
                width: "16px",
                height: "16px",
                backgroundColor: "transparent",
                borderRadius: "50%",
                border: "2px solid #64B496",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section className="relative">
      <Slider {...settings}>
        <Link>
          <picture>
            <Image
              imageLink={bannerImage}
              altText={"random-image"}
              className={"w-full"}
            />
          </picture>
        </Link>

        <Link>
          <picture>
            <Image
              imageLink={bannerImage}
              altText={"random-image"}
              className={"w-full"}
            />
          </picture>
        </Link>

        <Link>
          <picture>
            <Image
              imageLink={bannerImage}
              altText={"random-image"}
              className={"w-full"}
            />
          </picture>
        </Link>
      </Slider>
    </section>
  );
}
