import React, { useRef } from "react";
import { motion } from "framer-motion";

//assets
import { forindivualspic } from "../../../assets";

//icons
import { bookmark, rightarrow } from "../../../icons";

function ForIndividuals() {
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
  const imageVariants = {
    hide: {
      opacity: 0,
      x: "-30%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1.5, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="lg:w-[56.5625rem]  lg:h-[31.25rem] mx-[1.875rem] lg:m-auto p-[0.625rem] lg:flex lg:flex-row  items-center justify-between   ">
      <motion.div
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        whileHover={{ rotate: 5, scale: 0.8 }}
        ref={scrollRef}
        variants={imageVariants}
        className=" w-[20rem] h-[20rem] lg:w-[30.391875rem] lg:h-[31.25rem] m-auto relative  "
      >
        <img
          src={bookmark}
          alt=""
          className=" absolute z-10 w-[6rem] h-[6rem] lg:w-[9.1875rem] lg:h-[9.1875rem] "
        />
        <img
          src={forindivualspic}
          alt=""
          className="absolute border-[0.3125rem] border-primary-main rounded-[4.3125rem] top-[4.5625rem]  left-[2.5rem] z-0 w-[15.625rem] h-[15.625rem] lg:w-[23.75rem] lg:h-[23.75rem] "
        />
      </motion.div>
      <motion.div
        variants={textVariants}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="lg:w-[22.6875rem]  lg:h-[28.625rem] my-[1.3125rem] "
      >
        <h1 className="lg:w-[7.375rem] lg:h-[1.6875rem] font-Jost not-italic font-regular text-sm leading-[1.6875rem] text-center items-center text-secondary-30 ">
          For Individuals
        </h1>
        <h1 className="lg:w-[4.75rem] lg:h-[2.5rem] font-Jost not-italic font-big text-l leading-[2.5rem] text-center items-center text-secondary-main mt-[2.5rem] ">
          GU$T
        </h1>
        <h1 className="lg:w-[21.125rem] lg:h-[5.75rem] font-Jost not-italic font-regular text-s leading-[1.4375rem]  text-secondary-30 mt-[0.625rem] ">
          Spend crypto and money like a social bird using gipperpay native
          token, individuals can send crypto or fiat to anyone using just their
          social media username
        </h1>
        <div className="lg:w-[22.6875rem] lg:h-[7.4375rem] flex flex-row items-center mt-[2.5rem] ">
          <div className="w-[0.3125rem] h-[5.9375rem] bg-primary-main rounded-[0.625rem] mr-[1.25rem] "></div>
          <div className="w-[21.125rem] h-[7.4375rem] items-start ">
            <h1 className="w-[5.875rem] h-[2.5rem] font-Jost not-italic font-big text-l leading-[2.5rem] text-center items-center text-primary-main ">
              Invoice
            </h1>
            <h1 className="lg:w-[21.125rem] lg:h-[4.3125rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-30 mt-[0.625rem]  ">
              Freelancers can generate professional invoices and get paid by
              their contractors with no stress from anywhere.
            </h1>
          </div>
        </div>
        <div className="w-[9.75rem] h-[3.125rem] border-[0.0625rem] border-primary-main rounded-[0.3125rem] py-[0.625rem]  pl-[1.5625rem]  mt-[2.5rem] flex flex-row items-center">
          <h1 className="w-[4.8125rem] h-[1.4375rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-center items-center text-primary-main mr-[0.625rem] ">
            Get Started
          </h1>
          <img src={rightarrow} alt="" className="w-[1.5rem] h-[1.5rem] " />
        </div>
      </motion.div>
    </div>
  );
}

export default ForIndividuals;
