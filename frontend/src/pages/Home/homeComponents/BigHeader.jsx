import React from "react";
import { questionmark } from "../../../icons";

//assets
import { handspics, rectangle } from "../../../assets/index";

function BigHeader() {
  return (
    <div className="w-screen flex flex-col lg:flex-row py-[0.625rem] px-[1.15625rem] items-center lg:pt-[5.5625rem]  ">
      <div className="  lg:ml-[6.25rem]   ">
        <h1 className=" font-Jost not-italic font-big text-2xl mr-[2.5rem]  lg:pt-[3.0625rem] lg:w-[44.25rem] lg:text-4xl lg:leading-[5.75rem]  text-secondary-main flex  items-center  ">
          Take control of your business and payment
        </h1>
        <h1 className=" font-Jost not-italic font-regular text-sm leading-[1.6875rem] lg:w-[41.3125rem]  text-white-30 mt-[1.25rem] items-center ">
          Allow your business to accept payment online and offline, build
          financial products, sell online, stay compliant and grow your revenue
        </h1>
        <div className=" flex flex-row items-center mt-[1.25rem] ">
          <h1 className=" rounded-[0.3125rem] bg-Rectangle justify-center items-center py-[0.625rem]  px-[1.25rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-white-60 ">
            Create a free account
          </h1>
          <div className="  ml-[1.25rem] rounded-[0.3125rem] flex flex-row items-center justify-center ">
            <img
              src={questionmark}
              alt=""
              className="w-[1.25rem] h-[1.25rem] "
            />
            <h1 className="  font-Jost not-italic text-s leading-[1.4375rem] text-center text-Rectangle ml-[0.75rem] ">
              Speak to sales
            </h1>
          </div>
        </div>
      </div>
      <div className=" relative">
        <img
          src={handspics}
          alt=""
          className="object-contain  relative w-[33.3125rem] h-[26.3125rem] z-10"
        />
      </div>
      <img
        src={rectangle}
        alt=""
        className="absolute left-[15.3125rem] top-[29.0625rem] lg:top-[6.25rem] lg:left-[53.125rem] lg:w-[31.25rem] lg:h-[34.375rem] z-0 "
      />
    </div>
  );
}

export default BigHeader;
