import React from "react";

//assets
import { coinsimage } from "../../../assets/index";

//icons
import { rightarrow } from "../../../icons";

function Pricing() {
  return (
    <div className=" lg:flex lg:flex-row lg:mt-[100px] lg:mx-[180px] mx-[20px] ">
      <img
        src={coinsimage}
        alt=""
        className="w-[307px] h-[192px] lg:w-[441px] lg:h-[276px] object-contain "
      />
      <div>
        <h1 className="font-Jost not-italic font-regular text-sm text-secondary-30 leading-[27px]  items-center">
          Pricing
        </h1>
        <h1 className="font-Jost not-italic font-big text-l text-secondary-main leading-[40px] my-[10px] items-center">
          A scalable pricing to help you grow
        </h1>
        <h1 className=" lg:w-[556px] font-Jost not-italic font-medium text-sm text-secondary-30 leading-[27px]  items-center">
          Grow your business with the power of crypto with our unique and simple
          pricing
        </h1>
        <div className="w-[157px] h-[50px] border-[1px] border-Rectangle rounded-[100px] pt-[10px] pb-[10px] pl-[25px]  mt-[20px] lg:ml-[399px] flex flex-row items-center">
          <h1 className="w-[78px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-center items-center text-Rectangle mr-[10px] ">
            See Pricing
          </h1>
          <img src={rightarrow} alt="" className="w-[24px] h-[24px] " />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
