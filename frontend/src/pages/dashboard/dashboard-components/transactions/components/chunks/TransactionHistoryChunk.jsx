import React from "react";
import TransactionHistoryTable from "../../../../../../components/tables/TransactionHistoryTable";

export default function TransactionHistoryChunk() {
  return (
    <section className="border rounded-lg px-5 sm:px-6 md:px-10 pt-8">
      <div className="flex items-center justify-between mb-10">
        <h6 className="text-sm font-medium">Transaction List</h6>
        <button className="text-xs font-medium text-Rectangle hover:bg-[#fa3d120e] px-4 py-1.5 rounded transition-colors">
          View Report
        </button>
      </div>
      <TransactionHistoryTable />
    </section>
  );
}
