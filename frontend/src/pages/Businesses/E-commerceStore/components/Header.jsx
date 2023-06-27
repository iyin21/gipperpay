import React, { useRef } from "react";
import { BsDot } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { iphone11Ecommerce, rectangle, MacbookPro, PurpleRectangle, IPhone11ProMax2 } from "../../../../assets/index";
import { questionmark } from "../../../../icons";
import { motion } from "framer-motion";
import {
  textVariants,
  rectangleVariants,
} from "../../../Products/ProductsPayroll/components/Header";

function Header() {
  const scrollRef = useRef(null);
  return (
    <div className="w-full h-full  lg:flex lg:flex-row lg:pl-[3.125rem] pl-6 pt-8 lg:pt-0 relative z-10 bg-white-70">
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
          <span>E-commerce store</span>
        </h1>
        <h1 className="w-[80%]  mt-[1.25rem] font-Jost font-big md:text-3xl text-[36px] leading-[3rem] items-center text-secondary-main ">
        Unleash Your Sales Potential, Create Link and Sell Anywhere
        </h1>
        <h1 className="lg:w-[90%] lg:h-[3.375rem] mt-[1.25rem] font-Jost font-regular text-sm leading-[1.6875rem] text-white-30 ">
        Sell online easily with payment links .create a complete payment page effortlessly and share the link with your customers for seamless transactions-no coding needed
        </h1>
        <div className=" lg:mt-[3rem] mt-[1.25rem] flex flex-row ">
          <button className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[10rem] h-[2.8125rem]  text-white-60 ">
            <h1 className="ml-[0.625rem] text-s">Get started</h1>
            <BiRightArrowAlt size="26px"/>
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
      <div className=" mt-[2.25rem]  lg:mt-[0] w-full  relative z-10 ">
        <motion.img
          viewport={{ once: true }}
          ref={scrollRef}
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
          src={MacbookPro}
          alt=""
          className=" h-full lg:mt-[1.62rem] object-contain hidden lg:block  relative z-10  "
        />
        <div className="flex justify-center ">
        <motion.img
        viewport={{ once: true }}
        ref={scrollRef}
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
        src={IPhone11ProMax2}
        alt=""
        className=" h-full lg:mt-[1.62rem] lg:hidden object-top  relative z-10 "
      />
        </div>
        
        <motion.img
          variants={rectangleVariants}
          animate="show"
          initial="hide"
          src={PurpleRectangle}
          alt=""
          className="absolute top-[0] h-full lg:-right-[15rem] -right-[20rem] md:-right-[30rem] sm:-right-[20rem]  lg:left-[2.5rem] z-0   "
        />
      </div>
    </div>
  );
}

export default Header;
