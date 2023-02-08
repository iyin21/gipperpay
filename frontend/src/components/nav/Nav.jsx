import React, { useState } from "react";

//components
import Products from "../nav/navComponents/Products";
import Businesses from "../nav/navComponents/Businesses";
import Company from "../nav/navComponents/Company";
import MobileView from "./navComponents/MobileView";
import { Link } from "react-router-dom";

//assets
import { RiMenu5Line } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { logo } from "../../assets/index";

function Nav() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const openMenu = () => setisMenuOpen(!isMenuOpen);

  return (
    <div className="w-screen lg:h-[3.75rem] bg-#FCFCFC lg:flex lg:flex-row  items-center lg:justify-around  my-[1.25rem] ">
      <div className=" flex flex-row ml-[1.25rem] mr-[1.875rem] items-center justify-between ">
        <img
          src={logo}
          alt="gipperpaylogo"
          className=" w-[6.375rem] h-[1.25rem] lg:w-[12.75rem] lg:h-[2.5rem] "
        />
        <div className=" lg:hidden " onClick={openMenu}>
          {!isMenuOpen ? (
            <RiMenu5Line className="text-secondary-main " size="1.575rem" />
          ) : (
            <MdOutlineCancel className="text-white-30 " size="1.575rem" />
          )}
        </div>
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

      <div
        className={!isMenuOpen ? "hidden" : "w-full  lg:hidden  p-[1.25rem] "}
      >
        <MobileView />
      </div>
    </div>
  );
}

export default Nav;
