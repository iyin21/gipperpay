import React from "react";
import { questionmark } from "../../../icons";

//assets
import { handspics, rectangle } from "../../../assets/index";

function BigHeader() {
  return (
    <div className=" flex flex-col lg:flex-row py-[32px] px-[18.5px] items-center lg:pt-[89px]  ">
      <div className="  lg:ml-[100px]   ">
        <h1 className=" font-Jost not-italic font-big text-2xl mr-[40px]  lg:pt-[49px] lg:w-[708px] lg:text-4xl lg:leading-[92px]  text-secondary-main flex  items-center  ">
          Take control of your business and payment
        </h1>
        <h1 className=" font-Jost not-italic font-regular text-sm leading-[27px] lg:w-[661px]  text-white-30 mt-[20px] items-center ">
          Allow your business to accept payment online and offline, build
          financial products, sell online, stay compliant and grow your revenue
        </h1>
        <div className=" flex flex-row items-center mt-[20px] ">
          <h1 className=" rounded-[5px] bg-Rectangle justify-center items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px] font-Jost not-italic font-regular text-s leading-[23px] text-white-60 ">
            Create a free account
          </h1>
          <div className="  ml-[20px] rounded-[5px] flex flex-row items-center justify-center ">
            <img src={questionmark} alt="" className="w-[20px] h-[20px] " />
            <h1 className="  font-Jost not-italic text-s leading-[23px] text-center text-Rectangle ml-[12px] ">
              Speak to sales
            </h1>
          </div>
        </div>
      </div>
      <div className=" relative">
        <img
          src={handspics}
          alt=""
          className="object-contain  relative w-[533px] h-[421px] z-10"
        />
      </div>
      <img
        src={rectangle}
        alt=""
        className="absolute left-[245px] top-[465px] lg:top-[100px] lg:left-[850px] lg:w-[500px] lg:h-[550px] z-0 "
      />
    </div>
  );
}

export default BigHeader;
