import React from "react";
import { useNavigate } from "react-router-dom";
import { congrats, logo } from "../../../assets";
import { motion } from "framer-motion";
import {FaShareAlt} from 'react-icons/fa'
import html2pdf from "html2pdf.js";

function PaymentSuccessfulCongratsModal({ topUpAmount, setShowTopUpModal }) {
  const navigate = useNavigate();

  const handleFinish = () => {
    setShowTopUpModal(false);
    navigate("/dashboard");
  };

  const componentRef = React.useRef(null);

  const handleShareReceipt = () => {
    const element = componentRef.current;
    const options = {
      filename: "receipt.pdf",
      image: { type: "jpeg", quality: 1 },
      jsPDF: { unit: "px", format: "legal", orientation: "portrait" },
    };
  
    html2pdf().set(options).from(element).save();
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
      <div ref={componentRef} className="w-fit h-fit mt-10 bg-[white] rounded-3xl shadow-sm pb-6">
        <div className="h-[15rem] p-10">
          <img className="w-full h-full object-contain" src={congrats} alt="" />
        </div>
        <p className="text-m leading-8 font-bold text-white-50 flex justify-center items-center">
          Dhee's Store
        </p>
        <p className="text-2xl leading-[5rem] font-medium mt-3 text-white-50 flex justify-center items-center border-b-2 border-t-2 mx-auto w-fit px-[6rem]">
          Successful
        </p>
        <div className="flex justify-between border-b-2 mx-[2.852687rem] py-5">
          <div>
            <p className=" font-jost font-normal font-[400] text-[16px] leading-[23px] text-[#7B7B7B] flex-none order-0 flex-grow-0">Item</p>
            <p className="font-jost font-normal font-500 text-[16px] leading-[23px] text-center text-[#313131] flex-none order-1 flex-grow-0">Gucci Bag</p>
          </div>
          <div>
            <p className=" font-jost font-normal font-[400] text-[16px] leading-[23px] text-[#7B7B7B] flex-none order-0 flex-grow-0">Fee</p>
            <p className="font-jost font-normal font-500 text-[16px] leading-[23px] text-center text-[#313131] flex-none order-1 flex-grow-0">4,000 USDT</p>
          </div>
        </div>

        <div className="flex flex-col mx-[2.852687rem] py-5">
          <div className="flex justify-between">
            <p className=" font-jost font-normal font-[400] text-[16px] leading-[23px] text-center text-[#7B7B7B] flex-none order-0 flex-grow-0">Item Cost</p>
            <p className="font-jost font-normal font-500 text-[16px] leading-[23px] text-center text-[#7B7B7B] flex-none order-1 flex-grow-0">4,000 USDT</p>
          </div>
          <div className="flex justify-between">
            <p className=" font-jost font-normal font-[400] text-[16px] leading-[23px] text-center text-[#7B7B7B] flex-none order-0 flex-grow-0">Transaction Fee</p>
            <p className="font-jost font-normal font-500 text-[16px] leading-[23px] text-center text-[#7B7B7B] flex-none order-1 flex-grow-0">3 USDT</p>
          </div>
          <div className="flex justify-between">
            <p className=" font-jost font-normal font-[400] text-[16px] leading-[23px] text-center text-[#7B7B7B] flex-none order-0 flex-grow-0">Total</p>
            <p className="font-jost font-normal font-500 text-[16px] leading-[23px] text-center text-[#7B7B7B] flex-none order-1 flex-grow-0">4,000 USDT</p>
          </div>
        </div>
          <div className="flex w-[102.23px] h-[20px] mx-auto">
            <img src={logo} alt="" />
          </div>
        <button className="w-[9rem] h-11 bg-primary-main mx-auto mt-8 text-s flex justify-center items-center gap-2 font-medium text-primary-main leading-6 rounded-[5px]">
          <p
            className="text-s font-regular text-whiteText flex items-center"
            onClick={handleShareReceipt}
          >
            Share Receipt <span className="ml-2">
              <FaShareAlt />
            </span>
          </p>
        </button>
      </div>
    </motion.div>
  );
}

export default PaymentSuccessfulCongratsModal;
