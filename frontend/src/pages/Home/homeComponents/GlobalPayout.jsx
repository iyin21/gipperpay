import React from "react";

import { iphone12 } from "../../../assets";

function GlobalPayout() {
  return (
    <div className="  lg:flex lg:flex-row-reverse my-[4.125rem] mx-[3.125rem] lg:mt-[6.25rem] items-center justify-center ">
      <div>
        <div className=" lg:grid lg:grid-cols-2 lg:gap-[1.25rem] lg:w-[37.5rem] ">
          <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md px-[1.25rem] py-[2.5rem] mb-[1.25rem] lg:mb-[0rem]  ">
            <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main  ">
              Global payout
            </h1>
            <h1 className=" font-Jost not-italic font-regular text-s leading-[1.6875rem] items-center text-secondary-30 mt-[1.25rem] ">
              Supporting withdrawal in more than 30+ countries get paid easily
              and access business funds with no stress
            </h1>
          </div>
          <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md px-[1.25rem] py-[2.5rem] mb-[1.25rem] lg:mb-[0rem]  ">
            <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main  ">
              Process payment the seamless way Using our payment tools
            </h1>
            <h1 className=" font-Jost not-italic font-regular text-s leading-[1.6875rem] items-center text-secondary-30 mt-[1.25rem] ">
              A tailored payment tool for receiving and processing everything
              payment seamlessly
            </h1>
          </div>
        </div>
        <div className=" lg:grid lg:grid-cols-2 mt-[1.875rem] lg:w-[46.875rem] lg:pl-[8.8125rem] lg:gap-[1.25rem]  ">
          <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md px-[1.25rem] py-[2.5rem] mb-[1.25rem] lg:mb-[0rem]  ">
            <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main  ">
              Crypto On and off-ramp
            </h1>
            <h1 className=" font-Jost not-italic font-regular text-s leading-[1.6875rem] items-center text-secondary-30 mt-[1.25rem] ">
              Easily buy and sell crypto using all major payment methods, credit
              card, bank transfer, Apple pay, google pay
            </h1>
          </div>
          <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md px-[1.25rem] py-[2.5rem] mb-[1.25rem] lg:mb-[0rem]  ">
            <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main  ">
              Donation
            </h1>
            <h1 className=" font-Jost not-italic font-regular text-s leading-[1.6875rem] items-center text-secondary-30 mt-[1.25rem] ">
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
        className=" w-[14.074375rem] h-[30.25rem] lg:mr-[1.375rem] "
      />
    </div>
  );
}

export default GlobalPayout;
