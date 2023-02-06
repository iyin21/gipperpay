import React from "react";
import { gustCoin } from "../../../../assets";
import { motion } from "framer-motion";
function EnterAddress({ nextStep, transactionDetails, setTransactionDetails }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionDetails.gustTag || !transactionDetails.gustAmount) {
      alert("please enter complete transaction details");
      return;
    }
    nextStep();
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
      className="w-full lg:w-[30rem] mx-auto mt-36 lg:mt-0 h-[38.5rem] pt-11 px-6 lg:px-24 bg-whiteText"
    >
      <p className="text-s font-medium leading-6 text-secondary-main">
        Choose Method to Send GU$T
      </p>
      <p className="text-white-30 text-xs font-regular leading-5">
        You can send GU$T to anyone using any method listed below
      </p>

      <form action="">
        <div className="mt-11">
          <label className="text-secondary-main font-medium text-xs leading-5">
            GU$T Tag
          </label>
          <input
            type="text"
            name=""
            id=""
            value={transactionDetails.gustTag}
            onChange={(e) =>
              setTransactionDetails({
                ...transactionDetails,
                gustTag: e.target.value,
              })
            }
            className="w-[100%] h-[3.12rem] text-secondary-main text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md mb-11 pl-2"
            placeholder="b4ytr8ue"
          />
        </div>

        <label className="text-secondary-main font-medium text-xs leading-5">
          Send
        </label>
        <div className="w-[100%] h-[3.12rem] text-secondary-main flex items-center text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
          <div className=" w-[5rem] h-5 flex justify-start gap-2 pl-2 items-center">
            <img src={gustCoin} alt="" />
            <p className="text-xs leading-4 font-regular">GU$T</p>
          </div>
          <input
            className="w-[90%] pl-3 text-sm text-secondary-main leading-7 placeholder:text-right placeholder:text-secondary-main"
            type="number"
            value={transactionDetails.gustAmount}
            onChange={(e) =>
              setTransactionDetails({
                ...transactionDetails,
                gustAmount: e.target.value,
              })
            }
            placeholder="0.00"
          />
        </div>
        <p className="text-xs font-regular leading-5 text-white-30">
          Avaliable Balance: 0 GUST
        </p>

        <button
          type="submit"
          className="mt-10 w-[100%] lg:w-24 h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}

export default EnterAddress;
