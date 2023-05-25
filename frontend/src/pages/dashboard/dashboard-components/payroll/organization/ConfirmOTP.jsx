import React from "react";
import { motion } from "framer-motion";
import { dropIn } from "./PayrollLinkModal";
import CustomInput from "../../../../../components/form/CustomInput";
import CustomButton from "../../../../../components/form/CustomButton";
const ConfirmOTP = ({ showOTPModal, handleNext }) => {
  if (!showOTPModal) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <div className="flex fixed top-0 right-0 w-full h-full justify-center backdrop-blur z-50 ">
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="lg:w-[30%] px-8 py-4 h-[420px] bg-[#ffffff] border-2  shadow-sm   rounded-[20px] mt-24"
      >
        <div className="text-center mt-4">
          <p className="font-medium text-m leading-8 text-secondary-main">
            Confirm O.T.P
          </p>
          <p className="my-4 font-regular text-xs leading-4 text-secondary-30">
            A 6 Digit confirmation code was sent to your E-Mail Address, Please
            enter Below
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <p className="font-medium text-xs leading-8 text-secondary-main">
            Secure code
          </p>
          <div className="flex gap-4 mt-2 mb-8">
            <CustomInput
              type="password"
              placeholder="1"
              className="text-center border-[1px] border-secondary-30 rounded-sm w-[50px] h-[50px]"
            />
            <CustomInput type="password" placeholder="2" />
            <CustomInput type="password" placeholder="3" />
            <CustomInput type="password" placeholder="4" />
            <CustomInput type="password" placeholder="5" />
            <CustomInput type="password" placeholder="6" />
          </div>
          <p className="text-center mb-8 font-medium text-s leading-5 text-secondary-main">
            Didn't receive code?{" "}
            <span className="font-big text-primary-main">Resend OTP</span>
            <br />
            in <span className="font-big">1:30s</span>
          </p>
          <div className="m-auto text-center">
            <CustomButton>Confirm</CustomButton>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ConfirmOTP;
