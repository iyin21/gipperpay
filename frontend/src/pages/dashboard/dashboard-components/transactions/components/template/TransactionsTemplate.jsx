import React from "react";
import TotalDepositChunk from "../chunks/TotalDepositChunk";
import TotalPayoutChunk from "../chunks/TotalPayoutChunk";
import PaymentHistoryChunk from "../chunks/PaymentHistoryChunk";
import PerformanceHistoryChunk from "../chunks/PerformanceHistoryChunk";
import TransactionHistoryChunk from "../chunks/TransactionHistoryChunk";

export default function TransactionsTemplate() {
  return (
    <section>
      <div className="grid xl:grid-cols-3 gap-12">
        <section className="xl:col-span-2">
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <TotalDepositChunk />
            <TotalPayoutChunk />
          </div>
          <PerformanceHistoryChunk />
        </section>

        <section>
          <PaymentHistoryChunk />
        </section>
      </div>
      <div className="mt-12">
        <TransactionHistoryChunk />
      </div>
    </section>
  );
}
