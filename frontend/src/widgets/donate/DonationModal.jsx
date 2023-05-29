import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { MdOutlineAttachment } from "react-icons/md";
import Close from "../.../../../assets/closeIcon.png";
import { RxCopy } from "react-icons/rx";

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const DonationModal = ({ setShowDonationModal, showDonationModal }) => {
  const handleClose = () => {
    setShowDonationModal(false);
  };
  if (!showDonationModal) return null;
  return (
    <>
      <div className="fixed mt-[100px] flex justify-center w-ful h-full backdrop-blur z-50 top-0 left-0 right-0   md:inset-0 h-modal md:max-h-full">
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="p-6 w-[100%] h-full lg:h-[10rem] mx-auto lg:w-[30rem] lg:mx-0 bg-[#ffffff] border-2  shadow-sm  pb-40 lg:pb-28 rounded-[20px]"
        >
          <div className=" flex justify-between h-auto items-center ">
            <p className="flex gap-4 w-full lg:w-[60%] h-auto items-center cursor-pointer text-secondary-50">
              <MdOutlineAttachment size="25" color="#090023" />
              <span className="font-medium text-l font-Jost leading-10">
                Link generated
              </span>
            </p>
            <img
              src={Close}
              alt="close"
              onClick={handleClose}
              className="w-[20px] h-[20px]"
            />
          </div>
          <div className="flex-row lg:flex justify-between mt-3 gap-1">
            <p className="font-regular text-s leading-7 w-full lg:w-[60%]">
              Share link to start receiving donations.
            </p>
            <Link to="/make-donation">
              <div className=" cursor-pointer text-primary-main bg-primaryLight flex px-1 w-[8rem] h-[3rem] items-center m-auto justify-center">
                <span>Copy link</span>

                <RxCopy />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DonationModal;
