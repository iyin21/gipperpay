import { Divider } from "antd";
import React from "react";

function PricingCard({ data, title, header, img, color }) {
  console.log(data);
  return (
    <div className="lg:w-[59.375rem] py-[2.5rem] px-[5rem] lg:mt-[5rem]  lg:m-auto items-center ">
      <div
        className="lg:w-[21.375rem] lg:h-[5rem] flex flex-grid py-[1.46875rem] pl-[1.90625rem]  rounded-[1.25rem] items-center "
        style={{ backgroundColor: color }}
      >
        <div className="lg:w-[2.93rem] lg:h-[2.34375rem] mr-[0.625rem] ">
          <img src={img} alt="" className="w-full h-full object-contain" />
        </div>
        <h1 className="lg:w-[14.5rem] lg:h-[2.0625rem] font-Jost not-italic font-big text-m leading-[2.0625rem] text-secondary-main items-center ">
          {title}
        </h1>
      </div>
      <div className=" flex flex-row justify-between p-[0] lg:mt-[1.875rem] ">
        <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] text-secondary-main items-center ">
          {header}
        </h1>
        <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] text-secondary-main items-center ">
          Fee
        </h1>
      </div>
      <Divider />
      {data.map((item, index) => (
        <>
          {" "}
          <div className=" flex flex-row justify-between items-center">
            <h1 className="font-Jost not-italic font-regular text-s leading-[1.4375rem] text-secondary-main items-center ">
              {item.name}
            </h1>
            <h1 className="font-Jost not-italic font-regular text-s leading-[1.4375rem] text-secondary-main items-center ">
              {item.fee}
            </h1>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
}

export default PricingCard;
