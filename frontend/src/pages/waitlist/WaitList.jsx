import React, { useState } from "react";
import Header from "./waitlistComponents/Header";
import HeroSection from "./waitlistComponents/HeroSection";
import WhatWeOffer from "./waitlistComponents/WhatWeOffer";
import WhoCanUse from "./waitlistComponents/WhoCanUse";
import WaitListSuccess from "./WaitListSuccess";

function WaitList() {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = () => {
    setIsSuccess(true);
  };
  return (
    <div className="px-2 lg:px-0 w-full !overflow-hidden border-2 border-black">
      {isSuccess ? (
        <WaitListSuccess />
      ) : (
        <>
          <Header />
          <HeroSection handleSubmit={handleSubmit}/>
          <WhoCanUse />
          <WhatWeOffer />
        </>
      )}
    </div>
  );
}

export default WaitList;
