import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import Freelance from "./Freelance";
import PrimaryButton from "../../../../../widgets/buttons/PrimaryButton";
import { useDispatch } from "react-redux";
import {setFreelancePage} from "../../../../../redux/payrollSlice"
const transactions = [
  {
    label: "Payout processed",
    desc: "Processed just now",
    cost: "$ 2,000",
    checker: "processed",
  },
  {
    label: "Payout processed",
    desc: "Processed just now",
    cost: "$ 2,000",
    checker: "processed",
  },
  {
    label: "Payout received",
    desc: "Processed 01.10.2022",
    cost: "$ 2,000",
    checker: "received",
  },
  {
    label: "Pending invoice",
    desc: "Gipper",
    cost: "$ 2,000",
    checker: "invoice",
  },
  {
    label: "Payout received",
    desc: "Processed 01.10.2022",
    cost: "$ 2,000",
    checker: "received",
  },
  {
    label: "Payout received",
    desc: "Processed 01.10.2022",
    cost: "$ 2,000",
    checker: "received",
  },
  {
    label: "Pending invoice",
    desc: "Gipper",
    cost: "$ 2,000",
    checker: "invoice",
  },
  {
    label: "Payout processed",
    desc: "Processed just now",
    cost: "$ 2,000",
    checker: "processed",
  },
  {
    label: "Pending invoice",
    desc: "Gipper",
    cost: "$ 2,000",
    checker: "invoice",
  },
];
const Freelancers = () => {
  const dispatch = useDispatch()
  const handleNavigate = () =>{
    dispatch(setFreelancePage(false))
  }
  return (
    <div className="lg:flex gap-12 lg:pl-8 lg:pr-16 pl-4 pr-4" >
      <div className="w-full lg:w-[60%]">
        <div onClick={handleNavigate} className="w-[50px] bg-white-Main rounded-full h-[50px] flex justify-center items-center cursor-pointer">
          <AiOutlineArrowLeft size="1.2rem" color="#7B7B7B" />
        </div>
        <div className="w-full flex justify-between h-12 my-5 px-2">
          <div>
            <p className="text-s font-normal text-white-30">Balance:</p>
            <span className="text-sm text-secondary-main font-bold">$0.00</span>
          </div>
          <PrimaryButton content="Payout" />
        </div>
        <div>
          {transactions.map((item, index) => (
            <div
              key={index}
              className="rounded-xl my-2 bg-white-10 px-2 py-3 w-full flex justify-between h-auto items-center"
            >
              <div className="flex h-auto items-center gap-4">
                {item.checker === "received" ? (
                 <div className="w-[30px] h-[30px] rounded-full flex center items-center justify-center bg-primary-lightGreen"> 
                 <FiArrowDownLeft color="#31C36C"/>
                
                 </div>
                ) : item.checker === "processed" ? (
                 <div className="w-[30px] h-[30px] flex center rounded-full items-center justify-center bg-primary-lightRed">
                   <FiArrowUpRight color="#F11B1B" />
                 </div>
                ) : item.checker === "invoice" ? (
                  <div className="w-[30px] h-[30px] rounded-full flex center items-center justify-center bg-primary-lightYellow">
                    <div className="bg-primary-yellow rounded-xl w-[20px] h-[5px]"></div>
                  </div>
                 
                ) : (
                  ""
                )}
                <div>
                  <p
                   className="text-primary-darkGray text-s font-medium"
                  >
                    {item.label}
                  </p>
                  <p className="text-s font-normal text-white-30">{item.desc}</p>
                </div>
              </div>
              <p  className={
                      item.checker === "received"
                        ? "text-s font-medium leading-6 text-primary-red"
                        : item.checker === "processed"
                        ? "text-s font-medium leading-6 text-primary-green" : item.checker === "invoice" ?
                         "text-s font-medium leading-6 text-primary-yellow" :""
                    }>{item.cost}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[40%] rounded-xl bg-transparent lg:bg-white-10 lg:px-10 py-8">
        <Freelance/>
      </div>
    </div>
  );
};

export default Freelancers;
