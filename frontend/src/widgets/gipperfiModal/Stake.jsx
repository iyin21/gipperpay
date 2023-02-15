import React from "react";
import {gustCoin, orange,staking } from "../../assets";
import { ETH, USDT } from "../../icons";

function Stake() {
  return (
    <div className="w-full px-5">
      <div className="flex gap-2 mt-[1.6rem] items-center">
        <div>
          <img width={50} src={staking} alt="" />
        </div>
        <div>
          <h1 className="text-m font-medium leading-8 text-[#F7990D]">Staking</h1>
          <p className="text-s font-regular leading-6 text-white-30">
          Join a high interest staking pool to earn staking yield up to 10% annually
          </p>
        </div>
      </div>

      <div className=" flex justify-between items-center mt-[1.6rem]">
        <p className="text-s font-regular leading-6 text-white-30">
          Investment
        </p>
        <p className="text-m font-medium leading-8 text-white-30">$0.00</p>
      </div>

      <p className="mt-[.9rem] text-s font-regular leading-6 text-white-30">
        Earnings
      </p>
      <div className=" mt-[.6rem] flex gap-4">
        <div className="flex items-center gap-2">
          <img src={gustCoin} alt="" />
          <p>$0.00</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={USDT} alt="" />
          <p>$0.00</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={ETH} alt="" />
          <p>$0.00</p>
        </div>
      </div>

      <div className=" mt-[.6rem]">
        <div className="flex justify-between items-center">
          <p className="text-s font-regular leading-6 text-white-30">Today</p>
          <p className="text-s font-regular leading-6 text-[#21BF73]">+1,56%</p>
        </div>
        <div>
          <img className="w-full" src={orange} alt="" />
        </div>
      </div>

      <form action="" className=" mt-5">
        <div>
          <label
            htmlFor=""
            className="text-s font-medium leading-6 text-secondary-main"
          >
            Select Asset and Amount to invest
          </label>
          <div className="border px-2 border-[#858095] rounded-md flex h-[3.1rem]">
            <div className="flex items-center gap-2">
              <img src={USDT} alt="" />
              <p> USDT</p>
            </div>
            <input
              className="pl-[1.6rem] w-[90%] text-left h-full placeholder:text-m placeholder:text-secondary-main font-medium leading placeholder:text-right"
              type="text"
              placeholder="0.00"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex mt-[.6rem] justify-between items-center">
          <p className="text-s font-regular leading-6 text-white-30">
            Avaliable Balance: 0 USDT
          </p>
          <button className="py-[5px] px-[10px] bg-primary-light rounded-md text-primary-main">
            Max
          </button>
        </div>

        <button className="w-full mt-8 rounded-md bg-primary-main text-whiteText text-s leading-6 py-[0.69rem]">
          Stake
        </button>
      </form>
    </div>
  );
}

export default Stake;
