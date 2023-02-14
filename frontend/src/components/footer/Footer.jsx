import React from "react";

import ItemsContainer from "./footerComponents/ItemsContainer";
import { logo2 } from "../../assets";
import SocialIcons from "./footerComponents/SocialIcons";
import { Divider } from "antd";

function Footer() {
  return (
    <footer className=" w-full h-full bg-secondary-main text-white-60 ">
      <div className=" lg:mx-[6.4375rem]  lg:flex lg:flex-col px-[2.5rem] pt-[4.0625rem]  ">
        <img
          src={logo2}
          alt=""
          className="lg:w-[12.75rem] lg:h-[2.5rem] h-[1.875rem] "
        />
        <ItemsContainer />
        <div className=" mt-[3.75rem] lg:flex lg:flex-row lg:justify-between lg:items-center  ">
          <h1 className="font-Jost font-regular lg:text-s lg:leading-[1.4375rem]">
            All right reserved ©️ Gipperpay Inc
          </h1>
          <SocialIcons />
        </div>
        <Divider className=" border-[#E5E5E5] lg:mb-[7.75rem]  rounded-[0.125rem]   " />
      </div>
    </footer>
  );
}

export default Footer;
