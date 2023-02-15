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
    </div>
  );
}

export default Header;
