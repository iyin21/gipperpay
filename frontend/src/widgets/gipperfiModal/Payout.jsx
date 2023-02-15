import React from "react";
import { USDT } from "../../icons";
import {MdOutlineSwapHoriz} from "react-icons/md"
function Payout({ paymentMethod }) {
  const bank =[
    {
      bankName:"Access bank",
      acct:'077944873',
      name:"Mary Stansfield"
    }
  ]
  return (
    <div className="p-5">
      {paymentMethod === "bank" ? (
        <div>
          <p className="font-medium text-s text-secondary-main leading-6">Choose bank to receive payment</p>

          {
            bank.map((data,index)=>(
              <div key={index} className="mt-12 flex justify-between items-center">
              <div>
                <h2 className="font-regular text-s text-secondary-main leading-6">{data.bankName} - {data.acct}</h2>
                <p className="font-regular text-s text-secondary-main leading-6">{data.name}</p>
              </div>
              <div className="w-5 h-5 border-2 rounded-full flex justify-center items-center border-primary-main">
                <div className="w-2 h-2 rounded-full bg-primary-main"></div>
              </div>
            </div>
            ))
          }

          <p className="text=primary-main mt-[3.8rem] text-s leading-6 font-regular text-center">Add another account</p>
        </div>
      ) : (
        <div className="p-5">
          <label
            htmlFor=""
            className="text-s font-medium leading-6 text-secondary-main"
          >
            Select Asset and Amount to invest
          </label>
          <div className="border px-2 border-[#858095] rounded-md flex h-[3.1rem]">
            <div className="flex items-center gap-2">
              <img src={USDT} alt="" />
              <p> USDT</p>
            </div>
            <input
              className="pl-[1.6rem] w-[90%] text-left h-full placeholder:text-m placeholder:text-secondary-main font-medium leading placeholder:text-right"
              type="text"
              placeholder="0.00"
              name=""
              id=""
            />
          </div>
          <p className="text-xs font-regular leading-6 text-white-30">
            Gipperfi Balance: 0 USD
          </p>

          <div className=" mt-[2.7rem]">
            <label
              htmlFor=""
              className="text-s font-medium leading-6 text-secondary-main"
            >
              Enter Wallet Address
            </label>
            <div className="border pl-5 border-[#858095] rounded-md h-[3.1rem]">
              <input
                className=" text-left h-full placeholder:text-white-30 font-medium placeholder:text-right placeholder:text-xs"
                type="text"
                placeholder="wqgeiugyu84827638hjsvfdcvu3wqe2e3d"
                name=""
                id=""
              />
            </div>
          </div>

          <div className="bg-[#f7f7f7] p-[.6rem] rounded-md mt-7">
          <div className="w-full mt-3 boder flex justify-between items-center border-black">
            <p className="text-xs font-medium leading-5 text-white-30">
              Exchange Rate
            </p>
            <div className="flex justify-between items-center w-[50%]">
              <p className="text-xs font-medium leading-5 text-white-30">
                {/* {from.value} */}
              </p>
              <MdOutlineSwapHoriz color="#7B7B7B" />
              <p className="text-xs font-medium leading-5 text-white-30">
                {/* ${to.current_price} */}
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
        </div>
      )}
    </div>
  );
}

export default Payout;
