import React, { useRef } from "react";
import { BsDot } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { iphone12Half, rectangle } from "../../../../assets/index";
import { motion } from "framer-motion";
import {
  textVariants,
  rectangleVariants,
} from "../../ProductsPayroll/components/Header";

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
        <h1 className="lg:w-[11.375rem] flex flex-row items-center font-Jost not-italic font-regular text-sm leading-[1.6875rem] text-secondary-main lg:mt-[7.5rem] lg:justify-around ">
          Product
          <span>
            <BsDot color="text-secondary-main" />
          </span>
          <span>Donations</span>
        </h1>
        <h1 className=" lg:w-[44.25rem] lg:h-[8.625rem] mt-[1.25rem] font-Jost font-big text-3xl leading-[4.3125rem] items-center text-secondary-main ">
          Accept donations globally with just few clicks
        </h1>
        <h1 className="lg:w-[41.3125rem] lg:h-[3.375rem] mt-[1.25rem] font-Jost font-regular text-sm leading-[1.6875rem] text-white-30 ">
          With our donation link, you can receive donations globally in dollars
          from anyone at anytime
        </h1>
        <button className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem] mt-[1.25rem] text-white-60 ">
          <h1 className="ml-[0.625rem] ">Get started</h1>
          <BiRightArrowAlt />
        </button>
      </motion.div>
      <div className=" mt-[2.25rem] lg:mt-[0]  relative z-10 lg:h-[30.375rem] lg:w-[54.875rem]">
        <motion.img
          viewport={{ once: true }}
          ref={scrollRef}
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
          src={iphone12Half}
          alt=""
          className="w-[21.25rem] lg:ml-[8.2rem] lg:mt-[5.12rem] object-contain relative z-10  "
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
