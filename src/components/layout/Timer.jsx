import React, { useEffect, useState } from "react";
import Paragraph from "./Paragraph";

const Timer = ({ className }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "11:00 pm, may, 17, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60) / 24));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / (1000 * 60)) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTime(deadline), 1000;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${className} w-[330px] py-[13px] px-[25px] rounded-[5px] border-[2px] border-[#E9CBBE] flex justify-between items-center`}
    >
      <div className="text-center">
        <Paragraph
          text={days < 10 ? "0" + days : days}
          className={"font-poppins font-bold text-[20px]"}
        />
        <Paragraph
          text={"Days"}
          className={"font-poppins font-normal text-sm text-[#7A7A7A]"}
        />
      </div>
      <Paragraph
        text={":"}
        className={"text-[#7A7A7A] text-[24px] font-bold"}
      />
      <div className="text-center">
        <Paragraph
          text={hours < 10 ? "0" + hours : hours}
          className={"font-poppins font-bold text-[20px]"}
        />
        <Paragraph
          text={"Hrs"}
          className={"font-poppins font-normal text-sm text-[#7A7A7A]"}
        />
      </div>
      <Paragraph
        text={":"}
        className={"text-[#7A7A7A] text-[24px] font-bold"}
      />
      <div className="text-center">
        <Paragraph
          text={minutes < 10 ? "0" + minutes : minutes}
          className={"font-poppins font-bold text-[20px]"}
        />
        <Paragraph
          text={"Min"}
          className={"font-poppins font-normal text-sm text-[#7A7A7A]"}
        />
      </div>
      <Paragraph
        text={":"}
        className={"text-[#7A7A7A] text-[24px] font-bold"}
      />
      <div className="text-center">
        <Paragraph
          text={seconds < 10 ? "0" + seconds : seconds}
          className={"font-poppins font-bold text-[20px]"}
        />
        <Paragraph
          text={"Sec"}
          className={"font-poppins font-normal text-sm text-[#7A7A7A]"}
        />
      </div>
    </div>
  );
};

export default Timer;
