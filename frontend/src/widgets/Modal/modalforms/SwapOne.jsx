import React, { useState } from "react";
import { gustCoin } from "../../../assets/index";
import { MdSwapVert, MdOutlineSwapHoriz } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";
function SwapOne({ next }) {
  const handleNext = (e) => {
    e.preventDefault();
    !selected
      ? alert("please select a coin you want to swap with")
      : next();
  };

  const [coinList, setCoinList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [selected, setSelected] = useState("");
  const [img, setImg] = useState("");
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
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

  const handleSelect = (val, img) => {
    setSelected(val);
    setImg(img);
    setHide(true);
  };


  console.log(selected);
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
            <div className=" w-[5rem] h-5 flex justify-start gap-2 pl-2 items-center">
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
          <div className="w-[100%] relative h-[3.12rem] text-secondary-main flex items-center text-sm leading-7 font-medium bg-[white] border border-[#858095] rounded-md">
            <div
              className="w-28 h-7 ml-2 cursor-pointer flex justify-between items-center p-1 bg-[#F7F7F7]"
              onClick={() => setHide(!hide)}
            >
              {selected && <img src={img} height="20" width="20" alt="" />}
              <p className="text-xs font-regular">
                {selected ? selected : "select"}
              </p>
              <BsChevronDown size={10} />
            </div>
            {!hide && (
              <ul className="w-24 h-20 border absolute bg-whiteText overflow-y-scroll overflow-x-hidden top-12 left-0">
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
                    onClick={() => handleSelect(coin.name, coin.image)}
                  >
                    <img src={coin.image} height="25" width="25" alt="" />
                    {coin.symbol.toUpperCase()}
                  </li>
                ))}
              </ul>
            )}

            <input
              className="w-[90%] pl-3 text-sm text-secondary-main leading-7 placeholder:text-right placeholder:text-secondary-main"
              type="number"
              placeholder={selected}
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
