import React from "react";
import BgImage from "./components/BgImage";
import SignInField from "./components/SignInField";

function SignIn() {
  return (
    <div className=" lg:py-[5rem] p-[1.25rem] w-full h-full bg-white-70 ">
      <div className="lg:flex lg:flex-row lg:justify-center ">
        <SignInField />
        <BgImage />
      </div>
    </div>
  );
}

export default SignIn;
