import React from "react";
import BusinessDetails from "./BusinessDetails";
import EditProfile from "./EditProfile";
import Security from "./Security";
import Verifications from "./Verifications";

function Main({ activeLink }) {
  return (
    <div className=" w-full lg:w-[44.125rem]  ">
      <div className="w-full relative h-auto">
        {activeLink === 0 && <EditProfile />}
      </div>
      <div className="w-full relative h-auto">
        {activeLink === 1 && <BusinessDetails />}
      </div>
      <div className="w-full relative h-auto">
        {activeLink === 2 && <Verifications />}
      </div>
      <div className="w-full relative h-auto">
        {activeLink === 3 && <Security />}
      </div>
    </div>
  );
}

export default Main;
