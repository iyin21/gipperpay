import React from "react";
import { bank } from "../../../assets";

function SellStepOne({ nextSellStep }) {
  return (
    <div className="w-[31rem] px-[3.4rem] lg:px-[6.4rem] py-[6.4rem] lg:py-[3.4rem] h-[27rem] bg-whiteText">
      <div>
        <img src={bank} alt="" />
      </div>

      <p className="text-secondary-main text-sm leading-7 font-medium mt-10">
        Add Account
      </p>
      <p className="text-white-30 text-s leading-7 font-regular mt-10">
        You currently do not have any saved bank to receive payment
      </p>

      <button
        className="py-[0.7rem] px-[1.25rem] bg-primary-main text-s leading-6 font-regular text-whiteText mt-10"
        onClick={nextSellStep}
      >
        Add Bank
      </button>
    </div>
  );
}

export default SellStepOne;
