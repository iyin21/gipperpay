import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets";

function Header() {
  return (
    <div className="w-full fixed left-0 top-0 z-30 py-5 flex justify-between px-[6.25rem] bg-[#FCFCFC] ">
      <div>
        <Link to="/waitlist">
          <img src={logo} alt="" />
        </Link>
      </div>

      <Link to="/waitlist/community">
        <button className="hidden lg:block px-6 rounded-md text-whiteText py-[0.5rem] bg-primary-main text-s leading-6 font-medium">
          Join Our Community
        </button>
      </Link>
    </div>
  );
}

export default Header;
