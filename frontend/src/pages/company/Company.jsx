import React from "react";
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
import { logo } from "../../assets";
import { pricingImage1, pricingImage2 } from "../../assets";
const services = [
  {
    label: "A Team of qualified People",
    icon: logo,
  },
  {
    label: "Seamless crypto transactions",
    icon: logo,
  },
  {
    label: "A New Disruptive Native Token",
    icon: logo,
  },
  {
    label: "Global Access to our services",
    icon: logo,
  },
];
const iconsList = [
  {
    icon: <FaFacebookF color="#ffffff"/>,
    id: "1",
   
  },
  {
    icon: <FaTwitter color="#ffffff"/>,
    id: "2",
   
  },
  {
    icon: <FaInstagram color="#ffffff"/>,
    id: "3",
    
  },
  {
    icon: <FaLinkedinIn color="#ffffff"/>,
    id: "4",
    
  },
];
const offers = [
  {
    label:"Gipper pay offers crypto solutions to boost the african economy",
    desc:"Consequat et quis posuere consectetur nulla bibendum eu. Ac etiam ullamcorper amet non tellus semper. Leo tempus elementum viverra praesent.",
    image: Offer
  },
  {
    label:"Gipper pay offers crypto solutions to boost the african economy",
    desc:"Consequat et quis posuere consectetur nulla bibendum eu. Ac etiam ullamcorper amet non tellus semper. Leo tempus elementum viverra praesent.",
    image: Offer
  },
  {
    label:"Gipper pay offers crypto solutions to boost the african economy",
    desc:"Consequat et quis posuere consectetur nulla bibendum eu. Ac etiam ullamcorper amet non tellus semper. Leo tempus elementum viverra praesent.",
    image: Offer
  }
]
const Company = () => {
  return (
    <div>
      <div className="w-full h-full relative">
        <div className="w-full h-full relative z-10">
          <img src={pricingImage1} alt="" className="w-full h-full" />
        </div>
        <p className=" bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto text-center w-full lg:w-[35%] font-big text-l leading-10 text-white-60 px-[1px]">
          Building Lasting solutions for crypto experts, enthusiasts, Newbies
          and Businesses in{" "}
          <span className="bg-Rectangle text-center rounded-md">Africa</span>{" "}
          and <span className="bg-Rectangle rounded-md">Globally</span>
        </p>
        <div className="w-full h-full absolute top-[0] left-0 z-0 ">
          <img
            src={pricingImage2}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      {/* <div className="bg-hero h-[350px] flex justify-center m-auto items-center bg-no-repeat bg-cover bg-center bg-fixed w-full">
        <p className=" text-center w-full lg:w-[35%] font-big text-l leading-10 text-white-60 px-[1px]">
          Building Lasting solutions for crypto experts, enthusiasts, Newbies
          and Businesses in{" "}
          <span className="bg-Rectangle text-center rounded-md">
            Africa
          </span>{" "}
          and <span className="bg-Rectangle rounded-md">Globally</span>
        </p>
      </div> */}
      <div className="lg:max-w-[1200px] m-auto">
        <div className="flex flex-col lg:flex-row gap-3 h-auto items-center my-10 lg:px-8">
          <div className="w-1/2">
            <h2 className="text-secondary-30 text-sm font-regular">
              Our vision
            </h2>

            <p className="text-l w-full lg:w-[70%] leading-10 text-secondary-main font-big my-5">
              Building Lasting solutions in the crypto space
            </p>
            <p className="text-secondary-30 w-full lg:w-[65%] text-s font-regular leading-6">
              Posuere pellentesque in dictum faucibus elementum aliquam eget
              dignissim. Facilisi nibh molestie nunc tincidunt velit.
              Ullamcorper mi duis eget cras nibh neque tortor sed morbi.
            </p>
          </div>
          <div className="w-1/2 flex h-auto items-center relative">
            <img src={FrameOne} alt="one" />
            <div>
              <img src={FrameTwo} alt="one" />
              <img src={FrameThree} alt="one" />
            </div>
            <img src={Frame} alt="frame" className="absolute left-[200px]" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 h-auto items-center px-8">
          <div className="w-1/2">
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
          </div>
          <div className=" flex flex-col lg:grid lg:grid-cols-2">
            {services.map((item) => (
              <div
                className="border-[1px] border-secondary-10 lg:w-[90%] py-3 lg:py-12 my-3 px-8 rounded-md text-center"
                key={item.label}
              >
                <div className=" bg-primary-light w-[50px] h-[50px] m-auto rounded-full flex items-center justify-center">
                  <img src={item.logo} alt={item.label} />
                </div>
                <p className="text-sm leading-6 text-secondary-main font-medium mt-3">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-full w-full my-8">
        <img src={Contact} alt="contact" className="m-auto" />
        <div className="text-white-10 flex justify-between  w-full h-auto items-center md:w-[75%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="lg:w-[65%]">Contact Us</p>
          <div className="lg:w-[35%]">
            <p>Address</p>
            <p>
              Posuere pellentesque in dictum faucibus elementum aliquam eget
              dignissim. Facilisi nibh molestie nunc tincidunt velit.
              Ullamcorper mi duis eget cras nibh neque tortor sed morbi.
            </p>
            <p>+234 983475703</p>
            <div className="flex justify-between" >
            {iconsList.map(icon =><div className="w-[50px] h-[50px] rounded-full flex items-center justify-center border border-white-60" key={icon.id}>{icon.icon}</div>)}
            </div>
          
          </div>
        </div>
      </div>
      <div className="shadow-md lg:px-8 my-8 px-4 py-3">
        <h2>Blog</h2>
        <p>Whats hapenining in Gipperpay?</p>
        <div className="flex  flex-col gap-10 lg:flex-row">
          {offers.map((offer, index)=><div key={index}>
            <img src ={offer.image} alt={offer.label} className="h-[300px]  rounded-md w-[400px]"/>
            <p className="my-4">{offer.label}</p>
            <p>{offer.desc}</p>
            <p className="mt-4">Learn more</p>
          </div>)}
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Company;
