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
    <div className="w-screen lg:h-[3.75rem] bg-#FCFCFC flex flex-row  items-center lg:justify-around justify-between  my-[1.25rem] ">
      <div className=" flex flex-row ml-[1.25rem] mr-[1.875rem] items-center ">
        <img
          src={gipperpaylogo}
          alt="gipperpaylogo"
          className=" mr-[0.625rem] w-[1.25rem] h-[1.25rem] lg:w-[2.5rem] lg:h-[2.5rem] "
        />
        <img
          src={gipperpaytext}
          alt="gipperpaytext"
          className=" h-[1.25rem] lg:h-[1.875rem]  "
        />
      </div>
      <div className=" hidden lg:flex flex-row ">
        <Products />
        <Businesses />
        <Company />
      </div>
      <div className=" hidden lg:flex flex-row items-start  ">
        <div className="  px-[1.5625rem] py-[0.5rem] items-center rounded-[0.3125rem] border-[0.0625rem] border-primary-main mr-[0.625rem]">
          <h1 className=" font-Jost not-italic font-regular text-s text-center items-center text-primary-main leading-[1.4375rem]  ">
            Sign in
          </h1>
        </div>
        <Link to="/dashboard">
          <div className=" px-[1.5625rem] py-[0.53125rem] items-center bg-primary-main rounded-[0.3125rem]">
            <h1 className=" font-Jost not-italic font-regular text-s text-white-60 text-center items-center leading-[1.4375rem] ">
              Create an account
            </h1>
          </div>
        </Link>
      </div>
      <div className=" lg:hidden mr-[1.25rem] ">
        <RiMenu5Line className="text-secondary-main " size="1.875rem" />
      </div>
    </div>
  );
}

export default Nav;
