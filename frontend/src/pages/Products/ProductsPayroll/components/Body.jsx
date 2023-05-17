import React, { useRef } from "react";

import Card from "./Card";

import {
  productsPayrollPic1,
  productsPayrollPic2,
  productsPayrollPic3,
  productsPayrollPic4,
} from "../../../../assets/index";
import { motion } from "framer-motion";
import { textVariants } from "./Header";

const data = [
  {
    id: 1,
    text1: "Instant access to funds",
    text2: "Accept your funds anytime, we Don't lock up your Money",
    image: productsPayrollPic3,
    bg: "bg-primary-light",
    border: "border-primary-10",
    textColor: "text-secondary-main",
    svg: "#FEE6E1",
  },
  {
    text1: "Deposit direct to your wallet on payday",
    text2:
      "Connect wallet of your choice for direct deposit on payday. No manual withdrawal required",
    image: productsPayrollPic4,
    bg: "bg-white-70",
    border: "border-secondary-10",
    textColor: "text-secondary-main",
    svg: "#F0EFEF",
  },
];

function Body() {
  const scrollRef = useRef(null);
  return (
    <div className=" w-full ">
      {/**Automate payroll */}
      <div className=" lg:w-[48.875rem] lg:h-[16.0625rem] lg:flex lg:flex-row lg:m-auto lg:mt-[6.25rem] ">
        <motion.div
          viewport={{ once: true }}
          ref={scrollRef}
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
          className=" lg:w-[25.125rem] lg:h-[16.0625rem] "
        >
          <img src={productsPayrollPic1} alt="" />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          ref={scrollRef}
          variants={textVariants}
          whileInView="show"
          initial="hide"
          className="lg:my-[5.375rem] lg:ml-[5.4375rem]  items-center "
        >
          <h1 className=" font-Jost font-big text-m leading-[2.0625rem] text-primary-main ">
            Automate your payroll
          </h1>
          <h1 className=" lg:w-[18.5rem] font-Jost font-medium text-s leading-[1.4375rem] text-secondary-main mt-[0.3125rem] ">
            Easily pay employees anywhere, anywhere in the world
          </h1>
        </motion.div>
      </div>
      {/**Automate payroll */}
      {/**maintain value */}
      <div className=" lg:w-[48.875rem] lg:h-[21rem] lg:flex lg:flex-row-reverse lg:m-auto lg:mt-[6.25rem] ">
        <motion.div
          viewport={{ once: true }}
          ref={scrollRef}
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
          className=" lg:w-[25.125rem] lg:h-[16.0625rem] "
        >
          <img src={productsPayrollPic2} alt="" />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          ref={scrollRef}
          variants={textVariants}
          whileInView="show"
          initial="hide"
          className="lg:my-[5.375rem] lg:mr-[5.4375rem]  items-center "
        >
          <h1 className=" font-Jost font-big text-m leading-[2.0625rem] text-primary-main ">
            Maintain the Value of your Fund
          </h1>
          <h1 className=" lg:w-[18.5rem] font-Jost font-medium text-s leading-[1.4375rem] text-secondary-main mt-[0.3125rem] ">
            We maintain your funds in stablecoins so you never have to worry
            about depreciation.
          </h1>
        </motion.div>
      </div>
      {/**maintain value */}
      {/**Instant access to funds  */}
      <motion.div
        viewport={{ once: true }}
        ref={scrollRef}
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
        className=" lg:w-[52rem] lg:h-[26.4375rem]  lg:my-[6.25rem] lg:m-auto lg:grid lg:grid-cols-2 "
      >
        {data.map((item) => (
          <Card item={item} />
        ))}
      </motion.div>
      {/**Instant access to funds  */}
    </div>
  );
}

export default Body;
