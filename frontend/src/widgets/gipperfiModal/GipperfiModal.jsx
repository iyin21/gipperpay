import React from "react";
import { AiFillCloseCircle, AiOutlineDown } from "react-icons/ai";
import { motion } from "framer-motion";
import GipperfiModalBackdrop from "./GipperfiModalBackdrop";
import { earn, gustCoin } from "../../assets";
import { USDT } from "../../icons";
function GipperfiModal({ handleClose }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
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
    <GipperfiModalBackdrop>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className=" w-[31rem] mx-auto lg:mx-0 bg-whiteText mt-5 border h-[40rem] lg:h-[35rem] shadow-sm  pb-40 lg:pb-28"
      >
        <div className=" p-12">
          <AiFillCloseCircle
            className="absolute top-2 right-5"
            size="1.5rem"
            cursor="pointer"
            color="#7B7B7B"
            onClick={handleClose}
          />
          <div className="flex justify-center w-full items-center gap-2">
            <div>
              <img src={earn} alt="" />
            </div>

            <div>
              <p className="text-m font-medium leading-8 text-[#109A30]">
                Earn
              </p>
              <p className="text-xs font-regular leading-5 text-[#109A30]">
                Get easy return on your crypto Annually
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center mt-5 items-center gap-5">
            <span className="flex gap-2 items-center">
              <img src={gustCoin} alt="" />
              <p>7%</p>
            </span>
            <span className="flex gap-2 items-center ">
              <img src={USDT} alt="" />
              <p>5.4%</p>
            </span>
            <span className="flex gap-2 items-center">
              <img src={gustCoin} alt="" />
              <p>5%</p>
            </span>
            <span className="flex gap-2 items-center">
              <img src={USDT} alt="" />
              <p>5.25%</p>
            </span>
          </div>

          <div className="mt-[3.75rem]">
            <label className="text-xs font-regular leading-5 text-secondary-main">
              Select Asset and Amount to Invest
            </label>
            <div className=" border-secondary-20 p-2 flex items-center h-12 rounded-md border ">
              <div className="flex gap-2 items-center h-full bg-[#F7F7F7] w-[30%]">
                <img src={gustCoin} alt="" />
                <p className="text-xs font-regular leading-5 text-secondary-main">
                  GU$T
                </p>
                <AiOutlineDown />
              </div>
              <input
                type="text"
                className="p-2 h-full placeholder:text-end w-[70%]"
                placeholder="0.00"
              />
            </div>
            <input type="text" name="" id="" />
          </div>

          <div className="flex justify-between items-center -mt-[1.25rem]">
            <p className="text-[11px] leading-4 font-regular text-white-30">
              Avaliable Balance: 0 GU$T
            </p>
            <button className="py-[0.3rem] bg-primary-light rounded-md px-[0.6rem] text-primary-main text-xs leading-5">
              Max
            </button>
          </div>

          <button className="w-full py-[0.7rem] px-5 bg-primary-main text-whiteText rounded-md mt-16">
            Fund Package
          </button>
        </div>
      </motion.div>
    </GipperfiModalBackdrop>
  );
}

export default GipperfiModal;
