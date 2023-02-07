import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import {
  gustCoin1,
  payrollpic,
  donation,
  bankPayouts,
  gipperfi_1,
} from "../../../assets/index";
import { btcgust } from "../../../icons/index";

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
          <Menu.Items className="absolute inset-[5.625rem] left-[12.625rem] shadow-sm ">
            <div className="w-[895px] h-[372px] bg-whiteText pt-[58px] pb-[58px] pl-[51px] pr-[51px] ">
              <div className=" w-[55.9375rem] h-[16rem]  grid grid-32px-css gap-[2.5rem] ">
                <div className="flex  flex-col items-start">
                  <div className="w-[10rem] h-[3.125rem] flex flex-row items-center ">
                    <img
                      src={btcgust}
                      alt=""
                      className="w-[2.3725rem] h-[1.875rem] mr-[1.25rem] "
                    />
                    <h1 className="w-[5.625rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.4375rem]  text-secondary-main">
                      Buy/Sell
                    </h1>
                  </div>
                  <h1 className=" w-[14.125rem] h-[2.375rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
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
                  <div className="w-[10rem] h-[3.125rem] flex flex-row items-center ">
                    <img src={gipperfi_1} alt="" className=" mr-[1.25rem]  " />
                    <h1 className="w-[5.625rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.4375rem]  text-secondary-main">
                      Gipperfi
                    </h1>
                  </div>
                  <h1 className=" w-[14.125rem] h-[2.375rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
                <div className="flex  flex-col items-start">
                  <div className="w-[10rem] h-[3.125rem] flex flex-row items-center ">
                    <img src={gustCoin1} alt="" className=" mr-[1.25rem] " />
                    <h1 className="w-[5.625rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.4375rem]  text-secondary-main">
                      GU$T
                    </h1>
                  </div>
                  <h1 className=" w-[14.125rem] h-[2.375rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
                <div className="flex  flex-col items-start">
                  <div className="w-[15rem] h-[3.125rem] flex flex-row items-center ">
                    <img src={donation} alt="" className=" mr-[1.25rem]" />
                    <h1 className="w-[10.6875rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.4375rem]  text-secondary-main ">
                      Donation Link
                    </h1>
                  </div>
                  <h1 className=" w-[14.125rem] h-[2.375rem] font-Jost not-italic font-regular text-xs leading-[1.1875rem] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
                <div className="flex  flex-col items-start">
                  <div className="w-[10rem] h-[3.125rem] flex flex-row items-center ">
                    <img
                      src={bankPayouts}
                      alt=""
                      className="w-[3.125rem] h-[3.125rem] mr-[1.25rem] "
                    />
                    <h1 className="w-[5.625rem] h-[1.6875rem] font-Jost not-italic font-big text-sm leading-[1.4375rem]  text-secondary-main">
                      Payouts
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

export default Products;
