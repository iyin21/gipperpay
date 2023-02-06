import React from "react";

import { apipic2, ellipse, iphone11 } from "../../../assets/index";
import { rightarrow } from "../../../icons";

function ForBusinesses() {
  return (
    <div className=" w-full mx-[1.0625rem] ">
      <h1 className=" lg:mt-[6.25rem]   lg:ml-[14.4375rem] font-Jost not-italic font-regular text-sm leading-[1.6875rem]  items-center text-secondary-30 ">
        For Businesses
      </h1>
      <div className="  lg:w-[60rem] lg:ml-[14.4375rem]  lg:mt-[3rem] lg:flex lg:flex-row justify-between ">
        <div className="  mt-[1.25rem] ">
          <div className="flex flex-row items-start ">
            <div className="w-[0.3125rem] h-[5.9375rem] rounded-[0.625rem] bg-primary-main mr-[1.25rem] "></div>
            <div className="lg:w-[31.5rem] lg:h-[10.75rem] flex flex-col items-start ">
              <div className="w-[7.5rem] h-[2.5rem] flex flex-row  ">
                <img src={apipic2} alt="" className="w-[2.5rem] h-[2.5rem] " />
                <h1 className="font-Jost font-big text-l leading-[40px] text-secondary-main ml-[1.25rem] ">
                  APIs
                </h1>
              </div>
              <h1 className="lg:w-[31.5rem] w-[330px] lg:h-[20.625rem] font-Jost not-italic font-medium lg:text-l leading-[2.5rem] items-center text-secondary-main mt-[0.75rem] ">
                Grow with our robust API integration for processing
                cryptocurrency payments and building financial products
              </h1>
            </div>
          </div>
          <div className="lg:w-[32rem] lg:h-[9.0625rem]  mt-[1.25rem] ">
            <div className="  mt-[0.625rem] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[0.3125rem] h-[0.3125rem] mr-[0.625rem] "
              />
              <h1 className=" font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-main ">
                Let the customer pay in any crypto of their choice, while you
                receive in any crypto of your choice
              </h1>
            </div>
            <div className=" mt-[0.625rem] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[0.3125rem] h-[0.3125rem] mr-[0.625rem] "
              />
              <h1 className=" font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-secondary-main ">
                Accept stablecoin payment and get settled in your local currency
              </h1>
            </div>
            <div className=" mt-[0.625rem]  flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[0.3125rem] h-[0.3125rem] mr-[0.625rem] "
              />
              <h1 className=" font-Jost not-italic font-regular text-s leading-[1.4375rem]  items-center text-secondary-main ">
                Works in a custodial and non-custodial way
              </h1>
            </div>
            <div className="  mt-[0.625rem]  flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[0.3125rem] h-[0.3125rem] mr-[0.625rem]  "
              />
              <h1 className=" font-Jost not-italic font-regular text-s leading-[1.4375rem]  items-center text-secondary-main ">
                View all transaction and customers data
              </h1>
            </div>
          </div>
          <div className="w-[11.25rem] h-[3.125rem] border-[0.0624rem] border-primary-main rounded-[0.3125rem] py-[0.625rem]  pl-[1.5625rem]  mt-[2.5rem] flex flex-row items-center">
            <h1 className="w-[6.3125rem] h-[1.4375rem] font-Jost not-italic font-regular text-s leading-[1.4375rem] text-center items-center text-primary-main mr-[0.625rem] ">
              View API Docs
            </h1>
            <img src={rightarrow} alt="" className="w-[1.5rem] h-[1.5rem] " />
          </div>
        </div>
        <img
          src={iphone11}
          alt=""
          className="w-[14.1875rem] h-[26.6875rem] mt-[3.375rem] ml-[5.125rem] object-contain "
        />
      </div>
    </div>
  );
}

export default ForBusinesses;
