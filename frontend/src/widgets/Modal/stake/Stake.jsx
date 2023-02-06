import React from "react";
import { giperfi } from "../../../icons";
import StakeBackdrop from "./stakeBackdrop";
import { AiFillCloseCircle } from "react-icons/ai";
import { stake } from "../../../assets";
import { motion } from "framer-motion";
function Stake({ handleClose }) {
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
    <StakeBackdrop>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className=" w-[90%] mx-auto lg:w-[38rem] lg:mx-0 bg-whiteText border-2 h-[40rem] lg:h-[35rem] shadow-sm  pb-40 lg:pb-28 rounded-[20px]"
      >
        <div className="flex justify-between items-center p-12">
          <div className="flex gap-3">
            <p className="text-s font-medium leading-6 text-secondary-main">
              Stake
            </p>
            <div className="flex items-center gap-2">
              <img src={giperfi} alt="" />
              <p className="text-s font-regular leading-6 text-secondary-main">
                Gipperfi
              </p>
            </div>
          </div>
          <AiFillCloseCircle
            size="2rem"
            cursor="pointer"
            color="#7B7B7B"
            onClick={handleClose}
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-l font-medium leading-10 text-secondary-main">
            Earn Crypto
          </h2>
          <p className="pt-2 text-s text-white-30 font-regular text-center leading-6 w-[90%] mb-3 lg:w-[50%]">
            Join a high interest staking pool to earn staking yield up to{" "}
          </p>
          <button className="w-[14.5rem] h-[3.6rem] rounded-2xl bg-[#039F00] text-xl text-whiteText leading-10 font-medium">
            10% annually
          </button>
          <div className="w-[18.75rem] h-[12.5rem] mt-2">
            <img src={stake} alt="" />
          </div>
        </div>

        <button className="w-[90%] lg:hidden mt-[1.9rem] ml-[5%] py-[0.62rem] px-5 bg-primary-main text-s leading-6 text-whiteText font-regular">Stake GU$T</button>
      </motion.div>
    </StakeBackdrop>
  );
}

export default Stake;
