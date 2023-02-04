import React from "react";
import { pricingImage1, pricingImage2 } from "../../assets";
import PricingCard from "./components/PricingCard";

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
        <PricingCard />
      </div>
    </div>
  );
}

export default Pricing;
