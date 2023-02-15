import React from "react";

import { fb, linkedin, twitter, instagram } from "../../../assets/index";

function SocialIcons() {
  return (
    <div className="flex flex-row justify-around mt-[2.5rem] ">
      <img
        src={fb}
        alt=""
        className=" lg:w-[3.375rem] lg:h-[3.375rem] lg:mr-[2rem] "
      />
      <img
        src={twitter}
        alt=""
        className=" lg:w-[3.375rem] lg:h-[3.375rem] lg:mr-[2rem] "
      />
      <img
        src={linkedin}
        alt=""
        className=" lg:w-[3.375rem] lg:h-[3.375rem] lg:mr-[2rem] "
      />
      <img
        src={instagram}
        alt=""
        className=" lg:w-[3.375rem] lg:h-[3.375rem] lg:mr-[2rem] "
      />
    </div>
  );
}

export default SocialIcons;
