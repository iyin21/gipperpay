import React from "react";
import { gustCoin } from "../../../../assets";
import { motion } from "framer-motion";
function PayViaSocial({
  nextStep,
  method,
  transactionDetails,
  setTransactionDetails,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionDetails.reciversUserName) {
      alert("Enter reciever's username");
      return;
    } else if (!transactionDetails.gustAmount) {
      alert("Enter the GU$T ammount you wish to transfer");
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
      className="w-[30rem] mx-auto mt-5 h-[38.5rem] pt-11 px-24 bg-whiteText"
    >
      <p className="text-s font-medium leading-6 text-secondary-main">
        Enter @account of Receiver
      </p>
      <p className="text-white-30 text-xs font-regular leading-5">
        Send GU$T using Receivers Social media @handle
      </p>

      <form action="">
        <div className="mt-11">
          <label className="text-secondary-main font-medium text-xs leading-5">
            Social Media Tag
          </label>
          <div className="w-[100%] h-[3.12rem] text-secondary-main flex items-center text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
            <div className=" w-[2rem] h-5 flex justify-start gap-2 pl-2 items-center">
              <img height={50} width={50} src={method.logo} alt="" />
            </div>
            <input
              className="w-[90%] pl-3 text-sm text-secondary-main leading-7  placeholder:white-20 "
              type="text"
              value={transactionDetails.reciversUserName}
              onChange={(e) =>
                setTransactionDetails({
                  ...transactionDetails,
                  reciversUserName: e.target.value,
                })
              }
              placeholder="@"
            />
          </div>
        </div>

        <label className="text-secondary-main font-medium text-xs leading-5 pt-44">
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
          className="mt-10 w-24 h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}

export default PayViaSocial;
