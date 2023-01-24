import React from "react";

//assets
import gipperpaylogo from "../assets/gipperpaylogo.png";
import gipperpaytext from "../assets/gipperpaytext.png";
import { downIcon } from "../icons";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-screen h-[90px] bg-#FCFCFC flex flex-row  items-center justify-center">
      <div className="w-[204.47px] h-[40px] flex flex-row items-center mr-[30px] ">
        <img
          src={gipperpaylogo}
          alt="gipperpaylogo"
          className="w-[43.61px] h-[40px] mr-[11.96px]"
        />
        <img
          src={gipperpaytext}
          alt="gipperpaytext"
          className="w-[148.89px] h-[30.47px]"
        />
      </div>
      <div className="w-[742px] h-[50px] flex flex-row  ">
        <div className="w-[123px] h-[50px]   rounded-[100px] pl-[20px] pr-[10px] pt-[10px] pb-[10px] mr-[5px] flex flex-row items-center">
          <h1 className="w-[58px] h-[23px] text-secondary-main  font-Jost font-regular font text-s leading-[23.12px] text-center mr-[5px] ">
            Products
          </h1>
          <img src={downIcon} alt="downicon" className="w-[20px] h-[20px]" />
        </div>

        <div className="w-[135px] h-[50px]  rounded-[100px] pl-[20px] pr-[10px] pt-[10px] pb-[10px] mr-[5px] flex flex-row items-center">
          <h1 className="w-[70px] h-[23px]  text-secondary-main  mr-[5px] font-Jost font-regular font text-s leading-[23.12px] text-center not-italic ">
            Use Cases
          </h1>
          <img src={downIcon} alt="downicon" className="w-[20px] h-[20px]" />
        </div>
        <div className="w-[78px]  h-[40px] pl-[15px] pr-[15px] pt-[8.5px] pb-[8.5px] mr-[5px] ">
          <h1 className="w-[48px] h-[23px] font-Jost not-italic font-regular text-s text-Rectangle">
            Pricing
          </h1>
        </div>
        <div className="w-[138px] h-[50px] rounded-[100px] pl-[20px] pr-[10px] pt-[13.5px] pb-[13.5px] mr-[5px] flex flex-row items-center">
          <h1 className="w-[70px] h-[23px]  text-secondary-main  mr-[10px] font-Jost font-regular font text-s leading-[23.12px] text-center not-italic ">
            Individuals
          </h1>
          <img src={downIcon} alt="downicon" className="w-[20px] h-[20px]" />
        </div>
        <div className="w-[138px] h-[50px] rounded-[100px] pl-[20px] pr-[10px] pt-[13.5px] pb-[13.5px] mr-[5px] flex flex-row items-center">
          <h1 className="w-[70px] h-[23px]  text-secondary-main  mr-[10px] font-Jost font-regular font text-s leading-[23.12px] text-center not-italic ">
            Businesses
          </h1>
          <img src={downIcon} alt="downicon" className="w-[20px] h-[20px]" />
        </div>
        <div className="w-[95px]  h-[40px] pl-[15px] pr-[10px] pt-[8.5px] pb-[8.5px] ">
          <h1 className="w-[65px] h-[23px] font-Jost not-italic font-regular text-s text-Rectangle">
            Company
          </h1>
        </div>
      </div>
      <div className="w-[239px] h-[40px] flex flex-row items-start  ">
        <div className="w-[98px] h-[40px] pl-[25px] pr-[25px] pt-[8.5px] pb-[8.5px] items-center rounded-[5px] border-[1px] border-primary-main mr-[10px]">
          <h1 className="w-[48px] h-[23px] font-Jost not-italic font-regular text-s text-center items-center text-primary-main leading-[23px]  ">
            Sign in
          </h1>
        </div>
        <Link to="/dashboard">
          <div className="w-[131px] h-[40px] pl-[25px] pr-[25px] pt-[8.5px] pb-[8.5px] items-center bg-primary-main rounded-[5px]">
            <h1 className="w-[81px] h-[23px] font-Jost not-italic font-regular text-s text-white-60 text-center items-center leading-[23px] ">
              Get Started
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
