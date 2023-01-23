import React, { useEffect, useState } from "react";
import { add, BTC, ETH, giperfi, send, swap, USDT } from "../../../icons";
import { dashboardImg, gustCoin, profileBg } from "../../../assets";
import PrimaryButton from "../../../widgets/buttons/PrimaryButton";
import Modal from "../../../../src/widgets/Modal/Modal";
import axios from "axios";
function Overview() {
  // getting the values for btc usdt and eth
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);
  const [usdt, setUsdt] = useState(0);

  // make API call

  useEffect(() => {
    const getCoin = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd"
      );
      setBtc(response.data.bitcoin.usd);
      setEth(response.data.ethereum.usd);
      setUsdt(response.data.tether.usd);
      console.log(btc, eth, usdt);
    };
    getCoin();
  }, [btc, eth, usdt]);
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
    if(text === 0){
          setShowModal(true);
    }
    console.log(text)
  };



  return (
    <div className="w-full flex   relative">
      <div className="w-4/5 h-98">
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
                <button key={i} className="flex justify-center items-center gap-1 w-20 h-8 bg-primary-light" onClick={()=>handleSwapModal(i)}>
                  <img src={button.img} alt="" />
                  <p className="font-regular text-s text-primary-main">{button.text}</p>
                </button>
              ))}
            </div>

          </div>

          {/* -------------------------------------------------------- */}
          {/* other coins */}
          <div className="w-full h-14 flex mt-8 justify-between items-center p-2">
            <div className="flex items-center justify-start gap-2">
              <img src={BTC} alt="" />
              <div>
                <p className="text-s font-medium text-secondary-main">BTC</p>
                <p className="text-xs font-normal text-white-30">Bitcoin</p>
              </div>
            </div>

            <div className="w-[5rem] h-full">
              <p className="text-s font-medium text-secondary-main">${btc}</p>
              <p className="text-xs font-normal text-primary-mainGreen">+15%</p>
            </div>
          </div>

          <div className="w-full h-14 flex justify-between items-center p-2">
            <div className="flex items-center justify-start gap-2">
              <img src={ETH} alt="" />
              <div>
                <p className="text-s font-medium text-secondary-main">ETH</p>
                <p className="text-xs font-normal text-white-30">Etherium</p>
              </div>
            </div>

            <div className="w-[5rem] h-full">
              <p className="text-s font-medium text-secondary-main">${eth}</p>
              <p className="text-xs font-normal text-primary-mainGreen">+15%</p>
            </div>
          </div>

          <div className="w-full h-14 flex justify-between items-center p-2">
            <div className="flex items-center justify-start gap-2">
              <img src={USDT} alt="" />
              <div>
                <p className="text-s font-medium text-secondary-main">USDT</p>
                <p className="text-xs font-normal text-white-30">Tether USD</p>
              </div>
            </div>

            <div className="w-[5rem] h-full">
              <p className="text-s font-medium text-secondary-main">
                ${usdt.toFixed(2)}
              </p>
              <p className="text-xs font-normal text-primary-mainGreen">+15%</p>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
        </div>
      </div>

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
