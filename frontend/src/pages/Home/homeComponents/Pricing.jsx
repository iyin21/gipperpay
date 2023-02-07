import React from "react";

//assets
import { coinsimage } from "../../../assets/index";

//icons
import { rightarrow } from "../../../icons";

function Pricing() {
  return (
    <div className=" w-full lg:flex lg:flex-row lg:mt-[6.25rem] lg:mx-[10rem] mx-[1.25rem] ">
      <img
        src={coinsimage}
        alt=""
        className="w-[19.1875rem] h-[12rem] lg:w-[27.5625rem] lg:h-[17.25rem] object-contain "
      />
      <div>
        <h1 className="font-Jost not-italic font-regular text-sm text-secondary-30 leading-[1.6875rem]  items-center">
          Pricing
        </h1>
        <h1 className="font-Jost not-italic font-big text-l text-secondary-main leading-[2.5rem] my-[0.625rem] items-center">
          A scalable pricing to help you grow
        </h1>
        <h1 className=" lg:w-[34.75rem] font-Jost not-italic font-medium text-sm text-secondary-30 leading-[1.6875rem]  items-center">
          Grow your business with the power of crypto with our unique and simple
          pricing
        </h1>
        <div className="w-[9.8125rem] h-[3.125rem] border-[0.0625rem] border-Rectangle rounded-[6.25rem] py-[0.625rem]  pl-[1.5625rem]  mt-[1.25rem] lg:ml-[21.1875rem] flex flex-row items-center">
          <h1 className="w-[4.875rem] h-[1.4375rem] font-Jost not-italic font-regular text-s leading-[1.6875rem] text-center items-center text-Rectangle mr-[0.625rem] ">
            See Pricing
          </h1>
          <img src={rightarrow} alt="" className="w-[1.5rem] h-[1.5rem] " />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
