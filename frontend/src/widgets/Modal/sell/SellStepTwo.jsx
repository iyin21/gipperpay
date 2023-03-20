import React, { useState } from "react";
import { bank } from "../../../assets";
import { motion } from "framer-motion";

function SellStepTwo({ nextSellStep }) {
  const [bankName, setbankName] = useState('');
  const [acctNumber, setAcctNumber] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    !bankName || !acctNumber
      ? alert("please fill in correct account details")
      : nextSellStep();
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
      className="w-full lg:w-[31rem] px-[.5rem] py-[6.4rem] lg:py-[3.4rem]  bg-whiteText"
    >
      <div>
        <img src={bank} alt="" />
      </div>

      <p className="text-secondary-main text-sm leading-7 font-medium mt-10">
        Enter Bank Details
      </p>

      <form action="">
        <div className="w-full lg:w-[18.5rem]">
          <label className="text-xs font-medium leading-5">Bank </label>
          <input
            className="w-full text-white-30 border border-secondary-20 py-[0.6rem] px-5 rounded-md"
            type="text"
            value={bankName}
            onChange={(e) =>
              setbankName(e.target.value)
            }
          />
        </div>

        <div className="w-full lg:w-[18.5rem] mt-5">
          <label className="text-xs font-medium leading-5 ">
            Account Number{" "}
          </label>
          <input
            className="w-full text-white-30 border border-secondary-20 py-[0.6rem] px-5 rounded-md"
            type="text"
            value={acctNumber}
            onChange={(e) =>
              setAcctNumber(e.target.value)
            }
          />
          <p className="text-xs font-regular text-white-30 leading-5">
            Mary Stansfied
          </p>
        </div>

        <button
          className="w-full lg:w-[30%] py-[0.7rem] px-5 bg-primary-main rounded-md mt-10 text-whiteText"
          onClick={handleSubmit}
        >
          Proceed
        </button>
      </form>
    </motion.div>
  );
}

export default SellStepTwo;
