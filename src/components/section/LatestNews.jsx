import React from "react";
import Container from "../layout/Container";
import SectionHeader from "../layout/SectionHeader";
import NewsCard from "../layout/NewsCard";
import newsTwo from "/public/images/news-two.png";
import newsThree from "/public/images/news-three.png";
import Flex from "../layout/Flex";
import sideImageOne from "/public/images/side-image-7.png";
import sideImageTwo from "/public/images/side-image-8.png";
import Image from "../layout/Image";

const LatestNews = () => {
  let newsInformation = [
    {
      id: "01",
      postBy: "Admin",
      postCategory: "Snacks",
      newsHeading: "Urna pretium elit mauris cursus at elit Vestibulum.",
      newsPath: "/news",
      newsImage: newsThree,
      imageAltText: "random-image",
      postDate: "10",
      postMonth: "oct",
    },
    {
      id: "02",
      postBy: "Admin",
      postCategory: "Food",
      newsHeading: "Best guide to Shopping for organic ingredients.",
      newsPath: "/news",
      newsImage: newsTwo,
      imageAltText: "random-image",
      postDate: "15",
      postMonth: "jan",
    },
    {
      id: "03",
      postBy: "Admin",
      postCategory: "Ice Cream",
      newsHeading: "Cursus at elit vestibulum urna pretium elit mauris.",
      newsPath: "/news",
      newsImage: newsThree,
      imageAltText: "random-image",
      postDate: "20",
      postMonth: "sep",
    },
  ];

  return (
    <section className="py-[100px] relative">
      <Image
        imageLink={sideImageOne}
        altText={"random-image"}
        className={"absolute top-[15%] right-[3%] animate-pulse"}
      />
      <Image
        imageLink={sideImageTwo}
        altText={"random-image"}
        className={"absolute top-[65%] left-[3%] animate-pulse"}
      />
      <Container>
        <SectionHeader
          heading={"Latest News"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis."
          }
        />
        <Flex className="mt-[40px] justify-between">
          {newsInformation.map((item) => (
            <NewsCard
              className={"w-[416px]"}
              postBy={item.postBy}
              postCategory={item.postCategory}
              newsHeading={item.newsHeading}
              newsPath={item.newsPath}
              newsImage={item.newsImage}
              imageAltText={item.imageAltText}
              postDate={item.postDate}
              postMonth={item.postMonth}
            />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default LatestNews;
