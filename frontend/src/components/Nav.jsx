import React, { Fragment } from "react";

//assets
import gipperpaylogo from "../assets/gipperpaylogo.png";
import gipperpaytext from "../assets/gipperpaytext.png";
import {
  gustCoin1,
  payrollpic,
  donation,
  bankPayouts,
  apipic,
  gipperfi_1,
} from "../assets/index";
import { downIcon, btcgust, mark } from "../icons";

import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";

function Nav() {
  return (
    <div className="w-screen h-[90px] bg-#FCFCFC flex flex-row  items-center justify-center">
      <div className="w-[204.47px] h-[40px] flex flex-row items-center mr-[30px] ">
        <img
          src={gipperpaylogo}
          alt="gipperpaylogo"
          className="w-[43.61px] h-[40px] mr-[11.96px]"
        />
        <img
          src={gipperpaytext}
          alt="gipperpaytext"
          className="w-[148.89px] h-[30.47px]"
        />
      </div>
      <div className="w-[742px] h-[50px] flex flex-row  ">
        <div className="w-[123px] h-[50px]   rounded-[100px] pl-[20px] pr-[10px] pt-[10px] pb-[10px] mr-[5px] flex flex-row items-center">
          <Menu as="div">
            <div>
              <Menu.Button className="flex flex-row">
                <h1 className="w-[58px] h-[23px] text-secondary-main  font-Jost font-regular font text-s leading-[23.12px] text-center mr-[5px] hover:text-Rectangle ">
                  Products
                </h1>
                <img
                  src={downIcon}
                  alt="downicon"
                  className="w-[20px] h-[20px]"
                />
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

        <div className="w-[135px] h-[50px]  rounded-[100px] pl-[20px] pr-[10px] pt-[10px] pb-[10px] mr-[5px] flex flex-row items-center">
          <Menu as="div">
            <div>
              <Menu.Button className="flex flex-row">
                <h1 className="w-[70px] h-[23px]  text-secondary-main  mr-[5px] font-Jost font-regular font text-s leading-[23.12px] text-center not-italic  hover:text-Rectangle ">
                  Use Cases
                </h1>
                <img
                  src={downIcon}
                  alt="downicon"
                  className="w-[20px] h-[20px]"
                />
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
              <Menu.Items className="absolute inset-[90px] left-[185px] shadow-sm ">
                <div className="w-[1071px] h-[426px]  pt-[60px] pb-[60px] pl-[45px] pr-[45px] bg-whiteText">
                  <div className="w-[981px] h-[305px] grid grid-20px-css gap-[53px] ">
                    <div className="w-[256px] h-[75px] flex flex-row items-center ">
                      <img
                        src={mark}
                        alt=""
                        className="w-[40px] h-[40px] mr-[10px] "
                      />
                      <div className="w-[206px] h-[75px] flex flex-col items-start ">
                        <h1 className="w-[103px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                          Freelancers
                        </h1>
                        <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                          Consequat et quis posuere consectetur nulla bibendum
                          eu.
                        </h1>
                      </div>
                    </div>
                    <div className="w-[256px] h-[75px] flex flex-row items-center ">
                      <img
                        src={mark}
                        alt=""
                        className="w-[40px] h-[40px] mr-[10px] "
                      />
                      <div className="w-[206px] h-[75px] flex flex-col items-start ">
                        <h1 className="w-[108px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                          Professional
                        </h1>
                        <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                          Consequat et quis posuere consectetur nulla bibendum
                          eu.
                        </h1>
                      </div>
                    </div>
                    <div className="w-[256px] h-[75px] flex flex-row items-center ">
                      <img
                        src={mark}
                        alt=""
                        className="w-[40px] h-[40px] mr-[10px] "
                      />
                      <div className="w-[206px] h-[75px] flex flex-col items-start ">
                        <h1 className="w-[127px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                          Web3 start up
                        </h1>
                        <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                          Consequat et quis posuere consectetur nulla bibendum
                          eu.
                        </h1>
                      </div>
                    </div>
                    <div className="w-[256px] h-[75px] flex flex-row items-center ">
                      <img
                        src={mark}
                        alt=""
                        className="w-[40px] h-[40px] mr-[10px] "
                      />
                      <div className="w-[206px] h-[75px] flex flex-col items-start ">
                        <h1 className="w-[101px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                          Developers
                        </h1>
                        <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                          Consequat et quis posuere consectetur nulla bibendum
                          eu.
                        </h1>
                      </div>
                    </div>
                    <div className="w-[256px] h-[75px] flex flex-row items-center ">
                      <img
                        src={mark}
                        alt=""
                        className="w-[40px] h-[40px] mr-[10px] "
                      />
                      <div className="w-[206px] h-[75px] flex flex-col items-start ">
                        <h1 className="w-[107px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                          E-commerce
                        </h1>
                        <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                          Consequat et quis posuere consectetur nulla bibendum
                          eu.
                        </h1>
                      </div>
                    </div>
                    <div className="w-[256px] h-[75px] flex flex-row items-center ">
                      <img
                        src={mark}
                        alt=""
                        className="w-[40px] h-[40px] mr-[10px] "
                      />
                      <div className="w-[206px] h-[75px] flex flex-col items-start ">
                        <h1 className="w-[155px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                          Crypto enthusiast
                        </h1>
                        <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                          Consequat et quis posuere consectetur nulla bibendum
                          eu.
                        </h1>
                      </div>
                    </div>
                    <div className="w-[256px] h-[75px] flex flex-row items-center ">
                      <img
                        src={mark}
                        alt=""
                        className="w-[40px] h-[40px] mr-[10px] "
                      />
                      <div className="w-[206px] h-[75px] flex flex-col items-start ">
                        <h1 className="w-[131px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                          Crypto newbie
                        </h1>
                        <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                          Consequat et quis posuere consectetur nulla bibendum
                          eu.
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="w-[78px]  h-[40px] pl-[15px] pr-[15px] pt-[8.5px] pb-[8.5px] mr-[5px] ">
          <h1 className="w-[48px] h-[23px] font-Jost not-italic font-regular text-s text-Rectangle">
            Pricing
          </h1>
        </div>
        <div className="w-[138px] h-[50px] rounded-[100px] pl-[20px] pr-[10px] pt-[13.5px] pb-[13.5px] mr-[5px] flex flex-row items-center">
          <Menu as="div">
            <div>
              <Menu.Button className="flex flex-row">
                <h1 className="w-[70px] h-[23px]  text-secondary-main  mr-[10px] font-Jost font-regular font text-s leading-[23.12px] text-center not-italic hover:text-Rectangle ">
                  Individuals
                </h1>
                <img
                  src={downIcon}
                  alt="downicon"
                  className="w-[20px] h-[20px]"
                />
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
        <div className="w-[138px] h-[50px] rounded-[100px] pl-[20px] pr-[10px] pt-[13.5px] pb-[13.5px] mr-[5px] flex flex-row items-center">
          <Menu as="div">
            <div>
              <Menu.Button className="flex flex-row">
                <h1 className="w-[70px] h-[23px]  text-secondary-main  mr-[10px] font-Jost font-regular font text-s leading-[23.12px] text-center not-italic hover:text-Rectangle ">
                  Businesses
                </h1>
                <img
                  src={downIcon}
                  alt="downicon"
                  className="w-[20px] h-[20px]"
                />
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
              <Menu.Items className="absolute inset-[90px] left-[634px] shadow-sm ">
                <div className="w-[600px] h-[220px] pt-[56px] pb-[56px] pl-[46px] pr-[46px] bg-whiteText ">
                  <div className=" w-[508px] h-[108px] grid grid-24px-css gap-[40px] ">
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
                      <div className="w-[240px] h-[50px] flex flex-row items-center ">
                        <img src={apipic} alt="" className=" mr-[20px] " />
                        <h1 className="w-[170px] h-[27px] font-Jost not-italic font-big text-sm leading-[23px]  text-secondary-main">
                          Api Documentation
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
        <div className="w-[95px]  h-[40px] pl-[15px] pr-[10px] pt-[8.5px] pb-[8.5px] ">
          <h1 className="w-[65px] h-[23px] font-Jost not-italic font-regular text-s text-Rectangle">
            Company
          </h1>
        </div>
      </div>
      <div className="w-[239px] h-[40px] flex flex-row items-start  ">
        <div className="w-[98px] h-[40px] pl-[25px] pr-[25px] pt-[8.5px] pb-[8.5px] items-center rounded-[5px] border-[1px] border-primary-main mr-[10px]">
          <h1 className="w-[48px] h-[23px] font-Jost not-italic font-regular text-s text-center items-center text-primary-main leading-[23px]  ">
            Sign in
          </h1>
        </div>
        <Link to="/dashboard">
          <div className="w-[131px] h-[40px] pl-[25px] pr-[25px] pt-[8.5px] pb-[8.5px] items-center bg-primary-main rounded-[5px]">
            <h1 className="w-[81px] h-[23px] font-Jost not-italic font-regular text-s text-white-60 text-center items-center leading-[23px] ">
              Get Started
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
