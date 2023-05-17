import React from "react";
import Card from "../../ProductsPayroll/components/Card";
import { productsPayrollPic6, plantPic, gustCoinBig } from "../../../../assets";

const data = [
  {
    text1: "Stake and earn",
    text2:
      "Earn interest when you stake or invest your GUST into the gipperpay protocols",
    image: plantPic,
    bg: "bg-primary-light",
    border: "border-primary-10",
    textColor: "text-secondary-main",
    svg: "#FEE6E1",
  },
  {
    text1: "Dollar-cost average",
    text2:
      "Easily save in dollars using the $GUST as it's stable and equal to the dollar",
    image: gustCoinBig,
    bg: "bg-white-70",
    border: "border-secondary-10",
    textColor: "text-secondary-main",
    svg: "#F0EFEF",
    imageStyle: " lg:w-[6.0625rem] lg:h-[5.5625rem] object-contain ",
  },
];
const data2 = [
  {
    text1: "Send and receive payment",
    text2:
      "Make and receive payment using your GUST balance or tag. Send crypto and Fiat with ease",
    image: productsPayrollPic6,
    bg: "bg-secondary-main",
    border: "border-secondary-10",
    textColor: "text-white-70",
    svg: "#342B4E",
  },
];

function Body() {
  return (
    <div className="w-full">
      <div className=" lg:w-[52rem]  lg:my-[6.25rem] lg:m-auto lg:grid lg:grid-cols-2 lg:grid-flow-row-dense ">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <div className=" lg:w-[23.5rem]  lg:my-[6.25rem] lg:m-auto lg:grid lg:grid-cols-1  ">
        {data2.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default Body;
