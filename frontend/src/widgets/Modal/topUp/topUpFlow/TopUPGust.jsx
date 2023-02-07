import React from "react";
import { MdOutlineSwapHoriz } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { gustCoin } from "../../../../assets";
import { motion } from "framer-motion";

function TopUPGust({ nextTopUpStep, topUpAmount, setTopUpAmount }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    !topUpAmount ? alert("Please enter top up amount") : nextTopUpStep();
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full lg:mx-auto mt-32 lg:mt-5 min-h-[38.5rem] lg:h-[38.5rem] pt-11 px-5 lg:px-24 bg-whiteText lg:w-[30rem]"
    >
      <p className="hidden text-s font-medium leading-6 text-secondary-main lg:block">
        Top - Up GU$T
      </p>
      <p className="text-white-30 font-regular leading-6 text-s">
        Fund your GU$T account directly
      </p>
      <form action="" className="h-auto">
        <div className="mt-5">
          <label className="text-xs font-medium leading-5 text-secondary-main">
            Buy
          </label>
          <div className="w-[100%] h-[3.12rem] text-secondary-main flex items-center justify-center gap-2 text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
            <img src={gustCoin} alt="" />
            <p className="text-xs leading-4 font-regular">GU$T</p>
          </div>
          <div className="w-[100%] flex justify-between items-center mt-2">
            <p className="text-xs font-regular leading-5 text-white-30">
              Avaliable Balance: 0 GUST
            </p>
          </div>
        </div>

        <div>
          <label className="text-xs mt-[33px] font-medium leading-5 text-secondary-main">
            Enter Amount
          </label>
          <div className="w-[100%] relative h-[3.12rem] text-secondary-main flex items-center text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
            <div
              className="w-44 h-7 ml-2 cursor-pointer flex justify-between items-center p-1 bg-[#F7F7F7]"
              //   onClick={() => setHide(!hide)}
            >
              <p className="text-xs font-regular">NGN</p>
              <BsChevronDown size={10} />
            </div>
            {/* {!hide && (
              <ul className="w-32 h-40 border z-20 absolute bg-whiteText overflow-y-scroll overflow-x-hidden top-12 left-0">
                <input
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="w-full pl-2 h-8 border  sticky  bg-whiteText top-0 left-0 placeholder:text-s font-regular"
                  type="text"
                  placeholder="search..."
                />
                {filteredCoins.map((coin, i) => (
                  <li
                    key={i}
                    className={`p-1 flex gap-2 w-full hover:bg-white-10 text-xs cursor-pointer`}
                    onClick={() => handleSelect(coin)}
                  >
                    <img src={coin.image} height="25" width="25" alt="" />
                    {coin.symbol.toUpperCase()}
                  </li>
                ))}
              </ul>
            )} */}

            <input
              className="w-[90%] pl-3 text-sm text-secondary-main leading-7 placeholder:text-right placeholder:text-secondary-main placeholder:pr-3"
              type="number"
              placeholder="0.00"
              value={topUpAmount}
              onChange={(e) => setTopUpAmount(e.target.value)}
            />
          </div>

          <div>
            <p className="text-xs mt-1 font-regular leading-4 text-white-30">
              You will Receive: {(topUpAmount / 725).toFixed(2)} GU$T
            </p>
          </div>
        </div>

        <div className=" border-t-2 border-dashed mt-7">
          <div className="w-full mt-3 boder flex justify-between items-center border-black">
            <p className="text-xs font-medium leading-5 text-white-30">
              Exchange Rate
            </p>
            <div className="flex justify-between items-center w-[50%]">
              <p className="text-xs font-medium leading-5 text-white-30"></p>
              <MdOutlineSwapHoriz color="#7B7B7B" />
              <p className="text-xs font-medium leading-5 text-white-30"></p>
            </div>
          </div>

          <div className="w-full boder flex justify-between items-center border-black">
            <p className="text-xs font-medium leading-5 text-white-30">Fee</p>
            <p className="text-xs font-medium leading-5 text-white-30">
              {topUpAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} NGN
            </p>
          </div>

          <div className="w-full boder flex justify-between items-center border-black">
            <p className="text-xs font-medium leading-5 text-white-30">
              Amount you’ll reeceive
            </p>
            <p className="text-xs font-medium leading-5 text-white-30">
              {(topUpAmount / 725).toFixed(2)} GU$T
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 w-full lg:w-[6.8rem] h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
          onClick={handleSubmit}
        >
          Buy GU$T
        </button>
      </form>
    </motion.div>
  );
}

export default TopUPGust;
