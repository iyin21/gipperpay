import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import { BUSINESSES } from "../data";
import { Link } from "react-router-dom";
function Businesses() {
  return (
    <div className="w-[8.625rem] h-[3.125rem] rounded-[6.25rem] pl-[1.25rem] pr-[0.625rem] py-[0.84375rem] mr-[0.3125rem] flex flex-row items-center  z-20">
      <Menu as="div">
        <div>
          <Menu.Button className="flex flex-row  hover:text-Rectangle items-center ">
            <h1 className=" text-secondary-main  font-Jost font-regular font text-s leading-[1.445rem] text-center mr-[0.3125rem]  hover:text-Rectangle ">
              Businesses
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
          <Menu.Items className="absolute inset-[5.625rem] mx-auto shadow-sm w-[38.625rem] h-fit py-[2.2188rem] px-[2.75rem]  bg-whiteText grid grid-cols-1 gap-[0.5rem] ">
            {BUSINESSES.map((item, index) => (
              <Link to={item.link}>
                <Menu.Item
                  as="div"
                  className="flex  flex-col items-start h-fit"
                >
                  <div className="w-[25.625rem] h-[3.125rem] flex flex-row items-center ">
                    <img src={item.image} alt="" className=" mr-[1.25rem] " />
                    <h1
                      className={`w-[18.8125rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.4375rem]  text-secondary-main ${
                        item.name.includes("Coming Soon") ? "text-white-20" : ""
                      } ${
                        item.name.includes("Coming Soon")
                          ? "hover:text-white-20"
                          : ""
                      } hover:text-Rectangle `}
                    >
                      {item.name}
                    </h1>
                  </div>
                </Menu.Item>
              </Link>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Businesses;
