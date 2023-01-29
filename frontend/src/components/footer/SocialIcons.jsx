import React from "react";

import { fb, linkedin, twitter, instagram } from "../../assets";

function SocialIcons() {
  return (
    <div className="lg:flex lg:flex-row lg:justify-around ">
      <img src={fb} alt="" className=" lg:w-[54px] lg:h-[54px] lg:mr-[32px] " />
      <img
        src={twitter}
        alt=""
        className=" lg:w-[54px] lg:h-[54px] lg:mr-[32px]  "
      />
      <img
        src={linkedin}
        alt=""
        className=" lg:w-[54px] lg:h-[54px] lg:mr-[32px]  "
      />
      <img
        src={instagram}
        alt=""
        className=" lg:w-[54px] lg:h-[54px] lg:mr-[32px]  "
      />
    </div>
  );
}

export default SocialIcons;
