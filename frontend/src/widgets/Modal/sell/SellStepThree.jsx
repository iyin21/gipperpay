import { Divider } from "antd";
import React from "react";
import { bank, gustCoin } from "../../../assets";
import BuyButton from "../../../widgets/buttons/BuyButton";

import { swap1 } from "../../../icons";
function SellStepThree({ nextSellStep, amountToSell, setAmountToSell }) {
  return (
    <div className="w-[31rem] px-[6.4rem] py-[6.4rem] lg:py-[3.4rem]  bg-whiteText">
      <div>
        <img src={bank} alt="" />
      </div>

      <p className="text-secondary-main text-sm leading-7 font-medium mt-10">
        Confirmation
      </p>

      <div className="w-[18.5rem] mt-10">
        <label className="text-xs font-medium leading-5">Send</label>
        <div className="flex gap-2 items-center w-full">
          <div>
            <img src={gustCoin} alt="" />
          </div>
          <input
            className="w-[80%] text-white-30 py-[0.6rem] px-5 rounded-md"
            type="text"
            placeholder="0.00"
            value={amountToSell}
            onChange={(e) => setAmountToSell(e.target.value)}
          />
        </div>
      </div>

      <p className="text-secondary-main text-xs mt-5 font-medium leading-5">
        Receive
      </p>
      <p className="text-secondary-main text-sm font-medium leading-7 mt-2">
        NGN
        {(amountToSell * 725)
          .toFixed(2)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>

      <Divider className="border-white-30 mt-[40px] " dashed />
      <div className=" w-[300px] h-[20px] flex flex-row justify-between items-center mt-[10px] ">
        <h1 className=" w-[80px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 ">
          Exchange Rate
        </h1>
        <div className=" flex flex-row items-center ">
          <h1 className="w-[44px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 mr-[5px] ">
            1 GU$T
          </h1>
          <img src={swap1} alt="" className="mr-[5px]" />
          <h1 className="w-[44px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 ">
            N725
          </h1>
        </div>
      </div>
      <div className=" w-[300px] h-[19px] mt-[10px] flex flex-row items-center justify-between ">
        <h1 className=" w-[20px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
          Fee
        </h1>
        <h1 className=" w-[46px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
          0 GU$T
        </h1>
      </div>
      <div className=" w-[300px] h-[19px] mt-[10px] mb-12 flex flex-row items-center justify-between ">
        <h1 className=" w-[126px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
          Amount you'll receive
        </h1>
        <h1 className=" w-[66px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
          {/* {parseInt(amountToBuy / 725)
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "} */}
          GU$T
        </h1>
      </div>
      <BuyButton content="Confirm Transaction" nextSellStep={nextSellStep} />
    </div>
  );
}

export default SellStepThree;
