import React from "react";
import { gustCoin } from "../../../assets/index";
import { MdSwapVert, MdOutlineSwapHoriz } from "react-icons/md";

function SwapOne({next}) {
  const handleNext =(e)=>{
    e.preventDefault();
    next()
  }
  return (
    <div className="w-[30rem] mx-auto mt-5 h-[38.5rem] pt-11 px-24 bg-whiteText">
      <p className="text-s font-medium leading-6 text-secondary-main">
        Swap GU$T with Stable Coins
      </p>
      <p className="text-">Select Stable Coin to Swap GU$T </p>

      <form action="" className="h-auto">
        <div className="mt-5">
          <label className="text-xs font-medium leading-5 text-secondary-main">
            From
          </label>
          <div className="w-[100%] h-[3.12rem] text-secondary-main flex items-center text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
            <div className=" w-[5rem] h-5 flex justify-start gap-3 items-center">
              <img src={gustCoin} alt="" />
              <p className="text-xs leading-4 font-regular">GU$T</p>
            </div>
            <input
              className="w-[90%] pl-3 text-sm text-secondary-main leading-7 placeholder:text-right placeholder:text-secondary-main"
              type="number"
              placeholder="0.00"
            />
          </div>
          <div className="w-[100%] flex justify-between items-center mt-2">
            <p className="text-xs font-regular leading-5 text-white-30">
              Avaliable Balance: 0 GUST
            </p>
            <div className="py-1 px-2 bg-primary-light rounded-md">max</div>
          </div>
        </div>

        <div className="w-[30%] flex justify-between items-center">
          <div className="flex justify-center rounded-full bg-primary-light items-center w-[2rem] h-[2rem]">
            <MdSwapVert color="#FA3C12" />
          </div>
          <p className="text-xs leading-5 font-regular text-secondary-main">
            switch
          </p>
        </div>

        <div>
          <label className="text-xs mt-[33px] font-medium leading-5 text-secondary-main">
            To
          </label>
          <div className="w-[100%] h-[3.12rem] text-secondary-main flex items-center text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
            <select className="h-full ml-2" name="" id="">
              <option value="USDT">USDT</option>
            </select>
            <input
              className="w-[90%] pl-3 text-sm text-secondary-main leading-7 placeholder:text-right placeholder:text-secondary-main"
              type="number"
              placeholder="USDT"
            />
          </div>

          <div>
            <p className="text-xxs font-regular leading-4 text-white-30">
              Avaliable Balance: 0 GUST
            </p>
          </div>
        </div>

        <div className=" border-t-2 border-dashed mt-7">
          <div className="w-full mt-3 boder flex justify-between items-center border-black">
            <p className="text-xs font-medium leading-5 text-white-30">
              Exchange Rate
            </p>
            <div className="flex justify-between items-center w-[50%]">
              <p className="text-xs font-medium leading-5 text-white-30">
                1 GU$T
              </p>
              <MdOutlineSwapHoriz color="#7B7B7B" />
              <p className="text-xs font-medium leading-5 text-white-30">
                NGN759
              </p>
            </div>
          </div>

          <div className="w-full boder flex justify-between items-center border-black">
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
          className="mt-10 w-20 h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
          onClick={handleNext}
        >
          Swap
        </button>
      </form>
    </div>
  );
}

export default SwapOne;
