import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveCryptoPage, setActivePayoutPage } from "../../../redux/gipperfiSlice";
import {
  blue,
  earn,
  freeze,
  green,
  gustCoin,
  orange,
  payout,
  staking,
} from "../../../assets";
import { giperfi, USDT } from "../../../icons";
import GipperfiModal from "../../../widgets/gipperfiModal/GipperfiModal";
import MobileModal from '../../../widgets/gipperfiModal/MobileModal'


function Gipperffi() {
  const GipperfiData = [
    {
      type: "Earn",
      text: "Get easy return on your crypto Annually",
      img: earn,
      amount: 0.0,
    },
    {
      type: "Staking",
      text: "Join a high interest staking pool to earn staking yield up to 10% annually",
      img: staking,
      amount: 0.0,
    },
    {
      type: "Freezer",
      text: "Lock up your crypto and get up to 4% Annually and Guaranteed",
      img: freeze,
      amount: 0.0,
    },
  ];

  const investment = [
    {
      type: "Earnings",
      img: gustCoin,
      img2: USDT,
      img3: earn,
      line: green,
    },
    {
      type: "Earnings",
      img: gustCoin,
      img2: USDT,
      img3: staking,
      line: orange,
    },
    {
      type: "Earnings",
      img: gustCoin,
      img2: USDT,
      img3: freeze,
      line: blue,
    },
  ];

  const [showGiperfiModal, setShowGiperfiModal] = useState(false);
  const [showGiperfiMobileModal, setShowGiperfiMobileModal] = useState(false)
  const openModal = () => setShowGiperfiModal(true);
  const closeModal = () => setShowGiperfiModal(false);
  const [type,setType] = useState('')
  const dispatch = useDispatch()
  const handleGipperfiMobileModal = (type) =>{
    type === "open" ? setShowGiperfiMobileModal(true) : setShowGiperfiMobileModal(false)
  }
  const handlePayout = () =>{
    dispatch(setActiveCryptoPage(true))
    dispatch(setActivePayoutPage(false))
  }
  
  return (
    <div className="relative w-full p-[1.25rem]">
       <div className="w-full mb-5 flex lg:hidden justify-between items-center mt-5">
          <div>
            <p className="text-s font-400 text-white-30 leading-6">
              Total Earned
            </p>
            <p className="text-secondary-main text-sm leading-7 font-bold">
              $0.00
            </p>
          </div>
          
          <button onClick={handlePayout} className="px-5 py-[0.62rem] rounded-md flex items-center gap-2 bg-primary-main">
            <img src={payout} alt="" />{" "}
            <p className="text-s leading-6 text-whiteText">Payout</p>
          </button>
          
         
         
         
        </div>
      {GipperfiData.map((data, index) => (
        <div
          className="lg:w-[33.75rem] w-full px-5 py-7 mb-[2.5rem] bg-[#F7F7F7] rounded-[20px]"
          key={index}
        >
          <div className="flex justify-between  items-center">
            <div className="flex gap-2 items-center w-[60%]">
              <div>
                <img src={data.img} width={50} alt="" />
              </div>
              <div className="">
                <p
                  className={`${
                    index === 0
                      ? "text-[#109A30]"
                      : index === 1
                      ? "text-[#F7990D]"
                      : "text-[#0F5191]"
                  } text-m leading-8 font-medium`}
                >
                  {data.type}
                </p>
                <p className="text-white-30 font-regular text-xs leading-5">
                  {data.text}
                </p>
              </div>
            </div>
            <div>
              <p className="text-end font-regular text-white-30 text-s leading-6">
                Earnings
              </p>
              <p className="text-end text-sm text-secondary-main leading-7 font-medium">
                {data.amount.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end">
            {/* visible on desktop, hidden on mobile */}
            <button
              className="hidden lg:hidden px-[0.6rem] py-[0.3rem] rounded-md bg-primary-light text-s leading-6 font-400 mt-[1.63rem] text-primary-main"
              onClick={openModal}
            >
              {index === 0 ? "Fund Package" : index === 1 ? "Stake" : "Freeze"}
            </button>
            {/* -------------------------------------- */}

            {/* visible on mobile hidden on desktop */}
            <button
              className="block lg:block px-[0.6rem] py-[0.3rem] rounded-md bg-primary-light text-s leading-6 font-400 mt-[1.63rem] text-primary-main"
              onClick={()=>{
                index === 0 ? setType("fund") :
                index === 1 ? setType("stake") :
                setType("freeze")
                handleGipperfiMobileModal("open")
              }}
            >
              {index === 0 ? "Fund Package" : index === 1 ? "Stake" : "Freeze"}
            </button>
            {/* -------------------------------------- */}
          </div>
        </div>
      ))}

      <div className="absolute hidden lg:block py-[2.25rem] px-[1.25rem] w-[30%] top-0 right-0 h-full bg-[#f7f7f7] ">
        <div className="flex items-center gap-2">
          <div className="w-[1.75rem] flex justify-center items-center rounded-full bg-primary-light h-[1.75rem]">
            <img src={giperfi} alt="" />
          </div>
          <p className="text-secondary-main text-s leading-6 font-500">
            Gifferfi Balance
          </p>
        </div>

        <div className="w-full flex justify-between items-center mt-5">
          <div>
            <p className="text-s font-400 text-white-30 leading-6">
              Total Earned
            </p>
            <p className="text-secondary-main text-sm leading-7 font-bold">
              $0.00
            </p>
          </div>
         
          <button onClick={handlePayout} className="px-5 py-[0.62rem] rounded-md flex items-center gap-2 bg-primary-main">
            <img src={payout} alt="" />{" "}
            <p className="text-s leading-6 text-whiteText">Payout</p>
          </button>
         
         
        </div>

        <div className="mt-[2.5rem]">
          <p className="text-secondary-main font-medium leading-6 text-s">
            Investment Progress
          </p>

          {investment.map((data, index) => (
            <div className="flex justify-between items-center mt-5" key={index}>
              <div>
                <img src={data.img3} alt="" />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-white-30 font-medium text-s leading-6">
                    Investment
                  </p>
                  <p className="text-white-30 font-medium text-s leading-6">
                    $0.00
                  </p>
                </div>
                <div>
                  <p className="text-xs mt-[0.6rem] font-regular text-white-30 leading-5">
                    {data.type}
                  </p>
                  <div className="flex gap-2 mt-[0.6rem]">
                    <span className="flex gap-1">
                      <img src={data.img} alt="" />{" "}
                      <p className="text-xs font-regular text-white-30 leading-5">
                        $0.00
                      </p>
                    </span>

                    <span className="flex gap-1">
                      <img src={data.img2} alt="" />{" "}
                      <p className="text-xs font-regular text-white-30 leading-5">
                        $0.00
                      </p>
                    </span>
                  </div>
                  <div className="flex justify-between mt-[0.6rem] items-center">
                    <p className="text-xs font-regular text-white-30 leading-5">
                      Today
                    </p>
                    <p className="text-xs font-regular text-[#21BF73] leading-5">
                      +1.56%
                    </p>
                  </div>
                  <div>
                    <img src={data.line} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence
        initial={false}
        // exitBeforeEnter={true}
        mode="wait"
        onExitComplete={() => null}
      >
        {showGiperfiModal && <GipperfiModal handleClose={closeModal} />}
        {showGiperfiMobileModal && <MobileModal type={type} handleClose={handleGipperfiMobileModal} />}
      </AnimatePresence>
    </div>
  );
}

export default Gipperffi;
