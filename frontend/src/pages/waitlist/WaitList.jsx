import React from "react";
import Header from "./waitlistComponents/Header";
import HeroSection from "./waitlistComponents/HeroSection";
import WhatWeOffer from "./waitlistComponents/WhatWeOffer";
import WhoCanUse from "./waitlistComponents/WhoCanUse";

function WaitList({setIsRegistered}) {
  return (
    <div className="px-2 lg:px-0 w-full !overflow-hidden">
          <Header />
          <HeroSection setIsRegistered={setIsRegistered}/>
          <WhoCanUse />
          <WhatWeOffer />
    </div>
  );
}

export default WaitList;
