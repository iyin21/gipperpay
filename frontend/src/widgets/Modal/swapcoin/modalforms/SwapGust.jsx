import React, { useState } from "react";
import { MdSwapVert, MdOutlineSwapHoriz } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";
import {motion} from 'framer-motion'
import axios from "axios";
function SwapGust({ next, from, setFrom, to, setTo }) {
  // move to next step----------------------//
  const handleNext = (e) => {
    e.preventDefault();
    !to.name || !from.value
      ? alert("please select a coin you want to swap with")
      : next();
  };
  // --------------------------------------------//

  const [coinList, setCoinList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  // const [selected, setSelected] = useState("");
  const [img, setImg] = useState("");
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
      );
      const data = await response.data;
      setCoinList(data);
    };
    fetchCoins();
  }, []);

  const filteredCoins = coinList.filter((val) => {
    if (searchVal === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchVal.toLowerCase())) {
      return val;
    }
    return null;
  });
  let filteredCoinsArray = []
  filteredCoinsArray.push(filteredCoins[2],filteredCoins[1],filteredCoins[4], filteredCoins[17])
  console.log(filteredCoinsArray)
console.log(filteredCoins)
  const handleSelect = (coin) => {
    setTo(coin);
    setImg(img);
    setHide(true);
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
        delay:.5,
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
        Swap GU$T with Stable Coins
      </p>
      <p className="text-white-30 font-regular leading-6 text-s">
        Select Stable Coin to Swap GU$T{" "}
      </p>
      <form action="" className="h-auto">
        <div className="mt-5">
          <label className="text-xs font-medium leading-5 text-secondary-main">
            From
          </label>
          <div className="w-[100%] h-[3.12rem] text-secondary-main flex items-center text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
            <div className=" w-[5rem] h-5 flex justify-start gap-2 pl-2 items-center">
              <img src={from.logo} alt="" />
              <p className="text-xs leading-4 font-regular">{from.label}</p>
            </div>
            <input
              className="w-[90%] pl-3 text-sm text-secondary-main leading-7 placeholder:text-right placeholder:text-secondary-main placeholder:pr-3"
              type="number"
              value={from.value}
              onChange={(e) => setFrom({ ...from, value: e.target.value })}
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
          <div className="w-[100%] relative h-[3.12rem] text-secondary-main flex items-center text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
            <div
              className="w-44 h-7 ml-2 cursor-pointer flex justify-between items-center p-1 bg-[#F7F7F7]"
              onClick={() => setHide(!hide)}
            >
              {to.name && <img src={to.image} height="20" width="20" alt="" />}
              <p className="text-xs font-regular">
                {to.name ? to.name : "select"}
              </p>
              <BsChevronDown size={10} />
            </div>
            {!hide && (
              <ul className="w-32 h-40 border z-20 absolute bg-whiteText overflow-y-scroll overflow-x-hidden top-12 left-0">
                <input
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="w-full pl-2 h-8 border  sticky  bg-whiteText top-0 left-0 placeholder:text-s font-regular"
                  type="text"
                  placeholder="search..."
                />
                {filteredCoinsArray?.map((coin, i) => (
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
            )}

            <input
              className="w-[90%] pl-3 text-sm text-secondary-main leading-7 placeholder:text-right placeholder:text-secondary-main placeholder:pr-3"
              type="number"
              placeholder={to.current_price ? to.name : "0.00"}
              value={to.current_price}
              onChange={(e) => setTo({ ...to, value: e.target.value })}
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
                {from.value}
              </p>
              <MdOutlineSwapHoriz color="#7B7B7B" />
              <p className="text-xs font-medium leading-5 text-white-30">
                ${to.current_price}
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
          className="mt-10 w-full lg:w-20 h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
          onClick={handleNext}
        >
          Swap
        </button>
      </form>
    </motion.div>
  );
}

export default SwapGust;
