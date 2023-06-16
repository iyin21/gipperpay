import React from "react";
import { IC_DepositLight } from "../../../../../../icons";

export default function TotalDepositChunk({ amount = 68455 }) {
  return (
    <div className="rounded-lg bg-Rectangle text-white-Main py-5 px-5 shadow-m">
      <div className="flex items-center gap-4">
        <img src={IC_DepositLight} alt="" width={35} />
        <p className="font-medium">Total Deposit</p>
      </div>
      <h6 className="font-medium text-l mt-8">${amount.toLocaleString()}</h6>
    </div>
  );
}
