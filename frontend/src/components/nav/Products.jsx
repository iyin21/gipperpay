import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import {
  gustCoin1,
  payrollpic,
  donation,
  bankPayouts,
  gipperfi_1,
} from "../../assets/index";
import { btcgust } from "../../icons";

function Products() {
  return (
    <div className=" rounded-[100px] pl-[20px] pr-[10px] pt-[10px] pb-[10px] mr-[5px] flex flex-row items-center">
      <Menu as="div">
        <div>
          <Menu.Button className="flex flex-row  hover:text-Rectangle items-center ">
            <h1 className=" text-secondary-main  font-Jost font-regular font text-s leading-[23.12px] text-center mr-[5px]  hover:text-Rectangle ">
              Products
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
          <Menu.Items className="absolute inset-[90px] left-[202px] shadow-sm ">
            <div className="w-[895px] h-[372px] bg-whiteText pt-[58px] pb-[58px] pl-[51px] pr-[51px] ">
              <div className=" w-[793px] h-[256px]  grid grid-32px-css gap-[40px] ">
                <div className="flex  flex-col items-start">
                  <div className="w-[160px] h-[50px] flex flex-row items-center ">
                    <img
                      src={btcgust}
                      alt=""
                      className="w-[37.96px] h-[30px] mr-[20px] "
                    />
                    <h1 className="w-[90px] h-[27px] font-Jost not-italic font-big text-sm leading-[23px]  text-secondary-main">
                      Buy/Sell
                    </h1>
                  </div>
                  <h1 className=" w-[226px] h-[38px] font-Jost not-italic font-regular text-xs leading-[19px] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
                <div className="flex  flex-col items-start">
                  <div className="w-[160px] h-[50px] flex flex-row items-center ">
                    <img src={payrollpic} alt="" className=" mr-[20px] " />
                    <h1 className="w-[90px] h-[27px] font-Jost not-italic font-big text-sm leading-[23px]  text-secondary-main">
                      Payroll
                    </h1>
                  </div>
                  <h1 className=" w-[226px] h-[38px] font-Jost not-italic font-regular text-xs leading-[19px] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
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
                <div className="flex  flex-col items-start">
                  <div className="w-[193px] h-[50px] flex flex-row items-center ">
                    <img src={donation} alt="" className="  mr-[20px] " />
                    <h1 className="w-[123px] h-[27px] font-Jost not-italic font-big text-sm leading-[23px]  text-secondary-main">
                      Donation Link
                    </h1>
                  </div>
                  <h1 className=" w-[226px] h-[38px] font-Jost not-italic font-regular text-xs leading-[19px] text-secondary-30 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                </div>
                <div className="flex  flex-col items-start">
                  <div className="w-[160px] h-[50px] flex flex-row items-center ">
                    <img
                      src={bankPayouts}
                      alt=""
                      className="w-[50px] h-[50px] mr-[20px] "
                    />
                    <h1 className="w-[90px] h-[27px] font-Jost not-italic font-big text-sm leading-[23px]  text-secondary-main">
                      Payouts
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

export default Products;
