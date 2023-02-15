import React from "react";
import {
  productsGipperfipic1,
  productsGipperfipic2,
  productsGipperfipic3,
  productsGipperfipic4,
  productsGipperfipic5,
  productsPayrollPic6,
} from "../../../../assets";
import SignUp from "../../../Home/homeComponents/SignUp";
import Card from "../../ProductsPayroll/components/Card";
import Cards from "./Cards";

const data = [
  {
    name: "Secure Investments",
    description:
      "Invest your money using a secure alogrithm that aggregates the best crypto investments.",
    image: productsGipperfipic1,
    style: "lg:flex-row",
    spacing: "ml-[5.4375rem]",
  },
  {
    name: "Quality interest rate",
    description:
      "Enjoy interest rates equivalent to profitable investments worldwide. Grow your money confidently.",
    image: productsGipperfipic2,
    style: "lg:flex-row-reverse",
    spacing: "mr-[5.4375rem]",
  },
  {
    name: "Quick Withdrawal",
    description:
      "Upon demand, your funds can be withdrawn and paid out to you instantly without you accruing any fees.",
    image: productsGipperfipic3,
    style: "lg:flex-row",
    spacing: "ml-[5.4375rem]",
  },
];

const cardData = [
  {
    text1: "Always High APIs",
    text2:
      "We make sure we choose the best investment option to help you gain the desired interest",
    image: productsGipperfipic5,
    bg: "bg-primary-light",
    border: "border-primary-10",
    textColor: "text-secondary-main",
    svg: "#FEE6E1",
  },
  {
    text1: "Adjustable investment options",
    text2:
      "Choose an investment option from all our listed options, Dont be limited by so many rigid investments",
    image: productsPayrollPic6,
    bg: "bg-secondary-main",
    border: "border-secondary-10",
    textColor: "text-white-70",
    svg: "#342B4E",
  },
];

function Body() {
  return (
    <div className="w-full h-full  ">
      {data.map((item) => (
        <Cards item={item} />
      ))}
      <div className="  lg:my-[6.25rem] m-auto lg:w-[62.5rem] lg:h-[33.9375rem] ">
        <img
          src={productsGipperfipic4}
          alt=""
          className="w-full h-full object-contain "
        />
      </div>
      <div className=" lg:mb-[1.25rem] lg:w-[52rem] lg:h-[26.4375rem]  lg:mt-[6.25rem] lg:m-auto lg:grid lg:grid-cols-2 ">
        {cardData.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <SignUp />
    </div>
  );
}

export default Body;
