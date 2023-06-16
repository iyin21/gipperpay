import React from "react";
import { IC_DepositDark } from "../../../../../../icons";

export default function TotalPayoutChunk({ amount = 54538 }) {
  return (
    <div className="rounded-lg text-Rectangle bg-[#ffffff] py-5 px-5 border">
      <div className="flex items-center gap-4">
        <img src={IC_DepositDark} alt="" width={35} />
        <p className="font-medium">Total Payout</p>
      </div>
      <h6 className="font-medium text-l mt-8">${amount.toLocaleString()}</h6>
    </div>
  );
}
