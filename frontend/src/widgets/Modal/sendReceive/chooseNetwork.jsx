import React from "react";
import { UIL_Exchange } from "../../../icons";
import { motion } from "framer-motion";

export const ChooseNetwork = ({ setIsConfirmPinModalOpen, selectedCoin, setCurrentStep }) => {
    return (
        <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 0.7, type: "tween", ease: "easeOut" }}
        >
            {" "}
            <div>
                <h3 className="text-[16px] font-medium font-Jost text-secondary-main">Choose Network</h3>
                <p className="text-white-30 font-Jost text-[13px]">Select Network for this transaction</p>
            </div>
            <div className="mt-[40px] flex items-center ">
                <h3 className="text-[16px] font-medium font-Jost text-secondary-main">Send</h3>
                <div className="flex items-center gap-[5px] ml-[20px]">
                    <img src={selectedCoin.logo} alt="" width={18.2} height={20} />
                    <span className=" text-[13px] font-Jost text-white-30">{selectedCoin.abbr}</span>
                </div>
                <span className="text-[16px] ml-[10px] font-medium font-Jost text-secondary-main">0.00</span>
            </div>
            <div className="mt-[40px]  w-full  md:w-[300px] md:max-w-[300px]">
                <h3 className="text-[13px] font-medium font-Jost text-secondary-main">Choose Network</h3>
                <div className="mt-[22px] w-full pb-[10px]">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex items-center gap-[10px] ml-[10px]">
                            <img src={selectedCoin.logo} alt="" width={18.2} height={20} className="cursor-pointer" />
                            <span className=" text-[16px] font-Jost text-white-30 ">{selectedCoin.name}</span>
                        </div>
                        <input
                            style={{
                                accentColor: "#858094",
                            }}
                            type="radio"
                            checked
                            name="Ethereum"
                            id="ethereum-network"
                            className="w-[20px] h-[20px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px] flex-col items-start mt-[50px] pt-[10px] border-t border-dotted w-full  md:w-[300px] md:max-w-[300px]">
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
            <div className="flex justify-center w-full mt-[40px]">
                <button
                    className="w-[200px] h-[45px]  self-center  rounded-[5px] bg-primary-main text-[#fcfcfc]"
                    onClick={() => {
                        setIsConfirmPinModalOpen(true);
                        setCurrentStep(3);
                    }}
                >
                    Confirm
                </button>
            </div>
        </motion.div>
    );
};
