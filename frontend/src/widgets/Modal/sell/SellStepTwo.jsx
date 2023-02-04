import React from "react";
import { bank } from "../../../assets";

function SellStepTwo({ nextSellStep }) {
  return (
    <div className="w-[31rem] px-[6.4rem] py-[6.4rem] lg:py-[3.4rem]  bg-whiteText">
      <div>
        <img src={bank} alt="" />
      </div>

      <p className="text-secondary-main text-sm leading-7 font-medium mt-10">
        Enter Bank Details
      </p>

      <div className="w-[18.5rem]">
        <label className="text-xs font-medium leading-5">Bank </label>
        <input
          className="w-full text-white-30 border border-secondary-20 py-[0.6rem] px-5 rounded-md"
          type="text"
        />
      </div>

      <div className="w-[18.5rem] mt-5">
        <label className="text-xs font-medium leading-5 ">
          Account Number{" "}
        </label>
        <input
          className="w-full text-white-30 border border-secondary-20 py-[0.6rem] px-5 rounded-md"
          type="text"
        />
        <p className="text-xs font-regular text-white-30 leading-5">
          Mary Stansfied
        </p>
      </div>

      <button
        className="py-[0.7rem] px-5 bg-primary-main rounded-md mt-10 text-whiteText"
        onClick={nextSellStep}
      >
        Proceed
      </button>
    </div>
  );
}

export default SellStepTwo;
