import React from "react";

//icons
import { mail } from "../../../icons";

function SignUp() {
  return (
    <div className="w-[351px] h-[402px] my-[40px] mx-[20px] px-[42px] py-[65px] lg:w-[1030px] lg:h-[222px] bg-primary-light lg:my-[80px] lg:m-auto rounded-[50px] lg:flex lg:flex-row items-center lg:pl-[73px]  ">
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
        className="absolute z-0 left-[658px] "
      >
        <path
          d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
          stroke="#FEE6E1"
          stroke-width="42.3175"
        />
      </svg>
      <div className="relative ">
        <h1 className="lg:w-[346px] lg:h-[59px] font-Jost not-italic font-big  text-l leading-[40px] text-secondary-main  ">
          Sign up for Free <br />
          Boost your Crypto Journey
        </h1>
      </div>

      <div className="  lg:flex lg:flex-row items-center relative    ">
        <div className=" lg:ml-[95px] lg:w-[300px] lg:h-[50px] my-[10px] rounded-[100px] bg-white-60 flex flex-row items-center justify-center py-[10px]  ">
          <img src={mail} alt="" className="w-[20px] h-[20px] " />
          <input
            type="email"
            placeholder="gipperpay@email.com"
            className=" font-Jost not-italic font-regular text-s leading-[23px] text-white-30 ml-[10px] "
          />
        </div>
        <div className="w-[143px] h-[50px] bg-primary-main rounded-[100px] pl-[45px] pt-[13.5px] ">
          <h1 className="w-[53px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-white-60 text-center ">
            Sign up
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
