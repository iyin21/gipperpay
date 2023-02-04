import { Divider } from "antd";
import { bankPayouts } from "../../../assets";
import React from "react";

function PricingCard() {
  return (
    <div className="lg:w-[59.375rem] py-[2.5rem] px-[5rem] items-center ">
      <div className="lg:w-[18.75rem] lg:h-[5rem] flex flex-grid py-[1.46875rem] pl-[1.90625rem]  rounded-[1.25rem] items-center bg-[#D3F1F8] ">
        <div className="lg:w-[2.93rem] lg:h-[2.34375rem] mr-[1.875rem] ">
          <img src={bankPayouts} alt="" className="" />
        </div>
        <h1 className="font-Jost not-italic font-big text-m leading-[2.0625rem] text-secondary-main items-center ">
          BankPayouts
        </h1>
      </div>
      <div className=" flex flex-row justify-between items-center">
        <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] text-secondary-main items-center ">
          Region
        </h1>
        <h1>Fee</h1>
      </div>
      <Divider />
      <div className=" flex flex-row justify-between items-center">
        <h1>Region</h1>
        <h1>Fee</h1>
      </div>
      <Divider />
      <div className=" flex flex-row justify-between items-center">
        <h1>Region</h1>
        <h1>Fee</h1>
      </div>
      <Divider />
    </div>
  );
}

export default PricingCard;
