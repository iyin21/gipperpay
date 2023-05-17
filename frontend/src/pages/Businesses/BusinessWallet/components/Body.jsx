import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { businessWalletimg1, businessWalletimg2 } from "../../../../assets";
import { questionmark } from "../../../../icons";

const desc = [
  {
    text: "Send and receive up to $2billion using your business wallet, Don't be restricted.",
  },
  {
    text: "Easily make cross-border payment to anyone and keep your business running smoothly",
  },
  {
    text: "Easily scale your business beyond geographical borders with easy payment infrastructure.",
  },
];
const desc2 = [
  {
    head: "Safety and security secured",
    text: "Here at Gipperpay, we take security extremely serious, for every payment made on our platform is 100% secure, backed by banking-level security",
  },
  {
    head: "PA DSS & PCI DSS Compliant",
    text: "This certification is proof that Gipperpay as a payment gateway processor, has fulfilled the highest level of Security Audit and authorizations.",
  },
  {
    head: "HIGHLY COMPLIANT Wallet",
    text: "Our wallet is built to be secure and manage all your business funds just the way you like it.",
  },
];
function Body() {
  return (
    <div className="w-full h-full lg:my-[6.25rem] my-[3.125rem] ">
      <div className="lg:w-[48.5625rem]  lg:h-[27.5rem] mt-[1.25rem] lg:mt-[0] lg:flex lg:flex-row mx-auto  ">
        <img
          src={businessWalletimg1}
          alt=""
          className="lg:w-[25.4375rem] lg:mt-[1.25rem] lg:h-[27.5rem] object-contain "
        />
        <div className=" mt-[3.375rem] lg:ml-[5rem] lg:grid lg:grid-rows-3   ">
          {desc.map((item) => (
            <div className=" w-[18.125rem] m-auto lg:m-[0]  h-[5.25rem] mt-[1.25rem] lg:mt-[0] border-[0.125rem] border-l-primary-main rounded-[0.625rem] shadow-md items-center px-[1.25rem] py-[0.3125rem]  ">
              <h1 className=" w-[15.75rem] h-[4.3125rem] font-Jost  font-regular text-s leading-[1.4375rem] text-secondary-main ">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className=" lg:w-[51.25rem] lg:h-[25.125rem] m-auto w-full h-full my-[1.25rem] ">
        <img
          src={businessWalletimg2}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className=" lg:grid lg:grid-cols-3 lg:w-[59.375rem] lg:h-[16.5rem]  my-[3.125rem] lg:m-auto  ">
        {desc2.map((item) => (
          <div className="w-[18.125rem] h-[16.5rem] rounded-[0.625rem] m-auto  mt-[0.625rem] lg:mt-[0] border-[0.125rem] border-t-primary-main shadow-md p-[1.25rem] ">
            <h1 className=" w-[16rem] h-[4.125rem] font-Jost font-big text-m leading-[2.0625rem] items-center text-primary-main uppercase ">
              {item.head}
            </h1>
            <h2 className="w-[14.5rem] h-[7.1875rem] font-Jost font-regular text-s leading-[1.4375rem] items-center text-secondary-main mt-[1.25rem] ">
              {item.text}
            </h2>
          </div>
        ))}
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
        <div className=" relative lg:flex lg:flex-row   ">
          <div>
            <h1 className="font-Jost font-big text-m leading-[2.0625rem] items-center text-secondary-main ">
              Ready to start selling?
            </h1>
            <h1 className=" lg:w-[24.375rem] font-Jost font-regular text-s leading-[1.4375rem] mt-[0.3125rem] items-center text-secondary-main ">
              Create an account, start receiving crypto using your business
              wallet and grow your finance with ease
            </h1>
          </div>
          <div className="  mt-[1.25rem] flex flex-row ">
            <button className="flex flex-row bg-primary-main rounded-[0.3125rem] items-center justify-center px-[1.25rem] py-[0.625rem] w-[9rem] h-[2.8125rem]  text-white-60 ">
              <h1 className="lg:ml-[0.625rem] ">Get started</h1>
              <BiRightArrowAlt />
            </button>
            <div className=" lg:ml-[1.25rem] ml-[0.3125rem] rounded-[0.3125rem] flex flex-row justify-center mt-[0.625rem] ">
              <img
                src={questionmark}
                alt=""
                className="w-[1.25rem] h-[1.25rem] "
              />
              <h1 className="  font-Jost not-italic text-s leading-[1.4375rem] text-center text-Rectangle lg:ml-[0.75rem] ml-[0.3125rem]  ">
                Speak to sales
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/**GET STARTED */}
    </div>
  );
}

export default Body;
