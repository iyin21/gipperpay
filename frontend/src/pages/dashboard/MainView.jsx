import React from "react";
import Overview from "./dashboard-components/Overview";
import BuyandSell from "./dashboard-components/BuyandSell";
import Gipperffi from "./dashboard-components/Gipperffi";
import Donate from "./dashboard-components/Donate";

function MainView({ activeLink }) {
  return (
    <div className="w-[100%] h-auto mt-24 lg:mt-24  lg:ml-[20%] top-0 bg-White lg:w-4/5">
      <div className="w-full relative h-auto">{activeLink === 0 && <Overview />}</div>
      <div className="w-full h-4/5">{activeLink === 1 && <BuyandSell />}</div>
      <div className="w-full h-4/5">{activeLink === 2 && <Gipperffi />}</div>
      <div className="w-full h-4/5">{activeLink === 3 && <Donate />}</div>
    </div>
  );
}

export default MainView;
