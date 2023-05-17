import React from "react";

import { PRODUCTS, BUSINESSES, COMPANY } from "../data";

import { questionmark } from "../../../icons";
import { Link } from "react-router-dom";

const MobileView = () => {
  return (
    <>
      {/**Products */}
      <h1 className=" font-Jost font-medium text-s text-secondary-main leading-[1.4375rem] ">
        Products
      </h1>
      <div className=" mt-[1.625rem] bg-red-blue items-center grid grid-cols-3 gap-[0.625rem]  ">
        {PRODUCTS.map((item, index) => (
          <Link to={item.link}>
            <div className=" w-[6.25rem] h-[4.3125rem]  items-center   ">
              <img
                src={item.image}
                alt=""
                className="w-[1.875rem] h-[1.875rem] m-auto "
              />
              <h1 className=" font-Jost font-medium text-xs text-center text-secondary-main leading-[1.1875rem] mt-[0.3125rem] ">
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      {/**Products */}
      {/**Businesses */}
      <h1 className=" font-Jost font-medium text-s text-secondary-main leading-[1.4375rem] mt-[1.25rem] ">
        Businesses
      </h1>
      <div className=" mt-[1.625rem] items-center grid grid-cols-2 gap-[0]  ">
        {BUSINESSES.map((item, index) => (
          <Link to={item.link}>
            <div className=" w-[6.25rem] h-[4.3125rem]  items-center   ">
              <img
                src={item.image}
                alt=""
                className="w-[1.875rem] h-[1.875rem] m-auto "
              />
              <h1 className=" font-Jost font-medium text-xs text-center text-secondary-main leading-[1.1875rem] mt-[0.3125rem] ">
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      {/**Businesses */}
      {/**Company */}
      <h1 className=" font-Jost font-medium text-s text-secondary-main leading-[1.4375rem] mt-[1.25rem] ">
        Company
      </h1>
      <div>
        {COMPANY.map((item, index) => (
          <Link to={item.link}>
            <div className="flex flex-row w-[15.625rem] h-[2.5rem] px-[0.625rem] items-center mt-[1.25rem] ">
              <img
                src={item.icon}
                alt=""
                className=" w-[1.0437rem] h-[1.0437rem] mr-[0.9375rem] "
              />
              <h1 className=" font-Jost font-medium text-s text-secondary-main leading-[1.4375rem]  ">
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
      {/**Company */}
      {/** create a free account */}
      <div className=" flex flex-row items-center mt-[1.25rem] ">
        <h1 className=" rounded-[0.3125rem] bg-Rectangle justify-center items-center py-[0.625rem]  px-[1.25rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-white-60 ">
          Create a free account
        </h1>
        <div className="  ml-[1.25rem] rounded-[0.3125rem] flex flex-row items-center justify-center ">
          <img src={questionmark} alt="" className="w-[1.25rem] h-[1.25rem] " />
          <h1 className="  font-Jost not-italic text-s leading-[1.4375rem] text-center text-Rectangle ml-[0.75rem] ">
            Speak to sales
          </h1>
        </div>
      </div>
      {/**Create a free account */}
    </>
  );
};
export default MobileView;
