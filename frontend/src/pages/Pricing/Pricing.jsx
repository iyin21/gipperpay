import React from "react";
import {
  pricingImage1,
  pricingImage2,
  bankPayouts,
  buyActive,
  gipperpaylogo,
  gipperfiActive,
} from "../../assets";
import PricingCard from "./components/PricingCard";
import {
  BANKPAYOUTS,
  CRYPTOPAYOUTS,
  NATIVETOKENPAYOUT,
  GIPPERFIPAYOUT,
} from "./PricingData";
import SignUp from "../Home/homeComponents/SignUp";

function Pricing() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full relative">
        <div className="w-full h-full relative z-10">
          <img src={pricingImage1} alt="" className="w-full h-full" />
        </div>
        <div className="w-full h-full absolute top-[0] left-0 z-0 ">
          <img
            src={pricingImage2}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <div className="w-full h-full ">
        <PricingCard
          title="Bank payouts"
          data={BANKPAYOUTS}
          header="Region"
          img={bankPayouts}
          color="#D3F1F8"
        />
        <PricingCard
          title="Crypto payouts"
          data={CRYPTOPAYOUTS}
          header="Network"
          img={buyActive}
          color="#FCD19C"
        />
        <PricingCard
          title="Native token payouts"
          data={NATIVETOKENPAYOUT}
          header="Type"
          img={gipperpaylogo}
          color="#CECCD4"
        />
        <PricingCard
          title="GipperFi payouts"
          data={GIPPERFIPAYOUT}
          header="Type"
          img={gipperfiActive}
          color="#FED8D0"
        />
      </div>
      <div className=" lg:flex lg:flex-row lg:w-[38.25rem] lg:m-auto lg:gap-[5rem]  ">
        <div className="flex-col justify-center p-[2.5rem] bg-secondary-50 rounded-[3.125rem] text-center ">
          <h1 className="font-Jost not-italic font-big text-m leading-[2.0625rem] items-center text-whiteText  ">
            Buy crypto
          </h1>
          <h1 className="font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-whiteText mt-[2.5rem] ">
            Transaction Fee
          </h1>
          <h1 className="font-Jost not-italic font-medium text-2xl leading-[3.625rem] items-center text-whiteText mt-[1.25rem] ">
            $2
          </h1>
        </div>
        <div className="flex-col justify-center p-[2.5rem] bg-primary-light rounded-[3.125rem] text-center ">
          <h1 className="font-Jost not-italic font-big text-m leading-[2.0625rem] items-center text-primary-main  ">
            Sell crypto
          </h1>
          <h1 className="font-Jost not-italic font-regular text-s leading-[1.4375rem] items-center text-primary-main mt-[2.5rem] ">
            Transaction Fee
          </h1>
          <h1 className="font-Jost not-italic font-medium text-2xl leading-[3.625rem] items-center text-primary-main mt-[1.25rem] ">
            Dynamic
          </h1>
        </div>
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
}

export default Pricing;
