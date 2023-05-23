import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Contact from "../../assets/companyContact.png";
import Offer from "../../assets/companyOffer.png";
import FrameOne from "../../assets/companyframe1.png";
import FrameTwo from "../../assets/companyframe2.png";
import FrameThree from "../../assets/companyframe3.png";
import Frame from "../../assets/companyBackgroundFrame.png";
import global from "../../assets/global.png";
import {
  buyActive,
  payrollActive,
  gustCoin,
  pricingImage1,
  pricingImage2,
} from "../../assets";
import { RxArrowTopRight } from "react-icons/rx";
import { rectangleVariants } from "../Home/homeComponents/WhatWeOffer";
const services = [
  {
    label: "A Team of qualified People",
    icon: payrollActive,
  },
  {
    label: "Seamless crypto transactions",
    icon: buyActive,
  },
  {
    label: "A New Disruptive Native Token",
    icon: gustCoin,
  },
  {
    label: "Global Access to our services",
    icon: global,
  },
];
const iconsList = [
  {
    icon: <FaFacebookF color="#ffffff" />,
    id: "1",
  },
  {
    icon: <FaTwitter color="#ffffff" />,
    id: "2",
  },
  {
    icon: <FaInstagram color="#ffffff" />,
    id: "3",
  },
  {
    icon: <FaLinkedinIn color="#ffffff" />,
    id: "4",
  },
];
const offers = [
  {
    label: "Gipper pay offers crypto solutions to boost the african economy",
    desc: "Consequat et quis posuere consectetur nulla bibendum eu. Ac etiam ullamcorper amet non tellus semper. Leo tempus elementum viverra praesent.",
    image: Offer,
  },
  {
    label: "Gipper pay offers crypto solutions to boost the african economy",
    desc: "Consequat et quis posuere consectetur nulla bibendum eu. Ac etiam ullamcorper amet non tellus semper. Leo tempus elementum viverra praesent.",
    image: Offer,
  },
  {
    label: "Gipper pay offers crypto solutions to boost the african economy",
    desc: "Consequat et quis posuere consectetur nulla bibendum eu. Ac etiam ullamcorper amet non tellus semper. Leo tempus elementum viverra praesent.",
    image: Offer,
  },
];

const imageVariants = {
  hide: {
    opacity: 0,
    x: "40%",
  },
  show: {
    opacity: 1,
    x: "0%",
    transition: { delay: 1.5, duration: 2, type: "spring", stiffness: 120 },
  },
};
const textVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
  },
};
const Company = () => {
  const scrollRef = useRef(null);
  const rectangleRef = useRef(null);
  const dataRef = useRef(null);
  return (
    <div>
      <div className="w-full h-full relative">
        <div className="w-full h-full relative z-[-50]">
          <img src={pricingImage1} alt="" className="w-full h-[300px] lg:h-full" />
        </div>
        <p className="z-100 bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto text-center w-full lg:w-[35%] font-big text-sm lg:text-l leading-10 text-white-60 px-[1px]">
          Building Lasting solutions for crypto experts, enthusiasts, Newbies
          and Businesses in{" "}
          <span className="bg-Rectangle text-center rounded-md">Africa</span>{" "}
          and <span className="bg-Rectangle rounded-md">Globally</span>
        </p>
        <div className="w-full h-full absolute top-[0] left-0 z-[-100] ">
          <motion.img
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            whileHover={{ rotate: -5, scale: 0.8 }}
            ref={scrollRef}
            variants={imageVariants}
            src={pricingImage2}
            alt=""
            className="w-full h-[300px] lg:h-full object-cover "
          />
        </div>
      </div>
      <div className=" lg:max-w-[1200px] m-auto">
        <div className="flex flex-col lg:flex-row gap-2 h-auto items-center my-10 px-8">
          <motion.div
            variants={textVariants}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-secondary-30 text-sm font-regular">
              Our vision
            </h2>

            <p className="text-l w-full lg:w-[70%] leading-10 text-secondary-main font-big my-5">
              Building Lasting solutions in the crypto space
            </p>
            <p className="hidden lg:block text-secondary-30 w-full lg:w-[65%] text-s font-regular leading-6">
              Posuere pellentesque in dictum faucibus elementum aliquam eget
              dignissim. Facilisi nibh molestie nunc tincidunt velit.
              Ullamcorper mi duis eget cras nibh neque tortor sed morbi.
            </p>
          </motion.div>
          <motion.div
            variants={rectangleVariants}
            viewport={{ once: true }}
            initial={{ opacity: 0, x: "-100%" }}
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
            ref={rectangleRef}
            className="w-full lg:w-1/2 flex h-auto gap-2 items-center relative"
          >
            <div>
              <img src={FrameOne} alt="one" />
            </div>

            <div>
              <img src={FrameTwo} alt="one" />
              <img src={FrameThree} alt="one" />
            </div>
            <img
              src={Frame}
              alt="frame"
              className="absolute z-[-50]  lg:left-[200px]"
            />
          </motion.div>
          <p className="block lg:hidden text-secondary-30 w-full lg:w-[65%] text-s font-regular leading-6">
              Posuere pellentesque in dictum faucibus elementum aliquam eget
              dignissim. Facilisi nibh molestie nunc tincidunt velit.
              Ullamcorper mi duis eget cras nibh neque tortor sed morbi.
            </p>
        </div>
        <div className="flex flex-col w-full lg:flex-row-reverse justify-between h-auto items-center my-10 px-8">
          <motion.div
            variants={textVariants}
            animate="show"
            initial="hide"
            className="w-full lg:w-[30%] "
          >
            <h2 className="text-secondary-30 text-sm font-regular">
              Our Mission
            </h2>

            <p className="text-l w-full  leading-10 text-secondary-main font-big my-5">
              Building Lasting solutions in the crypto space
            </p>
            <p className=" hidden lg:block text-secondary-30 w-full  text-s font-regular leading-6">
              Posuere pellentesque in dictum faucibus elementum aliquam eget
              dignissim. Facilisi nibh molestie nunc tincidunt velit.
              Ullamcorper mi duis eget cras nibh neque tortor sed morbi.
            </p>
          </motion.div>
          <motion.div
            variants={rectangleVariants}
            viewport={{ once: true }}
            initial={{ opacity: 0, x: "-100%" }}
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
            ref={rectangleRef}
            className="w-full lg:w-[70%] flex h-auto items-center relative gap-4 my-12 lg:my-0"
          >
            <img
              src={Frame}
              alt="frame"
              className="absolute lg:left-[-25px] lg:top-[140px] z-[-50] "
            />
            <img src={FrameOne} alt="one" className="w-[150px] lg:w-auto" />
            <div>
              <img src={FrameTwo} alt="one" />
              <img src={FrameThree} alt="one" />
            </div>
          </motion.div>
          <p className="block lg:hidden text-secondary-30 w-full  text-s font-regular leading-6">
              Posuere pellentesque in dictum faucibus elementum aliquam eget
              dignissim. Facilisi nibh molestie nunc tincidunt velit.
              Ullamcorper mi duis eget cras nibh neque tortor sed morbi.
            </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 h-auto items-center px-8">
          <motion.div
            variants={textVariants}
            animate="show"
            initial="hide"
            className="w-full lg:w-1/2"
          >
            <h2 className="text-secondary-30 text-sm font-regular">
              What we offer
            </h2>
            <p className="text-l leading-10 text-secondary-main font-big my-5  w-full lg:w-[65%]">
              Gipperfi offers various features to help build your cryto journey
            </p>
            <p className="text-secondary-30 text-s font-regular w-full lg:w-[65%] leading-6">
              Posuere pellentesque in dictum faucibus elementum aliquam eget
              dignissim. Facilisi nibh molestie nunc tincidunt velit.
              Ullamcorper mi duis eget cras nibh neque tortor sed morbi.
            </p>
          </motion.div>
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
            ref={dataRef}
            className=" flex flex-col lg:grid lg:grid-cols-2"
          >
            {services.map((item) => (
              <div
                className="border-[1px] border-secondary-10 m-auto  w-[60%] lg:w-[90%] py-8 lg:py-12 my-3 px-8 rounded-md text-center"
                key={item.label}
              >
                <div className=" bg-primary-light w-[50px] h-[50px] m-auto rounded-full flex items-center justify-center">
                  <img src={item.icon} alt={item.label} />
                </div>
                <p className="text-sm leading-6 text-secondary-main font-medium mt-3">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="relative  lg:h-full lg:py-0 py-4 my-8">
          <img src={Contact} alt="contact" className="m-auto h-[400px]" />
          <div className="text-white-60 flex-row px-8 lg:px-0 lg:flex justify-between  w-full h-auto items-center md:w-[75%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="lg:w-[65%]">Contact Us</p>
            <div className="w-full text-white-60 lg:w-[35%] text-s font-regular">
              <p className="mt-4">Address</p>
              <p className="my-4">
                Posuere pellentesque in dictum faucibus elementum aliquam eget
                dignissim. Facilisi nibh molestie nunc tincidunt velit.
                Ullamcorper mi duis eget cras nibh neque tortor sed morbi.
              </p>
              <p className="mt-4">+234 983475703</p>
              <div className="flex justify-between mt-4">
                {iconsList.map((icon) => (
                  <div
                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center border border-white-60"
                    key={icon.id}
                  >
                    {icon.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md lg:px-8 mt-8 mb-24 px-8 py-3">
          <p className="text-white-30 text-sm font-regular text-center">Blog</p>
          <p className="m-auto text-center font-big text-l leading-10 lg:w-[30%] my-4 text-secondary-main">
            Whats hapenining in Gipperpay?
          </p>
          <motion.div
            variants={rectangleVariants}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={dataRef}
            className="flex  flex-col gap-10 lg:flex-row"
          >
            {offers.map((offer, index) => (
              <div key={index}>
                <img
                  src={offer.image}
                  alt={offer.label}
                  className="h-[250px] lg:h-[300px] m-auto  rounded-md w-[400px]"
                />
                <p className="my-4 text-secondary-main font-medium text-m">
                  {offer.label}
                </p>
                <p className="text-s text-white-30 font-regular">
                  {offer.desc}
                </p>
                <div className=" cursor-pointer flex mt-4 text-Rectangle  h-auto items-center gap-2">
                  <p>Learn more</p>
                  <RxArrowTopRight />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Company;
