import React from "react";

//components
import BigHeader from "../Home/homeComponents/BigHeader";
import WhatWeOffer from "../Home/homeComponents/WhatWeOffer";
import ForIndividuals from "../Home/homeComponents/ForIndividuals";
import ForBusinesses from "../Home/homeComponents/ForBusinesses";
import GlobalPayout from "../Home/homeComponents/GlobalPayout";
import UseCases from "../Home/homeComponents/UseCases";
import Pricing from "../Home/homeComponents/Pricing";
import SignUp from "../Home/homeComponents/SignUp";

function Home() {
  return (
    <div className="w-screen   bg-white-70">
      <BigHeader />
      <WhatWeOffer />
      <ForIndividuals />
      <ForBusinesses />
      <GlobalPayout />
      <UseCases />
      <Pricing />
      <SignUp />
    </div>
  );
}

export default Home;
