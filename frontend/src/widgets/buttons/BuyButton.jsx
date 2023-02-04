import React from "react";

function BuyButton({handleNext}) {
  return (
    <button className="w-full lg:w-[200px] h-[45] pt-[11px] pb-[11px]  bg-Rectangle rounded-[5px] flex flex-row items-center justify-center " onClick={handleNext}>
      <h1 className=" font-Jost not-italic font-regular text-s leading-[23px] text-white-60 ">
        Buy
      </h1>
    </button>
  );
}

export default BuyButton;
