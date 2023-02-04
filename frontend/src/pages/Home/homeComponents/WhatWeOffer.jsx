import React from "react";

import {
  walletpic,
  checkout,
  cart,
  payrollpic,
  gipperfi_1,
  bankPayouts,
  rectanglepink,
} from "../../../assets/index";

function WhatWeOffer() {
  return (
    <div>
      <div className=" w-full lg:mt-[3.75rem] mt-[2.5rem] lg:mx-[31.1125rem]  relative z-10 ">
        <h1 className=" lg:w-[23.625rem] lg:h-[5rem] text-secondary-main text-center items-center font-Jost font-big not-italic text-l leading-[2.5rem] ml-[2.0625rem] ">
          A fully compliant collection of payment Tools
        </h1>
        <h1 className="lg:w-[27.75rem] lg:h-[2.875rem] font-Jost not-italic text-s leading-[1.4375rem] text-secondary-30 text-center  mt-[1.25rem] ">
          Building a business can be inflexible, we believe getting paid should
          be flexible
        </h1>
      </div>
      <div className="lg:w-[61.875rem] lg:h-[43.75rem] lg:my-[3.75rem] lg:ml-[11rem] mx-[3.0625rem] my-[2.5rem] relative z-10 ">
        <h1 className="lg:w-[11.6875rem] lg:h-[2.5rem] lg:ml-[2.5625rem] lg:mb-[1.25rem] mb-[1.25rem] font-Jost not-italic font-big text-l leading-[2.5rem]  items-center text-secondary-main text-center ">
          What we offer
        </h1>
        <div className="lg:w-[61.875rem] lg:h-[40rem] lg:grid lg:grid-18px-css  lg:gap-x-[3.75rem] lg:gap-y-[2.5rem] rounded-[0.625rem] ">
          <div className="border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[2.5rem] pl-[1.25rem] mb-[1.25rem] ">
            <img
              src={walletpic}
              alt=""
              className="w-[3.125rem] h-[3.125rem] "
            />
            <h1 className="lg:w-[8.4375rem] lg:h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main mt-[1.25rem] ">
              Business wallet
            </h1>
            <h1 className="w-[14.3125rem] h-[4.3125rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[1.25rem] ">
              Get fitted with a secured wallet to accept and manage your crypto
              all in one place.
            </h1>
          </div>
          <div className="border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[2.5rem] pl-[1.25rem] mb-[1.25rem] ">
            <img src={checkout} alt="" className="w-[3.125rem] h-[3.125rem] " />
            <h1 className="lg:w-[8.4375rem] lg:h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main mt-[1.25rem] ">
              Checkout
            </h1>
            <h1 className="w-[14.3125rem] h-[7.1875rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[0.3125rem] ">
              Give your customers a chance to pay with crypto. It's designed to
              grow your earnings and deliver the best payment experience for
              your customers
            </h1>
          </div>
          <div className="border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[2.5rem] pl-[1.25rem] mb-[1.25rem] ">
            <img
              src={payrollpic}
              alt=""
              className="w-[3.125rem] h-[3.125rem] "
            />
            <h1 className="lg:w-[8.4375rem] lg:h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main mt-[1.25rem] ">
              Payroll
            </h1>
            <h1 className="w-[14.3125rem] h-[7.1875rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[0.3125rem] ">
              The most flexible & compliant payroll system for organizations and
              freelancers. Hire globally from anywhere
            </h1>
          </div>
          <div className="border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[2.5rem] pl-[1.25rem] mb-[1.25rem] ">
            <img
              src={gipperfi_1}
              alt=""
              className="w-[3.125rem] h-[3.125rem] "
            />
            <h1 className="lg:w-[8.4375rem] lg:h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main mt-[1.25rem] ">
              Gipperfi
            </h1>
            <h1 className="w-[14.3125rem] h-[7.1875rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[0.3125rem] ">
              Open a new way to earn interest on your business savings. Get up
              to 10% APY on your savings
            </h1>
          </div>
          <div className="border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[2.5rem] pl-[1.25rem] mb-[1.25rem] ">
            <img src={cart} alt="" className="w-[3.125rem] h-[3.125rem] " />
            <h1 className="lg:w-[10.4375rem] lg:h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main mt-[1.25rem] ">
              E-commerce store
            </h1>
            <h1 className="w-[14.3125rem] h-[7.1875rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[0.3125rem] ">
              Create a free e-commerce website and start selling globally with
              no coding knowledge only a few clicks
            </h1>
          </div>
          <div className="border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[2.5rem] pl-[1.25rem] mb-[1.25rem] ">
            <img
              src={bankPayouts}
              alt=""
              className="w-[3.125rem] h-[3.125rem] "
            />
            <h1 className="w-[9.5rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main mt-[1.25rem] ">
              Accept payments
            </h1>
            <h1 className="w-[14.3125rem] h-[7.1875rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[0.3125rem] ">
              Easily receive payment from anyone, anywhere in the world using
              our tailored tools
            </h1>
          </div>
        </div>
      </div>
      <div className=" absolute z-0 top-[44.6875rem] left-[71.5rem] ">
        <img src={rectanglepink} alt="" />
      </div>
    </div>
  );
}

export default WhatWeOffer;
