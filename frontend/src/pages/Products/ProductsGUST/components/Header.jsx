import React, { useRef } from "react";
import { BsDot } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  SpaceBlackiPhone14,
  rectangle,
  gustCoinBig,
} from "../../../../assets/index";
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
          <span>GU$T</span>
        </h1>
        <div className=" lg:w-[35.375rem] lg:h-[8.625rem] w-[22.5625rem] h-[6.5rem] my-[1.25rem] flex flex-row items-center ">
          <div className=" lg:w-[6.0625rem] lg:h-[6.6875rem] w-[5.0625rem] h-[4.6875rem] lg:mt-[0.625rem] mr-[0.625rem] lg:mr-[0] ">
            <img src={gustCoinBig} alt="" className="w-full h-full" />
          </div>
          <h1 className=" lg:w-[28.0625rem] lg:h-[8.625rem] w-[16.25rem] h-[6.5rem]  lg:mt-[1.25rem] font-Jost font-big lg:text-3xl text-xl lg:leading-[4.3125rem] leading-[3.25rem] items-center text-secondary-main ">
            Gipperpay token ($GUST)
          </h1>
        </div>
        <h1 className="lg:w-[41.3125rem] lg:h-[4.375rem] mt-[1.25rem] font-Jost font-regular text-sm leading-[1.6875rem] text-white-30 ">
          ($GUST) is the native currency of gipperpay that brings about a wide
          range of payment methods used within the gipperpay ecosystem. It can
          be used for crypto transactions, and investment and also serves as
          Fiat
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
          src={SpaceBlackiPhone14}
          alt=""
          className="w-[15.3125rem]  lg:w-[23.375rem] lg:h-[26rem] lg:mt-[4.4rem] ml-[5.5rem] object-contain relative z-10  "
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
