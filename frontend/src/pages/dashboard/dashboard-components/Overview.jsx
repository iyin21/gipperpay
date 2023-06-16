import React, { Fragment, useEffect, useState } from "react";
import { add, giperfi, send, swap } from "../../../icons";
import { dashboardImg, gustCoin, profileBg } from "../../../assets";
import PrimaryButton from "../../../widgets/buttons/PrimaryButton";
import Modal from "../../../widgets/Modal/swapcoin/Modal";
import axios from "axios";
import SendCoinModal from "../../../widgets/Modal/sendcoin/SendCoinModal";
import TopUp from "../../../widgets/Modal/topUp/TopUp";
import { AnimatePresence } from "framer-motion";
import Stake from "../../../widgets/Modal/stake/Stake";
// import Graph from "../../../widgets/graph/Graph";

function Overview() {
  // getting the values for btc usdt and eth
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  // coin to swap from
  const [swappingFrom, setSwappingFrom] = useState({
    label: "Gu$t",
    value: "",
    logo: gustCoin,
  });
  // ------------------------------------//

  // stable coin to swap to
  const [swappingTo, setSwappingTo] = useState({});
  // ---------------------------------------//

  // make API call
  useEffect(() => {
    const getCoin = async () => {
     try{
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?ids=bitcoin,ethereum,dai,usd-coin,tether&vs_currency=usd"
      );
      const data = await response.data;
      setCoins(data);
      setIsLoading(false);
      setError('')
     }
     catch(error){
      setIsLoading(false)
      setError(error.message)
     }
    };
    getCoin();
  }, []);

  console.log(coins);
  // -----------------

  //  modals
  const [showModal, setShowModal] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [showTopUpModal, setShowTopUpModal] = useState(false);
  // stake modals
  const [showStakeModal, setShowStakeModal] = useState(false);
  const openModal = () => setShowStakeModal(true);
  const close = () => setShowStakeModal(false);
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
  const handleModal = (i) => {
    if (i === 0) {
      setShowModal(true);
    } else if (i === 1) {
      setShowSendModal(true);
    } else if (i === 2) {
      setShowTopUpModal(true);
    } else if (i === 3) {
      openModal();
    }
  };

  return (
    <div className="w-full flex flex-col-reverse h-auto lg:flex-row lg:h-full">
      <div className="w-full top-0 min-h-screen left-0 lg:w-4/5">
        <div className="w-[90%] h-[10rem] rounded-[1.25rem]  relative  m-auto mt-2 lg:rounded-3xl lg:w-5/6 lg:h-48">
          <img
            src={dashboardImg}
            className="h-full w-full absolute top-0 left-0"
            alt=""
          />
          <h1 className="z-10 text-whiteText text-xl p-5 relative lg:text-2xl">
            Do More <br /> With{" "}
            <span className="font-regular text-primary-20">GU$T</span>
          </h1>
        </div>

        <div className="w-[90%] m-auto mt-2 h-auto">
          {/* gust */}
          <div className="h-20 w-full">
            <div className="flex justify-between items-center lg:px-5">
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

            <div className="w-full mt-3 flex justify-start gap-2 lg:pl-2">
              {button.map((button, i) => (
                <Fragment key={i}>
                  <button
                    className="flex relative justify-center items-center gap-1 w-20 h-8 bg-primary-light"
                    onClick={() => handleModal(i)}
                  >
                    <img src={button.img} alt="" />
                    <p className="hidden font-regular text-s text-primary-main lg:block">
                      {button.text}
                    </p>
                    <p className="font-regular -bottom-6 absolute text-s text-primary-main lg:hidden">
                      {button.text}
                    </p>
                  </button>
                </Fragment>
              ))}
            </div>
          </div>

          {/* other coins */}
          {isLoading ? (
            <p className="flex justify-center align-center mt-44">Loading...</p>
          ) : (
            coins.map((coins, i) => (
              <div
                key={i}
                className="w-full h-14 flex mt-12 justify-between items-center p-2 lg:mt-8"
              >
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

                {/* <Graph/> */}

                <div className="w-[5rem] h-full">
                  <p className="text-s font-medium text-secondary-main">
                    $
                    {coins.current_price
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <p
                    className={`text-xs font-normal ${
                      coins.price_change_percentage_24h < 0
                        ? "text-red-600"
                        : "text-primary-mainGreen"
                    } `}
                  >
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

      <div className="w-[90%] mx-auto h-44 bg-white-Main p-2 lg:h-screen lg:w-2/5">
        <div className="flex justify-start gap-2 items-center lg:block">
          <div className="w-[3.75rem] h-[3.75rem] rounded-full m-0 mb-0 lg:w-48 lg:h-48 lg:m-auto lg:mb-5 ">
            <img src={profileBg} className=" rounded-full" alt="" />
          </div>
          <div>
            <p className="text-center text-secondary-main font-medium ">
              Mary Stansfield
            </p>
            <p className="text-center text-white-30 text-xs">
              Gipper Tag: b4ytr8ue
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between h-12 my-5 px-2">
          <div>
            <p className="text-s font-normal text-white-30">Total balance:</p>
            <span className="text-sm text-secondary-main font-bold">$0.00</span>
          </div>
          <PrimaryButton content="Payout" />
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          from={swappingFrom}
          setFrom={setSwappingFrom}
          to={swappingTo}
          setTo={setSwappingTo}
          text="Swap GU$T"
          
        />
      )}
      {showSendModal && <SendCoinModal setShowSendModal={setShowSendModal} />}
      {showTopUpModal && <TopUp setShowTopUpModal={setShowTopUpModal}  />}
      <AnimatePresence
        initial={false}
        // exitBeforeEnter={true}
        mode="wait"
        onExitComplete={() => null}
      >
        {showStakeModal && <Stake handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default Overview;
