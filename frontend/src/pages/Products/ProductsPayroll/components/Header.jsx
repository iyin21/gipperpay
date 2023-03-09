import React, { useRef } from "react";
import { BsDot } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { iphone13RightView, rectangle } from "../../../../assets/index";
import { motion } from "framer-motion";

export const rectangleVariants = {
  hide: { opacity: 0, x: "40%" },
  show: {
    opacity: 1,
    x: "0%",
    transition: { delay: 0.5, duration: 0.5 },
  },
};

export const textVariants = {
  hide: { y: "-10%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 },
  },
};

function Header() {
  const scrollRef = useRef(null);
  return (
    <div className="w-full h-full  lg:flex lg:flex-row lg:px-[3.125rem]  lg:justify-center relative z-10 ">
      <motion.div
        variants={textVariants}
        animate="show"
        initial="hide"
        className=""
      >
        <h1 className="lg:w-[11.375rem] flex flex-row items-center font-Jost not-italic font-regular text-sm leading-[1.6875rem] text-secondary-main lg:mt-[5.625rem] lg:justify-around ">
          Product
          <span>
            <BsDot color="text-secondary-main" />
          </span>
          <span>Payroll</span>
        </h1>
        <h1 className=" lg:w-[44.25rem] lg:h-[12.9375rem] mt-[1.25rem] font-Jost font-big text-3xl leading-[4.3125rem] items-center text-secondary-main ">
          A crypto-powered payroll solution for organization and freelancers
        </h1>
        <h1 className="lg:w-[41.3125rem] lg:h-[3.375rem] mt-[1.25rem] font-Jost font-regular text-sm leading-[1.6875rem] text-white-30 ">
          We’ll handle your global compliance, payroll in 100+ countries. Focus
          on expansion and business let’s handle the payment processing for you
        </h1>
        <button className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem] mt-[1.25rem] text-white-60 ">
          <h1 className="ml-[0.625rem] ">Get started</h1>
          <BiRightArrowAlt />
        </button>
      </motion.div>
      <div className=" mt-[2.25rem] lg:mt-[0]  relative z-10 lg:h-[30.475rem] lg:w-[54.875rem]">
        <motion.img
          viewport={{ once: true }}
          ref={scrollRef}
          initial={{ opacity: 0, y: "-100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
          src={iphone13RightView}
          alt=""
          className="w-full lg:h-[27.475rem] lg:mt-[3.5rem] lg:ml-[4rem] object-contain relative z-10  "
        />
        <motion.img
          variants={rectangleVariants}
          animate="show"
          initial="hide"
          src={rectangle}
          alt=""
          className="absolute top-[0] h-full -right-[15rem]  lg:left-[2.5rem] z-0   "
        />
      </div>
    </div>
  );
}

export default Header;
