import React from "react";
import Card1 from "./Card1";
import Card from "../../ProductsPayroll/components/Card";
import { productsPayrollPic5, productsPayrollPic6 } from "../../../../assets";

const data = [
  {
    text1: "Cross-border donation",
    text2:
      "Easily get donations from anywhere in the world using your donation link, with no restrictions",
    image: productsPayrollPic5,
    bg: "bg-primary-light",
    border: "border-primary-10",
    textColor: "text-secondary-main",
    svg: "#FEE6E1",
  },
  {
    text1: "Easy payout",
    text2:
      "We have the fastest and most secure way to receive your donation funds after raising",
    image: productsPayrollPic6,
    bg: "bg-secondary-main",
    border: "border-secondary-10",
    textColor: "text-white-70",
    svg: "#342B4E",
  },
];

function Body() {
  return (
    <div className="w-full h-full">
      <div className="lg:w-[24.3125rem] lg:h-[7.5rem] lg:mt-[6.25rem] mt-[2rem] m-auto ">
        <h1 className="font-Jost font-big text-l leading-[2.5rem] text-secondary-main items-center ">
          A blockchain crowdfunding solution for that right cause you aim for
        </h1>
      </div>
      <div className="  mt-[1.875rem]  lg:w-[45.625rem] lg:h-[16.5rem] lg:grid lg:grid-cols-2 m-auto lg:mt-[6.25rem]  ">
        <Card1 />
        <div className=" mt-[1.875rem] lg:mt-[0] lg:pt-[5.625rem] lg:pl-[5.4375rem] ">
          <h1 className="w-[9.6875rem] h-[2.0625rem] font-Jost font-big text-m leading-[2.0625rem] text-primary-main ">
            Definitive Link
          </h1>
          <h1 className="w-[18.3125rem] h-[2.875rem] font-Jost font-reguar text-s leading-[1.4375rem] text-secondary-main ">
            Create a shareable link to request crypto donations from anyone
            worldwide
          </h1>
        </div>
      </div>
      <div className=" lg:mb-[4.25rem] lg:w-[52rem] lg:h-[26.4375rem]  lg:mt-[6.25rem] lg:m-auto lg:grid lg:grid-cols-2 ">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default Body;
