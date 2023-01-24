import React from "react";
import Overview from "./dashboard-components/Overview";

function MainView({ activeLink }) {
  return (
    <div className="w-4/5 mt-24 h-auto absolute right-0 top-0 bg-White">
      <div className="w-full relative h-auto">{activeLink === 0 && <Overview />}</div>
    </div>
  );
}

export default MainView;
