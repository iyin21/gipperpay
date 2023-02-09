import { motion } from "framer-motion";
import React, { useRef } from "react";
import {
  checkwhocan,
  Rectanglewhocan,
  whocan1,
  whocan2,
} from "../../../assets";

function WhoCanUse() {
  const data = [
    {
      img: checkwhocan,
      title: "Startup",
      desc: "High-ranked start-ups use gipperpay API to accept crypto payment, letting users be able to pay with crypto",
    },
    {
      img: checkwhocan,
      title: "E-commerce",
      desc: "Put your business across borders by using our e-commerce storefront to sell to people around the world with ease.",
    },
    {
      img: checkwhocan,
      title: "Freelancers",
      desc: "Receive payment in crypto for your International gigs and get settled in your local currency with no delay",
    },
  ];

  const data2 = [
    {
      img: checkwhocan,
      title: "Large organization",
      desc: "Easily process payroll for your employee, focus on building your company or organization let's focus on helping you keep employees happy, while you stay compliant.",
    },
    {
      img: checkwhocan,
      title: "NGO/campaign",
      desc: "Be limitless with your fundraising, when you can raise from anywhere in the world in cryptocurrency",
    },
  ];

  const scrollRef = useRef(null);

  const textVariants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const rectangleVariants = {
    hide: {
      opacity: 0,
      y: "-30%",
    },
    show: {
      opacity: 1,
      y: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const imageVariants = {
    hide: {
      opacity: 0,
      x: "-30%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1.5, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  const imageVariantsRight = {
    hide: {
      opacity: 0,
      x: "100%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1.5, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="w-full py-[6.25rem]">
      <motion.h2
        variants={textVariants}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="font-big text-l mb-[4.1rem] leading-10 text-secondary-main flex justify-center"
      >
        Who can use Gipperpay?
      </motion.h2>
      <div className="w-full items-center block lg:flex justify-center gap-[4.25rem]">
        <div className="relative md:flex justify-center">
          <motion.img
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            variants={imageVariants}
            src={whocan1}
            className="relative z-10"
            alt=""
          />
          {/* rectangle */}
          <motion.div
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            variants={rectangleVariants}
            className="h-[37.5rem] absolute -top-10"
          >
            <img src={Rectanglewhocan} alt="" />
          </motion.div>
          {/*  */}
        </div>

        <div className="w-full mt-20 lg:mt-0 lg:w-[26%] md:px-8 lg:px-0">
          {data.map((data, index) => (
            <motion.div
              variants={textVariants}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              key={index}
              className="flex items-center gap-3 mb-[4.25rem]"
            >
              <div>
                <img src={data.img} alt="" />
              </div>
              <div>
                <h2 className="text-m text-primary-main leading-8 font-big">
                  {data.title}
                </h2>
                <p className="text-s leading-6 text-secondary-main font-regular mt-[0.3rem]">
                  {data.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full mt-[6.8rem] block lg:flex items-center justify-center flex-row-reverse gap-[4.25rem]">
        <div className="relative md:flex justify-center">
          <motion.img
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            variants={imageVariantsRight}
            src={whocan2}
            className="relative z-10"
            alt=""
          />
          {/* rectangle */}
          <motion.div
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            variants={rectangleVariants}
            className="h-[37.5rem] absolute -top-10"
          >
            <img src={Rectanglewhocan} alt="" />
          </motion.div>
          {/*  */}
        </div>

        <div
          variants={textVariants}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="w-full mt-20 lg:mt-0 lg:w-[26%]"
        >
          {data2.map((data, index) => (
            <motion.div
              key={index}
              variants={textVariants}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef}
              className="flex items-center gap-3 mb-[4.25rem] md:px-8 lg:px-0"
            >
              <div>
                <img src={data.img} alt="" />
              </div>
              <div>
                <h2 className="text-m text-primary-main leading-8 font-big">
                  {data.title}
                </h2>
                <p className="text-s leading-6 text-secondary-main font-regular mt-[0.3rem]">
                  {data.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhoCanUse;
