import React from 'react'
import { notification, profileSm } from "../../assets";

function Header() {
  return (
    <header className="h-20 w-[80%] z-40 bg-whiteText flex fixed top-0 right-0 items-center justify-between py-5 px-10">
    <button className="text-whiteText rounded text-s h-10 bg-secondary-main py-2.5 px-6">
      Send & Recieve
    </button>
    <div className="w-52 h-10 flex justify-between items-center">
      <img src={notification} className="h-5 w-5" alt="" />
      <div className="flex justify-between items-center w-4/5">
        <img src={profileSm} alt="" className="h-10 w-10" />
        <div className="flex flex-col justify-center item-center">
          <p className="text-s p-0 font-regular">Mary Stansfield</p>
          <span className="text-xxs p-0 -mt-2 font-regular">
            gipperpay@gmail.com
          </span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header