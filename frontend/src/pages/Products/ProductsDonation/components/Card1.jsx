import React from "react";
import { donation } from "../../../../assets";
import { BsLink } from "react-icons/bs";

function Card1() {
  return (
    <div className=" w-[21.875rem] h-[16.5rem] relative z-10  ">
      <svg
        width="350"
        height="175"
        viewBox="0 0 350 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0"
      >
        <path
          d="M350 175C350 152.019 345.474 129.262 336.679 108.03C327.884 86.7984 314.994 67.5066 298.744 51.2563C282.493 35.0061 263.202 22.1157 241.97 13.3211C220.738 4.52651 197.981 -1.00455e-06 175 0C152.019 1.00455e-06 129.262 4.52651 108.03 13.3211C86.7984 22.1157 67.5066 35.0061 51.2563 51.2563C35.0061 67.5066 22.1156 86.7984 13.3211 108.03C4.5265 129.262 -2.00909e-06 152.019 0 175L350 175Z"
          fill="#FED8D0"
        />
      </svg>
      <svg
        width="269"
        height="218"
        viewBox="0 0 269 218"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0 left-[5rem] "
      >
        <path
          d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
          stroke="#FEE6E1"
          stroke-width="42.3175"
        />
      </svg>
      <div className=" w-[21.875rem] h-[13.375rem]  rounded-[1.25rem] top-[3.125rem] absolute px-[1.75rem] py-[2.3125rem] bg-gradient-to-r from-[#0B002A] to-[#FB5D3A] ">
        <div className=" flex flex-row ">
          <img
            src={donation}
            alt=""
            className="mr-[1.25rem] w-[3.125rem] h-[3.125rem] "
          />
          <div className=" text-white-70 items-center ">
            <h1 className=" font-Jost font-medium text-s leading-[1.4375rem] ">
              Donation Link
            </h1>
            <h1 className=" font-Jost font-regular text-xs leading-[1.1875rem] ">
              Get and share Donation link to receice donation from friends
            </h1>
          </div>
        </div>
        <div className=" w-[9.25rem] h-[2.8125rem] bg-primary-main rounded-[0.3125rem] mt-[2.5rem] px-[1.25rem] py-[0.625rem] flex flex-row text-white-70 items-center ">
          <BsLink className=" mr-[0.625rem] " />
          <h1 className="font-Jost font-regular text-s leading-[1.4375rem] ">
            Create Link
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card1;
