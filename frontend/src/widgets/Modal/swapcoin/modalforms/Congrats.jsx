import React from "react";
import { congrats } from "../../../../assets";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Congrats({ setShowModal, from, to, setFrom, setTo }) {
  const navigate = useNavigate();
  const handleFinish = () => {
    setShowModal(false);
    navigate("/dashboard");
    setFrom({ ...from, value: 0 });
    setTo({});
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
    <div className="w-[100%] fixed top-0 left-0 h-[100vh] flex justify-center backdrop-blur-sm z-20">
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-[22.4rem] h-[22rem] mt-20 bg-[white] rounded-3xl"
      >
        <div className="h-[10rem] p-10">
          <img className="w-full h-full object-contain" src={congrats} alt="" />
        </div>
        <p className="text-m leading-8 font-bold text-white-50 flex justify-center items-center">
          Success!
        </p>
        <div className="flex justify-between mt-6 items-center w-full">
          <div className="flex flex-col justify-around items-center w-[50%]">
            <div className="flex gap-2">
              <img src={from.logo} alt="" />
              <h2 className="text-xs leading-5 font-regular text-white-30">
                {from.label}
              </h2>
            </div>
            <p className="text-s font-medium leading-6 text-secondary-main">
              {from.value}
            </p>
          </div>
          <MdOutlineSwapHoriz size="2rem" color="#7B7B7B" />
          <div className="flex flex-col justify-around items-center w-[50%]">
            <div className="flex gap-2">
              <img src={to.image} height="20" width="20" alt="" />
              <h2 className="text-xs leading-5 font-regular text-white-30">
                {to.symbol.toUpperCase()}
              </h2>
            </div>
            <p className="text-s font-medium leading-6 text-secondary-main">
              {to.current_price}
            </p>
          </div>
        </div>

        <button
          className="w-20 h-10 bg-primary-main mt-5 mx-auto ml-36 text-whiteText text-s leading-6 font-regular"
          onClick={handleFinish}
        >
          Finish
        </button>
      </motion.div>
    </div>
  );
}

export default Congrats;
