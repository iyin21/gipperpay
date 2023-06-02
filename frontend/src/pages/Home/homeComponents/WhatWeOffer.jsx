import React, { useRef } from "react";

import {
  walletpic,
  rectanglepink,
  payrollActive,
  gipperfiActive,
  ecommerce,
  finance,
  productActive,
} from "../../../assets/index";
import { motion } from "framer-motion";
export const rectangleVariants = {
  hide: { x: "40%" },
  show: {
    x: "0%",
    transition: { delay: 0.5, duration: 0.5 },
  },
};
function WhatWeOffer() {
  const data = [
    {
      img: walletpic,
      title: "Business wallet",
      desc: "Get fitted with a secured wallet to accept and manage your crypto all in one place.",
    },
    {
      img: productActive,
      title: "Checkout",
      desc: "Give your customers a chance to pay with crypto. It's designed to grow your earnings and deliver the best payment experience for your customers",
    },
    {
      img: payrollActive,
      title: "Payroll",
      desc: "The most flexible & compliant payroll system for organizations and freelancers. Hire globally from anywhere",
    },
    {
      img: gipperfiActive,
      title: "Gipperfi",
      desc: "Open a new way to earn interest on your business savings. Get up to 10% APY on your savings",
    },
    {
      img: ecommerce,
      title: "E-commerce store",
      desc: "Create a free e-commerce website and start selling globally with no coding knowledge only a few clicks",
    },
    {
      img: finance,
      title: "Accept payments",
      desc: "Easily receive payment from anyone, anywhere in the world using our tailored tools",
    },
  ];

  const scrollRef = useRef(null);
  

  const textVariants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className=" w-full h-full px-[0.625rem] relative ">
      <motion.div
        variants={textVariants}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="  justify-center  lg:w-[34.75rem] lg:h-[9.625rem] lg:mt-[3.75rem] mt-[2.5rem]  lg:m-auto  relative z-10 "
      >
        <h1 className=" lg:w-[23.625rem] lg:h-[5rem] text-secondary-main text-center items-center font-Jost font-big not-italic text-l leading-[2.5rem] lg:m-auto ">
          A fully compliant collection of payment Tools
        </h1>
        <h1 className="lg:w-[27.75rem] lg:h-[2.875rem] font-Jost not-italic text-s leading-[1.4375rem] text-secondary-30 text-center  mt-[1.25rem] lg:m-auto ">
          Building a business can be inflexible, we believe getting paid should
          be flexible
        </h1>
      </motion.div>
      <motion.div
        variants={textVariants}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="  lg:w-[61.875rem]  lg:my-[3.75rem] lg:m-auto mx-[3.0625rem] my-[2.5rem] relative z-10 "
      >
        <h1 className="lg:w-[11.6875rem] lg:h-[2.5rem] lg:m-auto lg:mb-[1.25rem] mb-[1.25rem] font-Jost not-italic font-big text-l leading-[2.5rem]  items-center text-secondary-main text-center ">
          What we offer
        </h1>
        <div className="flex flex-wrap justify-center gap-[3.75rem]">
          {data.map((data, index) => (
            <div
              key={index}
              className="w-[18.1rem] py-10 px-5 h-[18.75rem] bg-white-70 border-t-2 border-primary-main rounded-xl shadow-[10px_8px_10px_rgba(0,0,0,0.05)]"
            >
              <div className="w-12 h-12 flex justify-center items-center rounded-full bg-primary-light">
                <img src={data.img} alt="" />
              </div>

              <h2 className="font-big text-secondary-main text-sm leading-7 mt-5">
                {data.title}
              </h2>
              <p className="text-secondary-30 text-s leading-6 font-regular mt-5">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={rectangleVariants}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className=" hidden lg:flex absolute lg:z-0 lg:top-[0] lg:left-[71.5rem] "
      >
        <img src={rectanglepink} alt="" />
      </motion.div>
    </div>
  );
}

export default WhatWeOffer;
