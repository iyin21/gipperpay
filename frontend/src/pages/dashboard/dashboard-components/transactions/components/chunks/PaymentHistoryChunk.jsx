import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const placeHolderData = [
  {
    name: "Pending",
    value: 3000,
  },
  {
    name: "Payout",
    value: 42000,
  },
  {
    name: "Deposit",
    value: 11500,
  },
];
const COLORS = ["#FA3C12", "#51C6FB", "#0062FF"];

export default function PaymentHistoryChunk() {
  return (
    <div className="border rounded-lg pb-5">
      <div className="flex items-center justify-between gap-5 border-b px-5 py-4">
        <h6 className="font-medium"> Payment History </h6>
        <button className="text-xs font-medium text-Rectangle hover:bg-[#fa3d120e] px-4 py-1.5 rounded transition-colors">
          View Report
        </button>
      </div>

      <div className="flex items-center gap-4 pr-5 2xl:px-10 pt-3 pb-5">
        <ResponsiveContainer width={"100%"} height={200}>
          <PieChart width={330} height={250}>
            <Pie
              data={placeHolderData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
            >
              {placeHolderData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="grid gap-4 min-w-max">
          {placeHolderData.map((data, index) => (
            <div key={`cell-${index}`} className="relative pl-3">
              <div
                className="w-1 absolute left-0 top-0 bottom-0 my-auto h-10/12 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <p className="text-xs text-gray-500"> {data.name} </p>
              <p className="font-medium"> $ {data.value.toLocaleString()} </p>
            </div>
          ))}
        </div>
      </div>

      <button className="rounded-full border text-xs px-4 py-2 font-medium block mx-auto text-gray-500 ">
        View Transactions
      </button>
    </div>
  );
}
