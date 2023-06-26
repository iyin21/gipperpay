import React from "react";
import { BarCode, CopyIcon } from "../../../icons";
import { gipperpaylogo } from "../../../assets";

export const ReceiveCoin = () => {
    return (
        <>
            {" "}
            <div className="mt-[40px] w-full  md:w-[300px] md:max-w-[300px]">
                <h3 className="text-[16px] font-medium font-Jost text-secondary-main">
                    Copy Wallet Address or scan barcode
                </h3>
                <p className="text-white-30 font-Jost text-[13px]">
                    Please ensure coin is transferred to this address and specified Network
                </p>
            </div>
            <div className="flex w-full items-center justify-center my-[20px]">
                <img src={BarCode} alt="" className="w-[200px] h-[200px]" />
            </div>
            <div className="flex flex-col items-start   w-full  md:w-[300px] md:max-w-[300px]">
                <span className="text-[13px] font-medium font-Jost text-secondary-main">Wallet address</span>
                <div className="flex h-[50px] gap-[10px] justify-center items-center rounded-[5px] mt-[5px] w-full py-[10px] px-[20px]  border border-secondary-20 bg-[#fcfcfc]">
                    <span className="text-[13px] font-Jost text-white-30 font-medium">
                        wqgeiugyu84827638hjsvfdcvu3wqe2e3d
                    </span>
                    <img src={CopyIcon} alt="" width={20} height={20} />
                </div>
            </div>
            <div className="w-full mt-[20px] flex justify-center">
                <div className="flex items-center gap-[10px]">
                    <img src={gipperpaylogo} alt="" width={18.2} height={20} />
                    <span className=" text-[16px] font-Jost text-white-30">Ethereum network (ERC20)</span>
                </div>
            </div>
        </>
    );
};
