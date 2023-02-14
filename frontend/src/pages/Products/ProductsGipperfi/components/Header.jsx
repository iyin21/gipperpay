import React from "react";
import { BsDot } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { iphoneAndMacbook, rectangle } from "../../../../assets/index";

function Header() {
  return (
    <div className="w-full h-full  lg:flex lg:flex-row lg:px-[3.125rem]  lg:justify-center relative z-10 ">
      <div className="">
        <h1 className="lg:w-[11.375rem] flex flex-row items-center font-Jost not-italic font-regular text-sm leading-[1.6875rem] text-secondary-main lg:mt-[8.625rem] lg:justify-around ">
          Product
          <span>
            <BsDot color="text-secondary-main" />
          </span>
          <span>Gipperfi </span>
        </h1>
        <h1 className=" lg:w-[44.25rem] lg:h-[8.625rem] mt-[1.25rem] font-Jost font-big text-3xl leading-[4.3125rem] items-center text-secondary-main ">
          Generate interest on your investment
        </h1>
        <h1 className="lg:w-[41.3125rem] lg:h-[3.375rem] mt-[1.25rem] font-Jost font-regular text-sm leading-[1.6875rem] text-white-30 ">
          Earn up to 10% per annum in interest on our no-loss investment
          packages using stablecoins
        </h1>
        <buton className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem] mt-[1.25rem] text-white-60 ">
          <h1 className="ml-[0.625rem] ">Get started</h1>
          <BiRightArrowAlt />
        </buton>
      </div>
      <div className=" mt-[2.25rem] lg:mt-[0]  relative z-10 lg:h-[30.375rem] lg:w-[54.875rem]  ">
        <img
          src={iphoneAndMacbook}
          alt=""
          className="lg:w-[40.25rem] lg:h-[22.625rem] w-[24.1875rem] h-[15.5rem] ml-[2rem] lg:ml-[0] lg:mt-[5.12rem] object-contain relative z-10  "
        />
        <img
          src={rectangle}
          alt=""
          className="absolute lg:top-[0] -top-[6.2rem] w-[24.4375rem] h-[23rem] lg:w-full lg:h-full -right-[15rem]  lg:left-[2.5rem] z-0   "
        />
      </div>
    </div>
  );
}

export default Header;
