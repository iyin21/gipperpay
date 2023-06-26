import React, { useState } from "react";
import { UIL_Exchange, downIcon } from "../../../icons";
import { coins } from "./index";

export const SendCoin = ({ setCurrentStep, selectedCoin, setSelectedCoinState }) => {
    const [coinDropDownActive, setCoinDropDownActive] = useState(false);

    return (
        <>
            <div className="flex flex-col items-start mt-[40px] w-full  md:w-[300px] md:max-w-[300px]">
                <span className="text-[16px] font-medium font-Jost text-secondary-main">Send and recieve coins</span>
                <div className="flex mt-[5px] justify-between items-center p-[10px] w-full h-[50px] gap-[10px] rounded-[5px] border border-secondary-20 bg-[#fcfcfc]  ">
                    <div className="w-[100px] relative">
                        <div
                            className="flex rounded-[5px] p-[5px] items-center justify-center bg-[#f7f7f7] h-[40px] gap-[5px] w-[100px] cursor-pointer"
                            onClick={() => setCoinDropDownActive(!coinDropDownActive)}
                        >
                            <img src={selectedCoin.logo} alt="" width={18.2} height={20} />
                            <span className="text-secondary-main text-[13px] font-Jost mt-[2px]">
                                {selectedCoin.abbr}
                            </span>
                            <img src={downIcon} alt="" className="w-[20px] h-[20px] cursor-pointer" />
                        </div>
                        {coinDropDownActive && (
                            <div
                                className="flex flex-col absolute top-[45px] bg-[#fcfcfc] z-[5] shadow-md rounded-b-[5px] items-start w-full"
                                onClick={(e) => {
                                    setSelectedCoinState(e.target.textContent);
                                    setCoinDropDownActive(false);
                                }}
                            >
                                {coins.map((elem, index) => {
                                    return (
                                        <p key={index} className="py-4 pl-4 w-full hover:bg-[#f7f7f7] cursor-pointer">
                                            {elem.name}
                                        </p>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <input
                        type="text"
                        placeholder="0.00"
                        className="h-[27px] w-[174px] bg-transparent text-[19px] font-Jost text-white-30 text-right font-medium"
                    />
                </div>
                <div className="flex justify-between mt-[5px] w-full items-center">
                    <div className="text-white-30 text-[11px] font-Jost">
                        Avaliable Balance: <span className="font-medium">0 {selectedCoin.abbr}</span>{" "}
                    </div>
                    <button className="bg-primary-light text-primary-main w-[43px] h-[29px] rounded-[5px]">Max</button>
                </div>
            </div>
            <div className="flex flex-col items-start mt-[40px]  w-full  md:w-[300px] md:max-w-[300px]">
                <span className="text-[16px] font-medium font-Jost text-secondary-main">Enter Wallet address</span>
                <input
                    type="text"
                    placeholder="wqgeiugyu84827638hjsvfdcvu3"
                    className="h-[50px] rounded-[5px] mt-[5px] w-full py-[10px] px-[20px] text-[13px] font-Jost text-white-30 font-medium border border-secondary-20 bg-[#fcfcfc]"
                />
            </div>
            <div className="flex gap-[10px] flex-col items-start mt-[40px] pt-[10px] md-p-0 md:border-t border-dotted w-full bg-[#f7f7f7] p-[10px] md:bg-[#fcfcfc]  md:w-[300px] md:max-w-[300px]">
                <div className="flex w-full justify-between items-center">
                    <span className="text-white-30 font-Jost text-[13px]">Exchange Rate</span>
                    <div className="flex items-center font-medium font-jost gap-[10px] text-[13px]">
                        <span className="text-white-30 font-Jost text-[13px]">1 {selectedCoin.abbr}</span>
                        <img src={UIL_Exchange} width={20} height={20} alt="" />
                        <span className="text-white-30 font-Jost text-[13px]">N725</span>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center">
                    <span className="text-white-30 font-Jost text-[13px]">Exchange Rate</span>
                    <span className="text-white-30 font-Jost font-medium text-[13px]">0 {selectedCoin.abbr}</span>
                </div>
                <div className="flex w-full justify-between items-center">
                    <span className="text-white-30 font-Jost text-[13px]">Amount you 'll receive</span>
                    <span className="text-white-30 font-Jost font-medium text-[13px]">0.00 {selectedCoin.abbr}</span>
                </div>
            </div>
            <div className="flex justify-center w-full  md:w-[300px] md:max-w-[300px] mt-[40px]">
                <button
                    className="md:w-[200px] w-full h-[45px]  self-center  rounded-[5px] bg-primary-main text-[#fcfcfc]"
                    onClick={() => setCurrentStep(2)}
                >
                    Proceed
                </button>
            </div>
        </>
    );
};
