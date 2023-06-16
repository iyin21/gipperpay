import React, { useRef } from "react";
import { motion } from "framer-motion";

//icons
import { mark } from "../../../icons";

const data1 = [
  {
    head: "Startup",
    text: "High-ranked start-ups use gipperpay API to accept crypto payment, letting users be able to pay with crypto",
  },
  {
    head: "E-commerce",
    text: "Put your business across borders by using our e-commerce storefront to sell to people around the world with ease.",
  },
  {
    head: "Freelancers",
    text: "Receive payment in crypto for your International gigs and get settled in your local currency with no delay",
  },
];

function UseCases() {
  const scrollRef = useRef(null);
  const textVariants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
    },
  };
  return (
    <motion.div
      variants={textVariants}
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      ref={scrollRef}
      className=" lg:w-[74.9375rem] lg:m-auto p-[0.9375rem] lg:p-[0]  "
    >
      <h1 className=" font-Jost not-italic font-regular text-sm  leading-[1.6875rem] items-center text-center  lg:mt-[4.8125rem] ">
        Use Cases
      </h1>
      <h1 className=" font-Jost not-italic font-big text-l  leading-[2.5rem] items-center  lg:mt-[1.25rem] text-center ">
        Who can use Gipperpay?
      </h1>

      <div className=" lg:grid lg:grid-cols-3 lg:w-[74.9375rem] m-auto  lg:mt-[2.5rem]  p-[0.9375rem] lg:p-[0]   ">
        {data1.map((item) => (
          <div className="w-[25rem] m-auto lg:m-[0] h-[12.5rem] flex flex-row items-center border-l-[0.125rem] border-primary-main rounded-[0.625rem] my-[1.25rem] ">
            <img
              src={mark}
              alt=""
              className="w-[2.0625rem] h-[2.0625rem] mr-[1.4375rem] ml-[0.625rem] "
            />
            <div className="items-start ">
              <h1 className="w-[8.4375rem] h-[1.6875rem] font-Jost font-big text-sm leading-[1.6875rem]  text-Rectangle ">
                {item.head}
              </h1>
              <h1 className="w-[12.875rem] h-[2.375rem] mt-[0.625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem]  text-secondary-main ">
                {item.text}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className=" lg:w-[50.5625rem] lg:m-auto lg:grid lg:grid-cols-2 lg:mt-[2.5rem]  p-[0.9375rem] lg:p-[0]  ">
        <div className=" m-auto w-[25rem] h-[12.5rem] flex flex-row items-center border-l-[0.125rem] border-primary-main rounded-[0.625rem] my-[1.25rem] ">
          <img
            src={mark}
            alt=""
            className="w-[2.0625rem] h-[2.0625rem] mr-[1.4375rem] ml-[0.625rem] "
          />
          <div className="items-start  ">
            <h1 className="w-[6.4375rem] h-[1.6875rem] font-Jost font-big text-sm leading-[1.6875rem]  text-Rectangle ">
              NGO/campaign
            </h1>
            <h1 className="w-[12.875rem] h-[2.375rem] mt-[0.625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem]  text-secondary-main ">
              Be limitless with your fundraising, when you can raise from
              anywhere in the world in cryptocurrency
            </h1>
          </div>
        </div>
        <div className="m-auto w-[25rem] h-[12.5rem] flex flex-row items-center border-l-[0.125rem] border-primary-main rounded-[0.625rem] my-[1.25rem] ">
          <img
            src={mark}
            alt=""
            className="w-[2.0625rem] h-[2.0625rem] mr-[1.4375rem] ml-[0.625rem] "
          />
          <div className="items-start ">
            <h1 className="w-[12.6875rem]  font-Jost font-big text-sm leading-[1.6875rem]   text-Rectangle ">
              Large organization
            </h1>
            <h1 className="w-[12.875rem]  mt-[0.625rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem]  text-secondary-main ">
              Easily process payroll for your employee, focus on building your
              company or organization let's focus on helping you keep employees
              happy, while you stay compliant.
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default UseCases;
