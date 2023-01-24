import React, { useEffect, useState } from "react";
import { add, giperfi, send, swap } from "../../../icons";
import { dashboardImg, gustCoin, profileBg } from "../../../assets";
import PrimaryButton from "../../../widgets/buttons/PrimaryButton";
import Modal from "../../../../src/widgets/Modal/Modal";
import axios from "axios";
function Overview() {
  // getting the values for btc usdt and eth
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // make API call

  useEffect(() => {
    const getCoin = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin,ethereum,tether&vs_currency=usd"
      );
      const data = await response.data;
      setCoins(data);
      setIsLoading(false);
    };
    getCoin();
  }, []);

  console.log(coins);
  // ------------------------------------------------------------------------------------------------

  // open swap modal----------------------------------------------------------------------------------
  const [showModal, setShowModal] = useState(false);

  const button = [
    {
      img: swap,
      text: "Swap",
    },
    {
      img: send,
      text: "Send",
    },
    {
      img: add,
      text: "Top Up",
    },
    {
      img: giperfi,
      text: "Stake",
    },
  ];
  const handleSwapModal = (text) => {
    if (text === 0) {
      setShowModal(true);
    }
    console.log(text);
  };

  return (
    <div className="w-full flex h-full">
      <div className="w-4/5 top-0 left-0">
        <div className="w-5/6 h-48  relative  m-auto mt-2 rounded-3xl">
          <img
            src={dashboardImg}
            className="h-full w-full absolute top-0 left-0"
            alt=""
          />
          <h1 className="z-10 text-whiteText text-2xl p-5 relative">
            Do More <br /> With{" "}
            <span className="font-regular text-primary-20">GU$T</span>
          </h1>
        </div>

        <div className="w-5/6 m-auto mt-2 h-64">
          {/* gust */}
          <div className="h-20 w-full">
            <div className="flex justify-between items-center px-5">
              <div className="flex justify-center gap-2">
                <img src={gustCoin} className="h-5  w-5" alt="" />{" "}
                <p className="font-medium text-s text-secondary-main">GU$T</p>
              </div>
              <div className="w-[5rem] h-[3rem] pl-2">
                <p className="text-s text-secondary-main font-medium">$ 0.00</p>
                <p className="primary text-primary-mainGreen text-xxs">
                  +0,15%
                </p>
              </div>
            </div>

            <div className="w-full mt-3 flex justify-start gap-2 pl-2">
              {button.map((button, i) => (
                <button
                  key={i}
                  className="flex justify-center items-center gap-1 w-20 h-8 bg-primary-light"
                  onClick={() => handleSwapModal(i)}
                >
                  <img src={button.img} alt="" />
                  <p className="font-regular text-s text-primary-main">
                    {button.text}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* other coins */}
          {isLoading ? (
            <p className="flex justify-center align-center mt-44">Loading...</p>
          ) : (
            coins.map((coins, i) => (
              <div key={i} className="w-full h-14 flex mt-8 justify-between items-center p-2">
                <div className="flex items-center justify-start gap-2">
                  <img src={coins.image} height="30" width="30" alt="" />
                  <div>
                    <p className="text-s font-medium text-secondary-main">
                      {coins.symbol.toUpperCase()}
                    </p>
                    <p className="text-xs font-normal text-white-30">
                      {coins.name}
                    </p>
                  </div>
                </div>

                <div className="w-[5rem] h-full">
                  <p className="text-s font-medium text-secondary-main">
                    $0.00
                  </p>
                  <p className={`text-xs font-normal ${coins.price_change_percentage_24h < 0 ? 'text-red-600' : "text-primary-mainGreen"} `}>
                    {coins.price_change_percentage_24h < 0 ? "-" : "+"}
                    {coins.price_change_percentage_24h.toFixed(2)}%
                  </p>
                </div>
              </div>
            ))
          )}
          {/* ---------------------------------------------------------- */}
        </div>
      </div>

      {/* side nav with profile */}

      <div className="w-2/5 h-screen bg-white-Main p-2">
        <div className="w-48 h-48 rounded-full m-auto mb-5">
          <img src={profileBg} className="rounded-full" alt="" />
        </div>
        <p className="text-center text-secondary-main font-medium ">
          Mary Stansfield
        </p>
        <p className="text-center text-white-30 text-xs">
          Gipper Tag: b4ytr8ue
        </p>
        <div className="w-full flex justify-between h-12 my-5 px-2">
          <div>
            <p className="text-s font-normal text-white-30">Total balance:</p>
            <span className="text-sm text-secondary-main font-bold">$0.00</span>
          </div>
          <PrimaryButton content="Payout" />
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} text="Swap GU$T" />}
    </div>
  );
}

export default Overview;
