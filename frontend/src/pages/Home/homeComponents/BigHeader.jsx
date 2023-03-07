import React from "react";
import { questionmark } from "../../../icons";
import { motion } from "framer-motion";

//assets
import {
  gipperpayLeft,
  gipperpayRight,
  rectangle,
} from "../../../assets/index";
const rectangleVariants = {
  hide: { x: "40%" },
  show: {
    x: "0%",
    transition: { delay: 0.5, duration: 0.5 },
  },
};

const textVariants = {
  hide: { y: "-10%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 },
  },
};

const formVariants = {
  hide: { y: "20%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
  },
};

function BigHeader() {
  return (
    <div className=" flex flex-col  lg:flex-row py-[0.625rem] px-[1.15625rem] items-center lg:pt-[5.5625rem] relative ">
      <motion.div
        variants={textVariants}
        animate="show"
        initial="hide"
        className="  lg:m-auto "
      >
        <h1 className=" font-Jost not-italic font-big text-2xl mr-[2.5rem]  lg:pt-[3.0625rem] lg:w-[44.25rem] lg:text-4xl lg:leading-[5.75rem]  text-secondary-main flex  items-center  ">
          Take control of your business and payment
        </h1>
        <h1 className=" font-Jost not-italic font-regular text-sm leading-[1.6875rem] lg:w-[41.3125rem]  text-white-30 mt-[1.25rem] items-center ">
          Allow your business to accept payment online and offline, build
          financial products, sell online, stay compliant and grow your revenue
        </h1>
        <div className=" flex flex-row items-center mt-[1.25rem] ">
          <h1 className=" rounded-[0.3125rem] bg-Rectangle justify-center items-center py-[0.625rem]  px-[1.25rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-white-60 ">
            Create a free account
          </h1>
          <div className="  ml-[1.25rem] rounded-[0.3125rem] flex flex-row items-center justify-center ">
            <img
              src={questionmark}
              alt=""
              className="w-[1.25rem] h-[1.25rem] "
            />
            <h1 className="  font-Jost not-italic text-s leading-[1.4375rem] text-center text-Rectangle ml-[0.75rem] ">
              Speak to sales
            </h1>
          </div>
        </div>
      </motion.div>
      <motion.div className=" relative flex flex-row w-[33.3125rem] h-[26.3125rem] z-10 ">
        <motion.img
          animate={{
            x: [0, -200, 0],
            transition: { ease: "easeOut", duration: 5 },
          }}
          whileTap={{
            x: [0, -200, 0],
            transition: { ease: "easeOut", duration: 5 },
          }}
          src={gipperpayRight}
          alt=""
        />
        <motion.img
          animate={{
            x: [0, 200, 0],
            transition: { ease: "easeOut", duration: 5 },
          }}
          whileTap={{
            x: [0, 200, 0],
            transition: { ease: "easeOut", duration: 5 },
          }}
          src={gipperpayLeft}
          alt=""
        />
      </motion.div>
      <motion.div
        variants={rectangleVariants}
        animate="show"
        initial="hide"
        className=" w-[24rem] h-[27rem] bottom-0 lg:h-[32rem]  lg:w-[36rem] absolute  -right-[15rem] lg:right-3 lg:top-[0rem]"
      >
        <img
          src={rectangle}
          alt=""
          className="w-full h-full object-cover lg:object-cover"
        />
      </motion.div>
    </div>
  );
}

export default BigHeader;
