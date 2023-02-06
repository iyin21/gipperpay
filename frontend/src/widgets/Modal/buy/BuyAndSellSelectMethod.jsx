import React, { useState } from "react";
import { apple, banktransfer, google, mastercard } from "../../../icons";
import { motion } from "framer-motion";
function BuyAndSellSelectMethod({
  setBuyWithBank,
  nextModalChild,
}) {
  const [active, setActive] = useState(0);
  const paymentMethods = [
    {
      logo: mastercard,
      label: "Credit card/Debit card",
    },
    {
      logo: banktransfer,
      label: "Bank Transfer",
    },
    {
      logo: apple,
      label: "Apple pay",
    },
    {
      logo: google,
      label: "Google pay",
    },
  ];

  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  console.log(paymentMethod);

  const handlePaymentMethod = (i, label) => {
    setActive(i);
    setPaymentMethod(label);
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
      className="w-[30.6rem] h-[33.5rem] bg-whiteText px-24"
    >
      <p className="mt-20 text-secondary-main text-sm leading-7 font-medium">
        Select Payment Method
      </p>
      <p className="text-white-30 text-xs leading-5 font-regular">
        Gipperpay@gmail.com
      </p>
      <div className="h-auto">
        {paymentMethods.map((method, i) => (
          <div
            key={i}
            className={`w-[18.75rem] mx-auto lg:mx-0 h-[2.8rem] border flex justify-between items-center ${
              active === i ? "border-primary-main" : "border-white-20"
            } mt-[1.25rem]  py-2 px-5 cursor-pointer bg-whiteText rounded-md`}
            onClick={() => handlePaymentMethod(i, method)}
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
        onClick={() => {
          paymentMethod.label === "Bank Transfer" && setBuyWithBank(true);
          nextModalChild();
        }}
      >
        Proceed
      </button>
    </motion.div>
  );
}

export default BuyAndSellSelectMethod;
