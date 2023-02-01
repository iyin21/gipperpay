import React from "react";

//assets
import { forindivualspic } from "../../../assets";

//icons
import { bookmark, rightarrow } from "../../../icons";

function ForIndividuals() {
  return (
    <div className="lg:w-[905px] lg:h-[500px] mx-[30px] lg:ml-[267px] lg:flex lg:flex-row  items-center justify-between   ">
      <div className=" w-[320px] h-[320px] lg:w-[486.27px] lg:h-[500px] m-auto relative  ">
        <img
          src={bookmark}
          alt=""
          className=" absolute z-10 w-[96px] h-[96px] lg:w-[147px] lg:h-[147px] "
        />
        <img
          src={forindivualspic}
          alt=""
          className="absolute  top-[73px]  left-[40px] z-0 w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] "
        />
      </div>
      <div className="lg:w-[363px]  lg:h-[458px] mt-[21px] mb-[21px] ">
        <h1 className="lg:w-[118px] lg:h-[27px] font-Jost not-italic font-regular text-sm leading-[27px] text-center items-center text-secondary-30 ">
          For Individuals
        </h1>
        <h1 className="lg:w-[76px] lg:h-[40px] font-Jost not-italic font-big text-l leading-[40px] text-center items-center text-secondary-main mt-[40px] ">
          GU$T
        </h1>
        <h1 className="lg:w-[338px] lg:h-[92px] font-Jost not-italic font-regular text-s leading-[23px]  text-secondary-30 mt-[10px] ">
          Spend crypto and money like a social bird using gipperpay native
          token, individuals can send crypto or fiat to anyone using just their
          social media username
        </h1>
        <div className="w-[363px] h-[119px] flex flex-row items-center mt-[40px] ">
          <div className="w-[5px] h-[95px] bg-primary-main rounded-[10px] mr-[20px] "></div>
          <div className="w-[338px] h-[119px] items-start ">
            <h1 className="w-[94px] h-[40px] font-Jost not-italic font-big text-l leading-[40px] text-center items-center text-primary-main ">
              Invoice
            </h1>
            <h1 className="w-[338px] h-[69px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[10px]  ">
              Freelancers can generate professional invoices and get paid by
              their contractors with no stress from anywhere.
            </h1>
          </div>
        </div>
        <div className="w-[156px] h-[50px] border-[1px] border-primary-main rounded-[5px] pt-[10px] pb-[10px] pl-[25px]  mt-[40px] flex flex-row items-center">
          <h1 className="w-[77px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-center items-center text-primary-main mr-[10px] ">
            Get Started
          </h1>
          <img src={rightarrow} alt="" className="w-[24px] h-[24px] " />
        </div>
      </div>
    </div>
  );
}

export default ForIndividuals;
