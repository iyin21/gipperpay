import React from "react";
import { notification, profileSm } from "../../assets";
import { FiMenu } from "react-icons/fi";
import { overviewIcon } from "../../icons";
function Header() {
  return (
    <header className="h-20 px-5 w-full z-40 bg-whiteText flex fixed top-0 right-0 items-center justify-between py-5 lg:px-10 lg:w-[80%]">
      <button className="hidden text-whiteText rounded text-s h-10 bg-secondary-main py-2.5 px-6 lg:block">
        Send & Recieve
      </button>
      <div className="flex items-center gap-1 lg:hidden">
        <FiMenu
          size="2rem"
          className=" mr-5 lg:hidden"
        />
        <img src={overviewIcon} alt="" />
        <p className="text-xs">Overview</p>
      </div>
      <div className="w-44 h-10 flex justify-end gap-2 px-2 items-center lg:w-52 lg:justify-between lg:px-0 lg:gap-0">
        <img src={notification} className="h-5 w-5" alt="" />
        <div className="flex justify-between items-center lg:w-4/5">
          <img src={profileSm} alt="" className="h-10 w-10" />
          <div className="hidden flex-col justify-center item-center lg:flex">
            <p className="text-s p-0 font-regular">Mary Stansfield</p>
            <span className="text-xxs p-0 -mt-2 font-regular">
              gipperpay@gmail.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
