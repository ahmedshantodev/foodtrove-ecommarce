// import React from "react";
// import Image from "../layout/Image";
// import bannerImage from "../../../public/images/banner-slider-image.png";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <section>
//       <Link>
//         <picture>
//           <Image
//             imageLink={bannerImage}
//             altText={"random-image"}
//             className={"w-full"}
//           />
//         </picture>
//       </Link>
//     </section>
//   );
// };

// export default Banner;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../layout/Image";
import bannerImage from "../../../public/images/banner-slider-image.png";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
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
  );
}
