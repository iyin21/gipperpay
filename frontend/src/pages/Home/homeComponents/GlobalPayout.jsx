import React, { useRef } from "react";
import { motion } from "framer-motion";

import { iphone12 } from "../../../assets";

function GlobalPayout() {
  const scrollRef = useRef(null);
  const data = [
    {
      head: "Global payout",
      text: "Supporting withdrawal in more than 30+ countries get paid easily and access business funds with no stress",
    },
    {
      head: "Process payment the seamless way Using our payment tools",
      text: "A tailored payment tool for receiving and processing everything payment seamlessly",
    },
  ];
  const data2 = [
    {
      head: "Crypto On and off-ramp",
      text: "Easily buy and sell crypto using all major payment methods, credit card, bank transfer, Apple pay, google pay",
    },
    {
      head: "Donation",
      text: "Raise equity funds, raise for charity and non-profit organizations. Easily raise donations with crypto using our reserved donation tool.",
    },
  ];
  return (
    <div className="  lg:flex lg:flex-row-reverse my-[4.125rem] mx-[3.125rem] lg:mt-[6.25rem] flex flex-col items-center justify-center">
      <div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 1,
              duration: 1,
              type: "spring",
              stiffness: 120,
            },
          }}
          ref={scrollRef}
          className=" lg:grid lg:grid-cols-2 lg:gap-[1.25rem] lg:w-[37.5rem] "
        >
          {data.map((item) => (
            <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md px-[1.25rem] py-[2.5rem] mb-[1.25rem] lg:mb-[0rem]  ">
              <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main  ">
                {item.head}
              </h1>
              <h1 className=" font-Jost not-italic font-regular text-s leading-[1.6875rem] items-center text-secondary-30 mt-[1.25rem] ">
                {item.text}
              </h1>
            </div>
          ))}
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 3,
              duration: 3,
              type: "spring",
              stiffness: 120,
            },
          }}
          ref={scrollRef}
          className=" lg:grid lg:grid-cols-2 mt-[1.875rem] lg:w-[46.875rem] lg:pl-[8.8125rem] lg:gap-[1.25rem]  "
        >
          {data2.map((item) => (
            <div className=" w-[18.125rem] h-[18.75rem] border-t-[0.125rem] border-Rectangle bg-white-60 rounded-[0.625rem] shadow-md px-[1.25rem] py-[2.5rem] mb-[1.25rem] lg:mb-[0rem]  ">
              <h1 className="font-Jost not-italic font-big text-sm leading-[1.6875rem] items-center justify-center text-secondary-main  ">
                {item.head}
              </h1>
              <h1 className=" font-Jost not-italic font-regular text-s leading-[1.6875rem] items-center text-secondary-30 mt-[1.25rem] ">
                {item.text}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.img
        viewport={{ once: true }}
        ref={scrollRef}
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 2,
            duration: 2,
            type: "spring",
            stiffness: 120,
          },
        }}
        whileHover={{ rotate: 5, scale: 0.8 }}
        src={iphone12}
        alt=""
        className=" w-[14.074375rem] h-[30.25rem] lg:mr-[1.375rem]"
      />
    </div>
  );
}

export default GlobalPayout;
