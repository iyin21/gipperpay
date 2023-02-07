import React from "react";
import { contact, Rectanglelight, Rectanglewaitlist } from "../../../assets";
import { motion } from "framer-motion";

function HeroSection() {
  const rectangleVariants = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 1, duration: 3 },
    },
  };

  const textVariants = {
    hide: { y: "-20%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  const formVariants = {
    hide: { y: "20%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="w-full relative py-[7.1rem] h-[37.5rem] bg-[#F7F7F7]">
      <motion.h2
        variants={textVariants}
        animate="show"
        initial="hide"
        className="text-3xl font-big leading-[69px] flex justify-center text-secondary-main"
      >
        Join the Waitlist
      </motion.h2>
      <motion.div
        variants={textVariants}
        animate="show"
        initial="hide"
        className="w-full flex justify-center mt-10"
      >
        <p className="text-sm leading-[27px] w-[35rem] font-regular text-white-30 text-center">
          Allow your business to accept payment online and offline, build
          financial products, sell online, stay compliant and grow your revenue
        </p>
      </motion.div>

      <motion.form
        variants={formVariants}
        animate="show"
        initial="hide"
        className="w-[50%] mt-10 ml-[25%] flex flex-col items-center justify-center"
        action=""
      >
        <div className="flex items-center bg-[#FCFCFC] w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] pl-6 rounded-md">
          <div>
            <img src={contact} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Full Name"
            className="h-full w-full py-[1.1rem] pl-3 bg-transparent placeholder:text-white-30 "
          />
        </div>

        <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] pl-6 rounded-md">
          <div>
            <img src={contact} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            className="h-full w-full py-[1.1rem] pl-3 bg-transparent placeholder:text-white-30 "
          />
        </div>

        <button className="px-[8.5rem] py-[0.9rem] mt-[0.6rem] bg-primary-main text-s text-whiteText rounded-md shadow-[0px_1px_2px_rgba(16,24,40,0.05)] leading-6">
          Join Waitlist
        </button>
      </motion.form>

      {/* rectangles */}
      <motion.div
        variants={rectangleVariants}
        animate="show"
        initial="hide"
        className="absolute h-full w-[30rem] -left-5 top-0"
      >
        <img src={Rectanglewaitlist} alt="" />
      </motion.div>

      <motion.div
        variants={rectangleVariants}
        animate="show"
        initial="hide"
        className="absolute h-full w-[30rem] -right-[17%] top-0"
      >
        <img src={Rectanglelight} alt="" />
      </motion.div>
      {/* -------------------- */}
    </div>
  );
}

export default HeroSection;
