import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { congrats } from "../../../assets";
function BuyAndSellSuccessModal({
  amountToBuy,
  desc,
  firstName,
  checker = true
}) {
  const navigate = useNavigate()
  const handleFinish = () => {
    if(checker) {
      window.location.reload()
    }else {
      navigate('/dashboard')
    }
   
  };
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
      className="w-[100%] fixed top-0 left-0 h-[100vh] flex justify-center backdrop-blur-sm z-20"
    >
      <div className="w-[29.3rem] h-[33.3rem] mt-10 bg-[white] rounded-3xl shadow-sm">
        <div className="h-[15rem] p-10">
          <img className="w-full h-full object-contain" src={congrats} alt="" />
        </div>
        <p className="text-m leading-8 font-bold text-white-50 flex justify-center items-center">
          Success!
        </p>
        <div className="w-[8rem] h-14 rounded-xl bg-primary-light mx-auto mt-9 mb-3 text-s flex justify-center items-center font-medium text-primary-main leading-6">
          {amountToBuy
            ? `${amountToBuy
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} GU$T`
            : firstName}
        </div>
        <p className="text-xs leading-5 text-center font-medium text-white-30 mt-2 mb-2">
          {desc}
        </p>
        {/* copy link */}
        <button
          className="w-[8rem] h-11 bg-primary-main mx-auto mt-8 text-s flex justify-center items-center gap-2 font-medium text-primary-main leading-6 rounded-[5px]"
          onClick={handleFinish}
        >
          <p className="text-s font-regular text-whiteText">Finish</p>
        </button>
      </div>
    </motion.div>
  );
}

export default BuyAndSellSuccessModal;
