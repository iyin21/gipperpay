import React from "react";

//components
import Products from "../nav/navComponents/Products";
import Businesses from "../nav/navComponents/Businesses";
import Company from "../nav/navComponents/Company";

import { RiMenu5Line } from "react-icons/ri";

//assets
import { gipperpaylogo, gipperpaytext } from "../../assets/index";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="w-screen lg:h-[60px] bg-#FCFCFC flex flex-row  items-center lg:justify-around justify-between  my-[20px] ">
      <div className=" flex flex-row ml-[20px] mr-[30px] items-center ">
        <img
          src={gipperpaylogo}
          alt="gipperpaylogo"
          className=" mr-[10px] w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] "
        />
        <img
          src={gipperpaytext}
          alt="gipperpaytext"
          className=" h-[20px] lg:h-[30px]  "
        />
      </div>
      <div className=" hidden lg:flex flex-row ">
        <Products />
        <Businesses />
        <Company />
      </div>
      <div className=" hidden lg:flex flex-row items-start  ">
        <div className=" pl-[25px] pr-[25px] py-[8px] items-center rounded-[5px] border-[1px] border-primary-main mr-[10px]">
          <h1 className=" font-Jost not-italic font-regular text-s text-center items-center text-primary-main leading-[23px]  ">
            Sign in
          </h1>
        </div>
        <Link to="/dashboard">
          <div className=" pl-[25px] pr-[25px] pt-[8.5px] pb-[8.5px] items-center bg-primary-main rounded-[5px]">
            <h1 className=" font-Jost not-italic font-regular text-s text-white-60 text-center items-center leading-[23px] ">
              Create an account
            </h1>
          </div>
        </Link>
      </div>
      <div className=" lg:hidden mr-[20px] ">
        <RiMenu5Line className="text-secondary-main " size="30px" />
      </div>
    </div>
  );
}

export default Nav;
