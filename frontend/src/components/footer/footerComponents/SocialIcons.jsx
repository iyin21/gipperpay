import React from "react";

import { fb, linkedin, twitter, instagram } from "../../../assets/index";

function SocialIcons() {
  return (
    <div className="flex flex-row justify-around mt-[40px] ">
      <img src={fb} alt="" className=" w-[54px] h-[54px] mr-[32px] " />
      <img src={twitter} alt="" className=" w-[54px] h-[54px] mr-[32px]  " />
      <img src={linkedin} alt="" className=" w-[54px] h-[54px] mr-[32px]  " />
      <img src={instagram} alt="" className=" w-[54px] h-[54px] mr-[32px]  " />
    </div>
  );
}

export default SocialIcons;
