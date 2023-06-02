import React,{useState} from "react";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import StepsModal from "./StepModal";
import SelectAmount from "./SelectAmount";
import { setAmountToInvest } from "../../redux/gipperfiSlice";
import {blue, freeze, gustCoin, } from "../../assets";
import { ETH, USDT } from "../../icons";

function Freeze({stepsModal, showModal, handleClose }) {
  const [to, setTo] = useState({
    name: "",
    image: "",
    current_price: "",
  });
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault();
    showModal()
    dispatch(
      setAmountToInvest({
        name: to.name,
        current_price: to.current_price,
      })
    );
   

  }
  return (
    <div className="w-full px-5">
      <div className="flex gap-2 mt-[1.6rem] items-center">
        <div>
          <img width={50} src={freeze} alt="" />
        </div>
        <div>
          <h1 className="text-m font-medium leading-8 text-[#0F5191]">Freezer</h1>
          <p className="text-s font-regular leading-6 text-white-30">
          Lock up your crypto and get up to 4% Annually and Guaranteed
          </p>
        </div>
      </div>

      <div className=" flex justify-between items-center mt-[1.6rem]">
        <p className="text-s font-regular leading-6 text-white-30">
          Investment
        </p>
        <p className="text-m font-medium leading-8 text-white-30">$0.00</p>
      </div>

      <p className="mt-[.9rem] text-s font-regular leading-6 text-white-30">
        Earnings
      </p>
      <div className=" mt-[.6rem] flex gap-4">
        <div className="flex items-center gap-2">
          <img src={gustCoin} alt="" />
          <p>$0.00</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={USDT} alt="" />
          <p>$0.00</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={ETH} alt="" />
          <p>$0.00</p>
        </div>
      </div>

      <div className=" mt-[.6rem]">
        <div className="flex justify-between items-center">
          <p className="text-s font-regular leading-6 text-white-30">Today</p>
          <p className="text-s font-regular leading-6 text-[#21BF73]">+1,56%</p>
        </div>
        <div>
          <img className="w-full" src={blue} alt="" />
        </div>
      </div>

      <form action="" className=" mt-5" onSubmit={handleSubmit}>
        <div>
          <SelectAmount to={to} setTo={setTo}/>
        </div>
        <div className="flex mt-[.6rem] justify-between items-center">
          <p className="text-s font-regular leading-6 text-white-30">
            Avaliable Balance: 0 USDT
          </p>
          <button className="py-[5px] px-[10px] bg-primary-light rounded-md text-primary-main">
            Max
          </button>
        </div>

        <button className="w-full mt-8 rounded-md bg-primary-main text-whiteText text-s leading-6 py-[0.69rem]">
          Stake
        </button>
      </form>
      <AnimatePresence
        initial={false}
        // exitBeforeEnter={true}
        mode="wait"
        onExitComplete={() => null}
      >
        {stepsModal && <StepsModal handleClose={handleClose}  />}
      </AnimatePresence>
    </div>
  );
}

export default Freeze;
