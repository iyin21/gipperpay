import React from "react";
import { BsDot } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { iphone11Bent } from "../../../assets";

function Header() {
  return (
    <div className="w-full h-full  lg:flex lg:flex-row lg:px-[3.125rem]  lg:justify-center ">
      <div className="">
        <h1 className="lg:w-[11.375rem] flex flex-row items-center font-Jost not-italic font-regular text-sm leading-[1.6875rem] text-secondary-main lg:mt-[8.625rem] lg:justify-around ">
          Product
          <span>
            <BsDot color="text-secondary-main" />
          </span>
          <span>Checkout</span>
        </h1>
        <h1 className=" lg:w-[44.25rem] lg:h-[8.625rem] mt-[1.25rem] font-Jost font-big text-3xl leading-[4.3125rem] items-center text-secondary-main ">
          A simple and seamless way to receive crypto payment
        </h1>
        <h1 className="lg:w-[41.3125rem] lg:h-[3.375rem] mt-[1.25rem] font-Jost font-regular text-sm leading-[1.6875rem] text-white-30 ">
          Enjoy distinctive transaction success rate when you pay online using
          gipperpay checkout widget. Available on web and mobile
        </h1>
        <buton className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem] mt-[1.25rem] text-white-60 ">
          <h1 className="ml-[0.625rem] ">Get started</h1>
          <BiRightArrowAlt />
        </buton>
      </div>
      <div>
        <img
          src={iphone11Bent}
          alt=""
          className="w-full h-full object-contain  "
        />
      </div>
    </div>
  );
}

export default Header;
