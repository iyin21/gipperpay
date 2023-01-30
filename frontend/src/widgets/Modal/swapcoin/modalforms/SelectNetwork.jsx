import React, { useState } from "react";
import { gustCoin } from "../../../../assets";
import { binance, tron} from "../../../../icons";
import { MdOutlineSwapHoriz } from "react-icons/md";

function SelectNetwork({next,from,to}) {
  const [network,setNetwork] = useState('')
  console.log(network)

  const handleNext = (e) => {
    e.preventDefault();
    !network
      ? alert("please select a network for this transaction")
      : next();
  };

  return (
    <div className="w-full mt-32 border-2 border-red-500 lg:w-[30rem] lg:mx-auto lg:mt-5 h-[38.5rem] pt-11 px-2 lg:px-24 bg-whiteText">
      <div className="border border-black">
        <h2 className="hidden text-s font-medium leading-6 text-secondary-main lg:block">
          Network And Wallet Address
        </h2>
        <p className="text-xs font-regular leading-5 text-white-30">
          Sellect Network for this transaction
        </p>
      </div>

      <div className="flex justify-between mt-6 items-center w-full">
        <div className="flex justify-around items-center w-[50%]">
          <img src={gustCoin} alt="" />
          <h2 className="text-xs leading-5 font-regular text-white-30">{from.label}</h2>
          <p className="text-s font-medium leading-6 text-secondary-main">
            {from.value}{" "}
          </p>
        </div>
        <MdOutlineSwapHoriz size="1.2rem" color="#7B7B7B" />
        <div className="flex justify-around items-center w-[50%]">
          <img src={to.image} height='20' width='20' alt="" />
          <h2 className="text-xs leading-5 font-regular text-white-30">{to.name}</h2>
          <p className="text-s font-medium leading-6 text-secondary-main">
            {to.current_price}
          </p>
        </div>
      </div>
      <p className="text-s leading-6 lg:text-xs mt-6 lg:leading-5 font-medium text-secondary-main">
        Choose Network
      </p>
      <div>
        <div className="flex w-[full] justify-between mt-5 mb-7">
          <div className="flex items-center justify-start gap-3">
            <img src={tron} alt="" />
            <p className="text-s font-regular leading-6 text-white-30">
              Tron Network (TRC20)
            </p>{" "}
          </div>
          <input
            type="radio"
            value="Tron Network"
            onChange={(e) => setNetwork(e.target.value)}
            name="network"
            id=""
          />
        </div>
        <div className="flex w-[full] justify-between">
          <div className="flex items-center justify-start gap-3">
            <img src={binance} alt="" />
            <p className="text-s font-regular leading-6 text-white-30">
              Binance Smart Chain - (BEP20)
            </p>
          </div>{" "}
          <input
            type="radio"
            value="Binance Smart Chain"
            onChange={(e) => setNetwork(e.target.value)}
            name="network"
            id=""
          />
        </div>
      </div>

      <div className=" border-t-2 bg-white-10 p-2 rounded-md mt-7">
          <div className="w-full mt-3 boder flex justify-between items-center border-black">
            <p className="text-xs font-medium leading-5 text-white-30">
              Exchange Rate
            </p>
            <div className="flex justify-between items-center w-[50%]">
              <p className="text-xs font-medium leading-5 text-white-30">
                {from.value} GU$T
              </p>
              <MdOutlineSwapHoriz color="#7B7B7B" />
              <p className="text-xs font-medium leading-5 text-white-30">
                ${to.current_price} {to.name}
              </p>
            </div>
          </div>

          <div className="w-full boder flex justify-between items-center border-black lg:hidden">
            <p className="text-xs font-medium leading-5 text-white-30">Fee</p>
            <p className="text-xs font-medium leading-5 text-white-30">
              0 GU$T
            </p>
          </div>

          <div className="w-full boder flex justify-between items-center border-black">
            <p className="text-xs font-medium leading-5 text-white-30">
              Amount you’ll reeceive
            </p>
            <p className="text-xs font-medium leading-5 text-white-30">
              0.00 GU$T
            </p>
          </div>
        </div>

      <button
          type="submit"
          className="mt-10 w-full lg:w-20 h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
          onClick={handleNext}
        >
          Swap
        </button>
    </div>
  );
}

export default SelectNetwork;
