import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Card = ({ item }) => {
  return (
    <div className="lg:h-full  relative">
      <div
        className={`relative w-[23.5rem]  h-[23.5rem] ${
          item.id === 1 ? "bg-primary-light" : "bg-white-70"
        } rounded-[1.8125rem] mt-[2.3125rem]`}
      >
        <svg
          width="269"
          height="218"
          viewBox="0 0 269 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute z-0 top-[7.875rem] left-[5.625rem] ${
            item.id === 1 ? "text-[#FEE6E1]" : "text-[#F0EFEF]"
          } `}
        >
          <path
            d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
            stroke={`${item.id === 1 ? "#FEE6E1" : "#F0EFEF"}`}
            stroke-width="42.3175"
          />
        </svg>
        <div className=" w-[16.375rem] pt-[15rem] lg:pt-[13.3125rem] m-auto relative z-10 ">
          <h1 className=" font-Jost font-big text-m leading-[2.0625rem] text-primary-main ">
            {item.text1}
          </h1>
          <h1 className=" font-Jost font-regular text-s leading-[1.4375rem] text-secondary-main mt-[0.3125rem] ">
            {item.text2}
          </h1>
          {item.id === 1 ? (
            <>
              <buton className="flex flex-row  rounded-[0.3125rem] items-center mt-[1.25rem]  text-primary-main ">
                <h1 className="">Get started</h1>
                <BiRightArrowAlt />
              </buton>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        className={` lg:w-[14.4375rem] lg:h-[14.4375rem] 
           ${
             item.id === 1 ? "border-primary-10" : "bg-secondary-10"
           } border-[1rem] rounded-[8.25rem] absolute top-0 left-[4.0625rem] `}
      >
        <img src={item.image} alt="" className=" lg:w-full lg:h-full " />
      </div>
    </div>
  );
};

export default Card;
