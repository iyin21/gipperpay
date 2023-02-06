import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { BiCopy } from "react-icons/bi";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { gustCoin } from "../../../assets";
function BuyWithBank({ amountToBuy, nextModalChild }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className=" w-full lg:w-[30rem] mx-auto mt-11 lg:mt-5 h-[38.5rem] pt-24 px-3 lg:px-24 bg-whiteText"
    >
      <p className="text-sm font-medium text-secondary-main leading-8">
        Bank Transfer
      </p>
      <p className="text-white-30 text-xs font-regular leading-5">
        Gipperpay@gmail.com
      </p>
      <p className="text-white-30 text-xs font-regular leading-5 mt-5">
        Please transfer the exact amount you want tto fund to the account Number
        Below
      </p>
      <div className="flex justify-between  p-3">
        <p>NGN{amountToBuy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div className="w-5 h-5 flex items-center bg-primary-light justify-center rounded-full">
          <BsArrowRight size=".8rem" className="text-primary-main" />
        </div>

        <div>
          <p>0.00</p>
          <div>
            <img src={gustCoin} alt="" />
            <p>GU$T</p>
          </div>
        </div>
      </div>

      <p className="text-white-30 text-xs font-regular leading-5 mt-5">
        Transfer funds to
      </p>
      <div className="w-[18] h-[3.4rem] mt-3 bg-white-10 flex justify-between items-center px-3 rounded-md">
        <div>
          <p className="text-white-30 text-xs font-regular leading-5">
            Wema Bank
          </p>
          <p className="text-s leading-6 font-medium text-secondary-main">
            7469265828
          </p>
        </div>

        <BiCopy size="1rem" color="#504f51" />
      </div>

      <div className="flex justify-between items-center mt-11">
        <p className="text-white-30 w-[60%] text-xs font-regular leading-5">
          Please use yout Gippertag in description
        </p>
        <div className="flex gap-3 bg-white-10 p-2 rounded-md">
          <p className="text-white-30 text-xs font-regular leading-5">
            b4ytr8ue
          </p>{" "}
          <BiCopy size="1rem" color="#504f51" />
        </div>
      </div>

      <div className=" border-t-2 border-dashed mt-7">
        <div className="w-full mt-3 boder flex justify-between items-center border-black">
          <p className="text-xs font-medium leading-5 text-white-30">
            Exchange Rate
          </p>
          <div className="flex justify-between items-center w-[50%]">
            <p className="text-xs font-medium leading-5 text-white-30"></p>
            <MdOutlineSwapHoriz color="#7B7B7B" />
            <p className="text-xs font-medium leading-5 text-white-30">$</p>
          </div>
        </div>

        <div className="w-full boder flex justify-between items-center border-black">
          <p className="text-xs font-medium leading-5 text-white-30">Fee</p>
          <p className="text-xs font-medium leading-5 text-white-30">
            {amountToBuy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} NGN
          </p>
        </div>

        <div className="w-full boder flex justify-between items-center border-black">
          <p className="text-xs font-medium leading-5 text-white-30">
            Amount you’ll reeceive
          </p>
          <p className="text-xs font-medium leading-5 text-white-30">
            0.00 GU$T
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="mt-10 w-full mb-11 lg:w-[7rem] h-[2.8rem] bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
        onClick={nextModalChild}
      >
        I Have Paid
      </button>
    </motion.div>
  );
}

export default BuyWithBank;
