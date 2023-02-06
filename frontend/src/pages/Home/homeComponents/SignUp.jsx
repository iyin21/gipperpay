import React from "react";

//icons
import { mail } from "../../../icons";

function SignUp() {
  return (
    <div className="w-[21.9375rem] h-[25.125rem] my-[2.5rem] mx-[1.25rem] px-[2.625rem] py-[4.0625rem] lg:w-[64.375rem] lg:h-[13.875rem] bg-primary-light lg:my-[5rem] lg:m-auto rounded-[3.125rem] lg:flex lg:flex-row items-center lg:pl-[4.5625rem]  ">
      <svg
        width="269"
        height="218"
        viewBox="0 0 269 218"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0 "
      >
        <path
          d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
          stroke="#FEE6E1"
          stroke-width="42.3175"
        />
      </svg>
      <svg
        width="269"
        height="218"
        viewBox="0 0 269 218"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0 right-0 lg:right-[15rem]"
      >
        <path
          d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
          stroke="#FEE6E1"
          stroke-width="42.3175"
        />
      </svg>
      <div className="relative ">
        <h1 className="lg:w-[21.625rem] lg:h-[3.6875rem] font-Jost not-italic font-big  text-l leading-[2.5rem] text-secondary-main  ">
          Sign up for Free <br />
          Boost your Crypto Journey
        </h1>
      </div>

      <div className="  lg:flex lg:flex-row items-center relative    ">
        <div className=" lg:ml-[5.9375rem] lg:w-[18.75rem] lg:h-[3.125rem] my-[0.625rem] rounded-[6.25rem] bg-white-60 flex flex-row items-center justify-center py-[0.625rem]  ">
          <img src={mail} alt="" className="w-[1.25rem] h-[1.25rem] " />
          <input
            type="email"
            placeholder="gipperpay@email.com"
            className=" font-Jost not-italic font-regular text-s leading-[23px] text-white-30 ml-[0.625rem] "
          />
        </div>
        <div className="w-[8.9375rem] h-[3.125rem] bg-primary-main rounded-[6.25rem] pl-[2.8125rem] pt-[0.84375rem] ">
          <h1 className="w-[3.3125rem] h-[1.4375rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-white-60 text-center ">
            Sign up
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
