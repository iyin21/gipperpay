import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { BsChevronDown } from 'react-icons/bs';


const SelectAmount = ({to, setTo}) => {
    const [img, setImg] = useState("");
  const [hide, setHide] = useState(true);
  const [coins, setCoins] = useState([])
 
   
    useEffect(() => {
        const fetchCoins = async () => {
          const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
          );
          const data = await response.data;
          setCoins(data);
        };
        fetchCoins();
      }, []);
     console.log(coins)
     let filteredCoinsArray = []
      filteredCoinsArray.push(coins[2],coins[1],coins[4], coins[17])
    const handleSelect = (coin) => {
        setTo(coin);
        setImg(img);
        setHide(true);
      };
  return (
    <div>
        <label
          htmlFor=""
          className="text-s font-medium leading-6 text-secondary-main"
        >
          Select Asset and Amount to invest
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
    </div>
  )
}

export default SelectAmount