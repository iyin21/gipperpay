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
      <div className=" lg:mt-[60px] mt-[40px] lg:ml-[498px] lg:mr-[498px] relative z-10 ">
        <h1 className=" lg:w-[378px] lg:h-[80px] text-secondary-main text-center items-center font-Jost font-big not-italic text-l leading-[40px] ml-[33px] ">
          A fully compliant collection of payment Tools
        </h1>
        <h1 className="lg:w-[444px] lg:h-[46px] font-Jost not-italic text-s leading-[23px] text-secondary-30 text-center  mt-[20px] ">
          Building a business can be inflexible, we believe getting paid should
          be flexible
        </h1>
      </div>
      <div className="lg:w-[990px] lg:h-[700px] lg:my-[60px] lg:ml-[225px] mx-[49px] my-[40px] relative z-10 ">
        <h1 className="lg:w-[187px] lg:h-[40px] lg:ml-[401px] lg:mb-[20px] mb-[20px] font-Jost not-italic font-big text-l leading-[40px]  items-center text-secondary-main text-center ">
          What we offer
        </h1>
        <div className="lg:w-[990px] lg:h-[640px] lg:grid lg:grid-18px-css  lg:gap-x-[60px] lg:gap-y-[40px] rounded-[10px] ">
          <div className="border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md  py-[40px] pl-[20px] mb-[20px] ">
            <img src={walletpic} alt="" className="w-[50px] h-[50px] " />
            <h1 className="lg:w-[135px] lg:h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
              Business wallet
            </h1>
            <h1 className="w-[229px] h-[69px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              Get fitted with a secured wallet to accept and manage your crypto
              all in one place.
            </h1>
          </div>
          <div className="border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md py-[40px] pl-[20px] mb-[20px] ">
            <img src={checkout} alt="" className="w-[50px] h-[50px] " />
            <h1 className="lg:w-[84px] lg:h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[15px] ">
              Checkout
            </h1>
            <h1 className="w-[229px] h-[115px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[5px] ">
              Give your customers a chance to pay with crypto. It's designed to
              grow your earnings and deliver the best payment experience for
              your customers
            </h1>
          </div>
          <div className="border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md py-[40px] pl-[20px] mb-[20px] ">
            <img src={payrollpic} alt="" className="w-[50px] h-[50px] " />
            <h1 className="w-[61px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
              Payroll
            </h1>
            <h1 className="w-[229px] h-[92px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              The most flexible & compliant payroll system for organizations and
              freelancers. Hire globally from anywhere
            </h1>
          </div>
          <div className="border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md py-[40px] pl-[20px] mb-[20px] ">
            <img src={gipperfi_1} alt="" className="w-[50px] h-[50px] " />
            <h1 className="w-[135px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
              Gipperfi
            </h1>
            <h1 className="w-[229px] h-[69px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              Open a new way to earn interest on your business savings. Get up
              to 10% APY on your savings
            </h1>
          </div>
          <div className="border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md py-[40px] pl-[20px] mb-[20px] ">
            <img src={cart} alt="" className="w-[50px] h-[50px] " />
            <h1 className="w-[157px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
              E-commerce store
            </h1>
            <h1 className="w-[229px] h-[92px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              Create a free e-commerce website and start selling globally with
              no coding knowledge only a few clicks
            </h1>
          </div>
          <div className="border-t-[2px] border-Rectangle bg-white-60 rounded-[10px] shadow-md py-[40px] pl-[20px] mb-[20px] ">
            <img src={bankPayouts} alt="" className="w-[50px] h-[50px] " />
            <h1 className="w-[152px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
              Accept payments
            </h1>
            <h1 className="w-[229px] h-[69px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
              Easily receive payment from anyone, anywhere in the world using
              our tailored tools
            </h1>
          </div>
        </div>
      </div>
      <div className=" absolute z-0 top-[715px] left-[1144px] ">
        <img src={rectanglepink} alt="" />
      </div>
    </div>
  );
}

export default WhatWeOffer;
