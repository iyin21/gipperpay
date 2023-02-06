import React, { Fragment } from "react";

//assets
import { payrollpic, apipic } from "../../../assets/index";

import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

function Company() {
  return (
    <div className="w-[8.625rem] h-[3.125rem] rounded-[6.25rem] pl-[1.25rem] pr-[0.625rem] pt-[0.84375rem] pb-[0.8475rem] mr-[0.3125rem] flex flex-row items-center  z-20 ">
      <Menu as="div">
        <div>
          <Menu.Button className="flex flex-row  hover:text-Rectangle items-center ">
            <h1 className=" text-secondary-main  font-Jost font-regular font text-s leading-[1.445rem] text-center mr-[0.3125rem]  hover:text-Rectangle ">
              Company
            </h1>
            <BiChevronDown size="1.25rem" />
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
          <Menu.Items className="absolute inset-[5.625rem] left-[39.625rem] shadow-sm ">
            <div className="w-[37.5rem] h-[13.75rem] py-[3.5rem] px-[2.875rem]  bg-whiteText ">
              <div className=" w-[31.75rem] h-[6.75rem] grid grid-24px-css gap-[2.5rem] ">
                <div className="flex  flex-col items-start">
                  <div className="w-[10rem] h-[3.125rem] flex flex-row items-center ">
                    <img src={payrollpic} alt="" className=" mr-[1.25rem] " />
                    <h1 className="w-[5.625rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.4375rem]  text-secondary-main">
                      Payroll
                    </h1>
                  </div>
                  <h1 className=" w-[14.125rem] h-[2.375rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
                <div className="flex  flex-col items-start">
                  <div className="w-[15rem] h-[3.125rem] flex flex-row items-center ">
                    <img src={apipic} alt="" className=" mr-[1.25rem] " />
                    <h1 className="w-[10.625rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.4375rem]  text-secondary-main">
                      Api Documentation
                    </h1>
                  </div>
                  <h1 className=" w-[14.125rem] h-[2.375rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem] text-secondary-30 ">
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

export default Company;
