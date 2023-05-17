import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function EcommerceStore() {
  return (
    <div className=" w-full h-full p-[1.5625rem] lg:p-[0] bg-white-70 ">
      <Header />
      <Body />
    </div>
  );
}

export default EcommerceStore;
