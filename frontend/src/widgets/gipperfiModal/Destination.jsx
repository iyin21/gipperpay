import React, { useState } from "react";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { cryptoWallet } from "../../assets";
import CryptoModal from "./CryptoModal";
import { setActiveCryptoPage, setActivePayoutPage } from "../../redux/gipperfiSlice";

function Destination() {
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  const dispatch = useDispatch()
  const data = [
    {
      img: cryptoWallet,
      title: "Send to Crypto Wallet",
      desc: "Send to Crypto Wallet Address",
    },
  ];

  // const handleMethod = (index) => {
  //   index === 0 ? setPaymentMethod("bank") : setPaymentMethod("wallet");
  //   setStep(step + 1);
  // };
 
  const handleClick = () => {
    setShowCryptoModal(true);
  };
  const handleNavigate = () =>{
   dispatch(setActiveCryptoPage(false))
   dispatch(setActivePayoutPage(false))
  }
  return (
    <>
      <div
        className="w-[50px] mx-4 bg-white-Main rounded-full h-[50px] flex justify-center items-center cursor-pointer"
        onClick={handleNavigate}
      >
        <AiOutlineArrowLeft size="1.2rem" color="#7B7B7B" />
      </div>
      <div className="p-5 lg:flex gap-3 flex-row">
        {data.map((data, index) => (
          <div
            onClick={handleClick}
            key={index}
            className={`w-full  lg:w-[30%] mt-10 p-3 ${
              index === 0 ? "bg-[#EEF7D4]" : "bg-[#D9E1F2]"
            } h-[8.75rem] rounded-[10px]`}
          >
            <div>
              <img src={data.img} alt="" />
            </div>
            <h2 className="text-sm mt-[0.6rem] text-secondary-main leading-7 font-medium">
              {data.title}
            </h2>
            <p className="text-xs mt-[0.6rem] leading-5 text-secondary-main font-regular">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
      {showCryptoModal && (
        <CryptoModal setShowCryptoModal={setShowCryptoModal} />
      )}
    </>
  );
}

export default Destination;
