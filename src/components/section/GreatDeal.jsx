import React from "react";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import Timer from "../layout/Timer";

const GreatDeal = () => {
  return (
    <section className="bg-great-deal-bg bg-no-repeat bg-cover bg-center py-[162px]">
      <Container>
        <div className="w-[480px] bg-[#f0d4bf] p-6 rounded-[5px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Heading
            as="h4"
            text={[
              "35%",
              <span className="text-black ml-[5px] text-[17px] font-[600]">
                OFF
              </span>,
            ]}
            className="text-[26px] text-primary-color font-bold font-arial"
          />
          <Heading
            as="h4"
            text="Great deal on organic food."
            className="mt-0 font-bold font-airal text-[28px]"
          />
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis."
            }
            className={"font-poppins text-[14px] font-light mt-3 text-[#7A7A7A]"}
          />
          <Timer className={"mt-[22px]"}/>
        </div>
      </Container>
    </section>
  );
};

export default GreatDeal;
