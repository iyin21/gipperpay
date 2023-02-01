import React, { Fragment } from "react";

//assets
import { gustCoin1, gipperfi_1 } from "../../../assets/index";

import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
function Businesses() {
  return (
    <div className="w-[138px] h-[50px] rounded-[100px] pl-[20px] pr-[10px] pt-[13.5px] pb-[13.5px] mr-[5px] flex flex-row items-center">
      <Menu as="div">
        <div>
          <Menu.Button className="flex flex-row  hover:text-Rectangle items-center ">
            <h1 className=" text-secondary-main  font-Jost font-regular font text-s leading-[23.12px] text-center mr-[5px]  hover:text-Rectangle ">
              Businesses
            </h1>
            <BiChevronDown size="20px" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute inset-[90px] left-[517px] shadow-sm ">
            <div className="w-[600px] h-[220px] pt-[56px] pb-[56px] pl-[46px] pr-[46px] bg-whiteText ">
              <div className=" w-[508px] h-[108px] grid grid-24px-css gap-[40px] ">
                <div className="flex  flex-col items-start">
                  <div className="w-[160px] h-[50px] flex flex-row items-center ">
                    <img src={gipperfi_1} alt="" className=" mr-[20px] " />
                    <h1 className="w-[90px] h-[27px] font-Jost not-italic font-big text-sm leading-[23px]  text-secondary-main">
                      Gipperfi
                    </h1>
                  </div>
                  <h1 className=" w-[226px] h-[38px] font-Jost not-italic font-regular text-xs leading-[19px] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
                <div className="flex  flex-col items-start">
                  <div className="w-[160px] h-[50px] flex flex-row items-center ">
                    <img src={gustCoin1} alt="" className=" mr-[20px] " />
                    <h1 className="w-[90px] h-[27px] font-Jost not-italic font-big text-sm leading-[23px]  text-secondary-main">
                      GU$T
                    </h1>
                  </div>
                  <h1 className=" w-[226px] h-[38px] font-Jost not-italic font-regular text-xs leading-[19px] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Businesses;
