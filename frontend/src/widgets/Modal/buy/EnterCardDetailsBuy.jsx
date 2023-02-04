import React from "react";
import { motion } from "framer-motion";
import { mastercard } from "../../../icons";
function EnterCardDetailsBuy({
  nextModalChild,
  cardDetails,
  setCardDetails,
  amountToBuy,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { cardNumber, cardName, expiryDate, cvv } = cardDetails;
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      alert(
        "please enter all the neccesary card details for this transaction."
      );
      return;
    }
    nextModalChild();
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
      className="w-full lg:w-[30rem] mt-7 mx-auto lg:mt-5 h-[38.5rem] pt-11 px-3 lg:px-24 bg-whiteText"
    >
      <p className="text-sm leading-7 text-secondary-main font-medium mt-20">
        Enter Card Details
      </p>
      <p className="text-xs font-regular mt-1 leading-5 text-white-30">
        Gipperpay@gmail.com
      </p>
      <form action="" className="mx-3 mt-10">
        <label className="text-xs leading-5 text-secondary-main font-medium">
          Card Number
        </label>
        <div className="w-full lg:w-[18.5rem] flex justify-start px-2 h-12 rounded-md border border-secondary-20">
          <div className="w-[10%] flex justify-center items-center">
            {" "}
            <img src={mastercard} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            value={cardDetails.cardNumber}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardNumber: e.target.value })
            }
            className="pl-3 w-full"
            placeholder="2446 8548 7483 8482"
          />
        </div>

        <div className="mt-8">
          <label
            htmlFor=""
            className="text-xs leading-5 text-secondary-main font-medium"
          >
            Card Name
          </label>
          <input
            type="text"
            value={cardDetails.cardName}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardName: e.target.value })
            }
            placeholder="ciroma isaac adekunle"
            className="w-full lg:w-[18.5rem] flex justify-start px-2 h-12 rounded-md border border-secondary-20"
          />
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="w-[8rem]">
            <label className="text-xs leading-5 text-secondary-main font-medium">
              Exp. Date
            </label>
            <input
              type="text"
              className="block pl-3 w-full h-12 border border-white-20"
              placeholder="7/11"
              value={cardDetails.expiryDate}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiryDate: e.target.value })
              }
            />
          </div>

          <div className="w-[8rem] ">
            <label className="text-xs leading-5 text-secondary-main font-medium">
              CVV
            </label>
            <input
              type="text"
              className="block pl-3 w-full h-12 border border-white-20"
              placeholder="345"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full lg:w-[8.6rem] mt-8 text-s leading-6 text-whiteText h-11 bg-primary-main rounded-md"
          onClick={handleSubmit}
        >
          Pay NGN{amountToBuy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </button>
      </form>
    </motion.div>
  );
}

export default EnterCardDetailsBuy;
