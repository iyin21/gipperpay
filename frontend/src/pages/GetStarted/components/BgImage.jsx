import React from "react";
import { motion } from "framer-motion";
import { handspic2 } from "../../../assets";

const BgImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 2, type: "spring", stiffness: 120 }}
      className="hidden  lg:flex lg:flex-col lg:ml-[3.125rem]   "
    >
      <img
        src={handspic2}
        alt=""
        className=" w-[23.75rem] h-[23.75rem] object-contain overflow-hidden rounded-[12.5rem]  "
      />
      <div className="w-[1.875rem] h-[5px] rounded-[1.25rem] bg-primary-main mx-auto mt-[4.25rem] "></div>
      <h1 className=" w-[24.125rem] h-[2.5rem] mt-[1.25rem] text-center font-Jost font-medium text-l leading-[2.5rem] items-center text-secondary-main ">
        Bank Payout
      </h1>
      <h1 className=" w-[14.5rem] h-[2.875rem] mt-[1.25rem] mx-auto text-center font-Jost font-regular text-s leading-[1.4375rem] items-center text-secondary-30 ">
        Receive your funds direct into your bank account
      </h1>
    </motion.div>
  );
};

export default BgImage;
