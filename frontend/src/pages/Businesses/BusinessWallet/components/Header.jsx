import React, { useRef } from "react";
import { BsDot } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { SpaceBlackiPhoneCombo, rectangle } from "../../../../assets/index";
import { questionmark } from "../../../../icons";
import { motion } from "framer-motion";
import {
  textVariants,
  rectangleVariants,
} from "../../../Products/ProductsPayroll/components/Header";

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
        <h1 className="lg:w-[18.375rem] flex flex-row items-center font-Jost not-italic font-regular text-sm leading-[1.6875rem] text-secondary-main lg:mt-[7.5rem] lg:justify-around ">
          Businesses
          <span>
            <BsDot color="text-secondary-main" />
          </span>
          <span>Business wallet</span>
        </h1>
        <h1 className=" lg:w-[38.25rem] lg:h-[12.9375rem] mt-[1.25rem] font-Jost font-big text-3xl leading-[4.3125rem] items-center text-secondary-main ">
          The best way to spend, save and accept business funds globally
        </h1>
        <h1 className="lg:w-[41.3125rem] lg:h-[3.375rem] mt-[1.25rem] font-Jost font-regular text-sm leading-[1.6875rem] text-white-30 ">
          Accept payment from anyone, anywhere using your business wallet, make
          any crypto transaction securely.
        </h1>
        <div className="  mt-[1.25rem] flex flex-row ">
          <button className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem]  text-white-60 ">
            <h1 className="ml-[0.625rem] ">Get started</h1>
            <BiRightArrowAlt />
          </button>
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
      <div className=" mt-[2.25rem]  lg:mt-[0]  relative z-10 lg:h-[36rem] lg:w-[54.875rem]">
        <motion.img
          viewport={{ once: true }}
          ref={scrollRef}
          initial={{ opacity: 0, y: "-100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
          src={SpaceBlackiPhoneCombo}
          alt=""
          className="lg:w-[31.25rem] h-full lg:mt-[2.9575rem] lg:ml-[1.5625rem]  object-contain relative z-10  "
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
