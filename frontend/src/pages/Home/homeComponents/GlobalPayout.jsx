import React from "react";

import { iphone12 } from "../../../assets";

function GlobalPayout() {
  return (
    <div className=" lg:flex lg:flex-row-reverse my-[66px] mx-[50px] lg:mt-[100px] items-center justify-center ">
      <div>
        <div className=" lg:grid lg:grid-cols-2 lg:gap-[20px] lg:w-[600px] ">
          <div className=" w-[290px] h-[300px] border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md px-[20px] py-[40px] mb-[20px] lg:mb-[0px]  ">
            <h1 className="font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main  ">
              Global payout
            </h1>
            <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              Supporting withdrawal in more than 30+ countries get paid easily
              and access business funds with no stress
            </h1>
          </div>
          <div className=" w-[290px] h-[300px] border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md px-[20px] py-[40px] mb-[20px] lg:mb-[0px]   ">
            <h1 className="font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main  ">
              Process payment the seamless way Using our payment tools
            </h1>
            <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              A tailored payment tool for receiving and processing everything
              payment seamlessly
            </h1>
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-2 mt-[30px] lg:w-[750px] lg:pl-[141px] lg:gap-[20px]  ">
          <div className=" w-[290px] h-[300px] border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md px-[20px] py-[40px] mb-[20px] lg:mb-[0px]  ">
            <h1 className="font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main  ">
              Crypto On and off-ramp
            </h1>
            <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              Easily buy and sell crypto using all major payment methods, credit
              card, bank transfer, Apple pay, google pay
            </h1>
          </div>
          <div className=" w-[290px] h-[300px] border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md px-[20px] py-[40px] mb-[20px] lg:mb-[0px]  ">
            <h1 className="font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main  ">
              Donation
            </h1>
            <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              Raise equity funds, raise for charity and non-profit
              organizations. Easily raise donations with crypto using our
              reserved donation tool.
            </h1>
          </div>
        </div>
      </div>
      <img
        src={iphone12}
        alt=""
        className=" w-[225.19px] h-[484px] lg:mr-[22px] "
      />
    </div>
  );
}

export default GlobalPayout;
