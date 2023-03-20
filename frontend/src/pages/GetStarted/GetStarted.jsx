import React from "react";
import BgImage from "./components/BgImage";
import SignUpField from "./components/SignUpField";

const GetStarted = () => {
  return (
    <div className=" lg:py-[5rem] p-[1.25rem] w-full h-full bg-white-70 ">
      <div className="lg:flex lg:flex-row lg:justify-center ">
        <SignUpField />
        <BgImage />
      </div>
    </div>
  );
};

export default GetStarted;
