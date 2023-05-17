import React from "react";

function BuyButton({ handleBuyClick, content, handleSell, type }) {
  return (
    <button
      className="w-full lg:w-[200px] h-[45] pt-[11px] pb-[11px]  bg-Rectangle rounded-[5px] flex flex-row items-center justify-center "
      onClick={type === "sell" ? handleSell : handleBuyClick}
    >
      <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] text-white-60 ">
        {content}
      </h1>
    </button>
  );
}

export default BuyButton;
