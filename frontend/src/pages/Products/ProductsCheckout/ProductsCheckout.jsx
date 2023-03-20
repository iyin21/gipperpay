import React from "react";
import Header from "./components/Header";
import { walletpic, profileComponent, Successpic } from "../../../assets/index";
import { BiRightArrowAlt } from "react-icons/bi";

function ProductsCheckout() {
  return (
    <div className=" w-full h-full p-[1.5625rem] lg:p-[0] bg-white-70 ">
      <Header />
      <div className="w-full text-center">
        <h1 className="  mt-[6.25rem] font-Jost font-big not-italic text-l leading-[2.5rem] text-secondary-main  ">
          Easy-to-use solution for all your online services
        </h1>
        <h1 className=" mt-[1.25rem] font-Jost font-regular not-italic text-sm leading-[1.6875rem] text-secondary-30 ">
          Building a business can be inflexible, we believe getting paid should
          be flexible
        </h1>
      </div>
      {/**grid box */}
      <div className=" pl-[2.25rem] lg:pl-[0] lg:m-auto mt-[1.25rem] lg:mt-[5rem] lg:w-[59.375rem] lg:h-[21.875rem] lg:grid lg:grid-cols-3 ">
        <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[0.9375rem] pl-[1.25rem] mb-[1.25rem] ">
          <img
            src={walletpic}
            alt=""
            className="w-[2.5625rem] h-[2.5625rem] "
          />
          <h1 className="lg:w-[8.4375rem] lg:h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-primary-main mt-[1.25rem] ">
            Go truly borderless
          </h1>
          <h1 className="w-[14.3125rem] h-[4.3125rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[2.25rem] ">
            Receive and access payment no matter where your business is located,
            The only payment method your business will ever need.
          </h1>
        </div>
        <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[0.9375rem] pl-[1.25rem] mb-[1.25rem] ">
          <img
            src={walletpic}
            alt=""
            className="w-[2.5625rem] h-[2.5625rem] "
          />
          <h1 className="lg:w-[8.4375rem] lg:h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-primary-main mt-[1.25rem] ">
            Go truly borderless
          </h1>
          <h1 className="w-[14.3125rem] h-[4.3125rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[2.25rem] ">
            Receive and access payment no matter where your business is located,
            The only payment method your business will ever need.
          </h1>
        </div>
        <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md  py-[0.9375rem] pl-[1.25rem] mb-[1.25rem] ">
          <img
            src={walletpic}
            alt=""
            className="w-[2.5625rem] h-[2.5625rem] "
          />
          <h1 className="lg:w-[8.4375rem] lg:h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-primary-main mt-[1.25rem] ">
            Go truly borderless
          </h1>
          <h1 className="w-[14.3125rem] h-[4.3125rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[2.25rem] ">
            Receive and access payment no matter where your business is located,
            The only payment method your business will ever need.
          </h1>
        </div>
      </div>
      {/**Grid Layout */}

      {/**Instant Payment */}
      <div className="w-full mt-[2.5rem] lg:mt-[6.25rem] h-full lg:flex lg:flex-row lg:justify-center">
        <div className=" lg:w-[24.375rem] lg:h-[15.8125rem]  ">
          <img src={profileComponent} alt="" className="w-full h-full" />
        </div>
        <div className="lg:ml-[5.4375rem] mt-[2.5rem] lg:mt-[5.28125rem] ">
          <h1 className=" font-Jost not-italic font-big text-m leading-[2.0625rem] text-primary-main ">
            Instant settlement
          </h1>
          <h1 className=" mt-[0.3125rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-secondary-main ">
            Access your business funds with ease, with zero wait hour
          </h1>
        </div>
      </div>
      {/**Instant Payment */}
      <div className="w-full h-full lg:flex lg:flex-row mt-[2.5rem] lg:mt-[6.25rem] justify-center items-center ">
        <div className=" lg:mr-[6.9375rem] ">
          <h1 className="font-Jost not-italic font-big text-m leading-[2.0625rem] text-primary-main items-center ">
            Quick payment confirmation
          </h1>
          <h1 className=" lg:w-[18.312rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-secondary-main align-center mt-[0.3125rem] ">
            Your customer's payments are processed as fast as possible, and you
            don't need to worry about dela
          </h1>
          <button className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem] mt-[5.4375rem] text-white-60 ">
            <h1 className="ml-[0.625rem] ">Get started</h1>
            <BiRightArrowAlt />
          </button>
        </div>
        <div className="lg:w-[18.75rem] lg:h-[21.4375rem] mt-[2.5rem] lg:mt-0 ">
          <img src={Successpic} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default ProductsCheckout;
