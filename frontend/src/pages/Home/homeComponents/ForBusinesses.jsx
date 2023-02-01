import React from "react";

import { apipic2, ellipse, iphone11 } from "../../../assets/index";
import { rightarrow } from "../../../icons";

function ForBusinesses() {
  return (
    <div className=" mx-[17px] ">
      <h1 className=" lg:mt-[100px]   lg:ml-[248px] font-Jost not-italic font-regular text-sm leading-[27px]  items-center text-secondary-30 ">
        For Businesses
      </h1>
      <div className="  lg:w-[960px] lg:ml-[248px]  lg:mt-[48px] lg:flex lg:flex-row justify-between ">
        <div className="  mt-[20px] ">
          <div className="flex flex-row items-start ">
            <div className="w-[5px] h-[95px] rounded-[10px] bg-primary-main mr-[20px] "></div>
            <div className="lg:w-[504px] lg:h-[172px] flex flex-col items-start ">
              <div className="w-[120px] h-[40px] flex flex-row  ">
                <img src={apipic2} alt="" className="w-[40px] h-[40px] " />
                <h1 className="font-Jost font-big text-l leading-[40px] text-secondary-main ml-[20px] ">
                  APIs
                </h1>
              </div>
              <h1 className="lg:w-[504px] w-[330px] lg:h-[120px] font-Jost not-italic font-medium lg:text-l leading-[40px] items-center text-secondary-main mt-[12px] ">
                Grow with our robust API integration for processing
                cryptocurrency payments and building financial products
              </h1>
            </div>
          </div>
          <div className="lg:w-[512px] lg:h-[145px]  mt-[20px] ">
            <div className="  mt-[10px] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[5px] h-[5px] mr-[10px] "
              />
              <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-main ">
                Let the customer pay in any crypto of their choice, while you
                receive in any crypto of your choice
              </h1>
            </div>
            <div className=" mt-[10px] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[5px] h-[5px] mr-[10px] "
              />
              <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-main ">
                Accept stablecoin payment and get settled in your local currency
              </h1>
            </div>
            <div className=" mt-[10px] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[5px] h-[5px] mr-[10px] "
              />
              <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-main ">
                Works in a custodial and non-custodial way
              </h1>
            </div>
            <div className=" mt-[10px] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[5px] h-[5px] mr-[10px] "
              />
              <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-main ">
                View all transaction and customers data
              </h1>
            </div>
          </div>
          <div className="w-[180px] h-[50px] border-[1px] border-primary-main rounded-[5px] pt-[10px] pb-[10px] pl-[25px]  mt-[40px] flex flex-row items-center">
            <h1 className="w-[101px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-center items-center text-primary-main mr-[10px] ">
              View API Docs
            </h1>
            <img src={rightarrow} alt="" className="w-[24px] h-[24px] " />
          </div>
        </div>
        <img
          src={iphone11}
          alt=""
          className="w-227px h-[427px] mt-[54px] ml-[82px] object-contain "
        />
      </div>
    </div>
  );
}

export default ForBusinesses;
