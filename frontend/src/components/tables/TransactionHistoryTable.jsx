import React from "react";
import { BaseTable } from "./BaseTable";

export default function TransactionHistoryTable() {
  const headings = [
    { id: "email", name: "Email Address" },
    { id: "product", name: "Product" },
    { id: "amount", name: "Amount" },
    { id: "status", name: "Status" },
  ];
  const placeHolderData = [
    {
      id: 1,
      email: "devtenotea@gmail.com",
      product: "Payment Link",
      amount: "$10,000",
      status: (
        <span className=" bg-[#e8fff4] text-[#0AAF60] text-xs py-1.5 px-4 rounded-full">
          {" "}
          Done{" "}
        </span>
      ),
    },
    {
      id: 1,
      email: "devtenotea@gmail.com",
      product: "Payment Link",
      amount: "$10,000",
      status: (
        <span className=" bg-[#fff6eb] text-[#FAA745] text-xs py-1.5 px-4 rounded-full">
          Pending
        </span>
      ),
    },
  ];
  return (
    <div>
      <BaseTable data={placeHolderData} headers={headings} />
    </div>
  );
}
