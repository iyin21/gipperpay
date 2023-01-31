import React from "react";
import { mastercard } from "../../../../icons";

function EnterCardDetails({nextTopUpStep}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextTopUpStep();
  };
  return (
    <div className="w-[30rem] mx-auto mt-5 h-[38.5rem] pt-11 px-24 bg-whiteText">
      <p className="text-sm leading-7 text-secondary-main font-medium mt-20">
        Enter Card Details
      </p>
      <p className="text-xs font-regular mt-1 leading-5 text-white-30">
        Gipperpay@gmail.com
      </p>
      <form action="" className=" mt-10">
        <label className="text-xs leading-5 text-secondary-main font-medium">
          Card Number
        </label>
        <div className="w-[18.5rem] flex justify-start px-2 h-12 rounded-md border border-secondary-20">
          <div className="w-[10%] flex justify-center items-center">
            {" "}
            <img src={mastercard} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="pl-3 w-full"
            placeholder="2446 8548 7483 8482"
          />
        </div>

        <div className="mt-8">
          <label
            htmlFor=""
            className="text-xs leading-5 text-secondary-main font-medium"
          >
            Card Name
          </label>
          <input
            type="text"
            className="w-[18.5rem] flex justify-start px-2 h-12 rounded-md border border-secondary-20"
          />
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="w-[8rem]">
            <label className="text-xs leading-5 text-secondary-main font-medium">
              Exp. Date
            </label>
            <input
              type="text"
              className="block pl-3 w-full h-12 border border-white-20"
              placeholder="7/11"
            />
          </div>

          <div className="w-[8rem] ">
            <label className="text-xs leading-5 text-secondary-main font-medium">
              CVV
            </label>
            <input
              type="text"
              className="block pl-3 w-full h-12 border border-white-20"
              placeholder="345"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-[8.6rem] mt-8 text-s leading-6 text-whiteText h-11 bg-primary-main rounded-md"
          onClick={handleSubmit}
        >
          Pay NGN0.00
        </button>
      </form>
    </div>
  );
}

export default EnterCardDetails;
