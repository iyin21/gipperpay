import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

import { PRODUCTS } from "../data";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className=" rounded-[6.25rem] pl-[1.25rem] pr-[0.625rem] py-[0.0625rem] mr-[0.3125rem] flex flex-row items-center  z-20">
      <Menu as="div">
        <div>
          <Menu.Button className="flex flex-row  hover:text-Rectangle items-center ">
            <h1 className=" text-secondary-main  font-Jost font-regular font text-s leading-[1.445rem] text-center mr-[0.3125rem]  hover:text-Rectangle ">
              Products
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
          <Menu.Items
            as="div"
            className="absolute inset-[5.625rem] w-[55.9375rem] h-[16rem]  left-[12.625rem] shadow-sm  bg-whiteText  grid grid-cols-3 gap-[2.5rem] px-[7.5625rem]  py-[3.9688rem] "
          >
            {PRODUCTS.map((item, index) => (
              <Link to={item.link}>
                <Menu.Item as="div" className="flex flex-col items-start  ">
                  <div className="w-[15.625rem] h-[3.125rem] flex flex-row items-center ">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[2.3725rem] h-[1.875rem] mr-[1.25rem] "
                    />
                    <h1 className="w-[7.6875rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.6875rem]  text-secondary-main  hover:text-Rectangle  ">
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

export default Products;
