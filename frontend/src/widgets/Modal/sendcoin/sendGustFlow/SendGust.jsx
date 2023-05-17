import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
function SendGust({ nextStep, setSocialPay, sendMethods, setMethod, method }) {
  const [active, setActive] = useState(0);
  console.log(method);

  const selectMethod = (i, label) => {
    setActive(i);
    setMethod(label);
    method !== "GU$T tag" && setSocialPay(true);
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
      className="w-full lg:w-[30rem] mx-auto mt-32 lg:mt-5 h-[38.5rem] pt-11 px-8 lg:px-24 bg-whiteText"
    >
      <p className="text-s font-medium leading-6 text-secondary-main">
        Choose Method to Send GU$T
      </p>
      <p className="text-white-30 text-xs font-regular leading-5">
        You can send GU$T to anyone using any method listed below
      </p>
      <div className="h-auto">
        {sendMethods.map((method, i) => (
          <div
            key={i}
            className={`w-[18.75rem] h-[2.8rem] border flex justify-between items-center ${
              active === i ? "border-primary-main" : "border-white-20"
            } mt-[1.25rem]  py-2 px-5 cursor-pointer bg-whiteText rounded-md`}
            onClick={() => selectMethod(i, method)}
          >
            <div className="flex gap-1">
              <img height={20} width={20} src={method.logo} alt="" />
              <p className="text-white-30 text-s leading-6">{method.label}</p>
            </div>
            <div
              className={`w-3 h-3 cursor-pointer border flex justify-center items-center ${
                active === i ? "border-primary-main" : "border-white-20"
              } rounded-full`}
            >
              <div
                className={`${
                  active === i ? "bg-primary-main" : "bg-white-20"
                } w-2 h-2  rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="mt-10 w-full lg:w-24 h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
        onClick={nextStep}
      >
        Proceed
      </button>
    </motion.div>
  );
}

export default SendGust;
