import React from "react";
import { questionmark } from "../../../icons";
import { motion } from "framer-motion";

//assets
import {
  gipperpayLeft,
  gipperpayRight,
  rectangle,
  circle,
  ethereum,
  maker,
  mastercard,
  meta,
  paxo,
  polygon,
  stripe,
  tether,
  uniswap,
  visa,
} from "../../../assets/index";
const rectangleVariants = {
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

const images = [
  circle,
  ethereum,
  maker,
  mastercard,
  meta,
  paxo,
  polygon,
  stripe,
  tether,
  uniswap,
  visa,
];

// const formVariants = {
//   hide: { y: "20%", opacity: 0 },
//   show: {
//     y: "0%",
//     opacity: 1,
//     transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
//   },
// };

function BigHeader() {
  return (
    <div className=" flex flex-col xl:flex-row py-[0.625rem] px-[1.15625rem] items-center lg:pt-[1.5625rem] relative ">
      <motion.div
        variants={textVariants}
        animate="show"
        initial="hide"
        className=" flex flex-col lg:m-auto 2xl:mx-[5rem] 2xl:w-[55.254rem]"
      >
        <h1 className=" font-Jost not-italic font-big text-2xl mr-[2.5rem] lg:pt-[3.0625rem] lg:w-[44.25rem] lg:text-4xl lg:leading-[5.75rem]  text-secondary-main flex  items-center  ">
          Everything you need to build in Web3
        </h1>
        <h1 className=" font-Jost not-italic font-regular text-sm leading-[1.6875rem] lg:w-[41.3125rem]  text-white-30 mt-[1.25rem] items-center ">
          Build & scale your projects with our comprehensive set of Web3 tools.
          We provide payment solutions, payroll tools, wallets services and
          more.
        </h1>
        <div className=" flex flex-row items-center my-[1.25rem]">
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
      <div className="2xl:mx-[5em]">
        <h1 className="font-Jost not-italic text-center font-bold sm:my-[3rem] xs:my-[2rem]">
          Our Associates
        </h1>
        <motion.div className="grid grid-cols-4 xs:grid-cols-3 gap-8 lg:w-[100%] 2xl:w-[100%] h-[26.3125rem] z-10 p-2">
          {images.map((src, index) => (
            <img
              src={src}
              alt=""
              className="w-[8em] xs:w-[5rem] xs:h-[5em] aspect-auto object-contain  h-[6em] shadow-md rounded transform transition-transform duration-300 hover:scale-[1.05] p-2"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default BigHeader;
