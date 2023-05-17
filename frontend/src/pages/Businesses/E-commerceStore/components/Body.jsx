import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { iphone14Ecommerce } from "../../../../assets";

const desc = [
  { text: "Sell multiple products" },
  { text: "Manage your store on mobile" },
  { text: "Multiple payment options, with an easy and secure checkout" },
];

function Body() {
  return (
    <div className=" w-full h-full ">
      <h1 className=" lg:w-[28.875rem] lg:h-[7.5rem] lg:my-[6.25rem] mt-[2.5rem]  mx-auto font-Jost font-big text-l leading-[2.5rem] items-center text-secondary-main text-center ">
        You can now sell your product from anywhere you're and reach the global
        market
      </h1>
      <div className="lg:w-[48.5625rem] lg:h-[27.5rem] mt-[1.25rem] lg:mt-[0] lg:flex lg:flex-row mx-auto  ">
        <img
          src={iphone14Ecommerce}
          alt=""
          className="lg:w-[25.4375rem] lg:h-[27.5rem] object-contain "
        />
        <div className=" mt-[3.375rem] lg:ml-[5rem] grid grid-rows-3   ">
          {desc.map((item) => (
            <div className=" w-[18.125rem]  h-[5.25rem] mt-[1.25rem] lg:mt-[0] border-[0.125rem] border-l-primary-main rounded-[0.625rem] shadow-md items-center px-[1.25rem] pt-[1.5625rem]  ">
              <h1 className=" w-[14.3125rem] h-[1.4375rem] font-Jost  font-regular text-s leading-[1.4375rem] text-secondary-main ">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
      {/**GET STARTED */}
      <div className="w-[20.9375rem] m-[1.875rem] mt-[2.5rem]  lg:w-[60.375rem] lg:h-[10.875rem] bg-primary-light lg:my-[5rem] lg:m-auto rounded-[3.125rem] lg:flex lg:flex-row items-center lg:pl-[4.5625rem] p-[1.875rem] lg:p-[0]">
        <svg
          width="180"
          height="180"
          viewBox="0 0 269 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0 hidden lg:flex "
        >
          <path
            d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
            stroke="#FEE6E1"
            stroke-width="42.3175"
          />
        </svg>
        <svg
          width="180"
          height="180"
          viewBox="0 0 269 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute hidden lg:flex z-0 right-0 lg:right-[15rem]"
        >
          <path
            d="M7 44.7582C53.5493 29.947 121.681 1.17112 106.446 44.7582C91.2119 88.3452 37.8337 145.062 34.0832 164.94C29.8515 187.368 44.6626 209.796 163.575 187.368C258.705 169.425 253.711 129.675 239.323 112.043"
            stroke="#FEE6E1"
            stroke-width="42.3175"
          />
        </svg>
        <div className=" relative lg:flex lg:flex-row mx-auto  ">
          <div>
            <h1 className="font-Jost font-big text-m leading-[2.0625rem] items-center text-secondary-main ">
              Ready to start selling?
            </h1>
            <h1 className=" w-[17.25rem] font-Jost font-regular text-s leading-[1.4375rem] mt-[0.3125rem] items-center text-secondary-main ">
              Create a free account and start accepting payment, selling your
              products online
            </h1>
          </div>
          <button className="flex flex-row bg-primary-main  rounded-[0.3125rem] items-center justify-center lg:ml-[1.25rem] mt-[0.625rem] lg:mt-[1.875rem] px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem]  text-white-60 ">
            <h1 className="ml-[0.625rem] ">Get started</h1>
            <BiRightArrowAlt />
          </button>
        </div>
      </div>
      {/**GET STARTED */}
    </div>
  );
}

export default Body;
