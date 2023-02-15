import React from "react";

function Cards({ item }) {
  return (
    <div
      className={`lg:w-[45.625rem]  lg:h-[14.875rem] mt-[6.25rem] m-auto lg:flex ${item.style} `}
    >
      <div className=" w-[21.875rem] h-[14.875rem]   ">
        <img src={item.image} alt="" className=" w-full h-full " />
      </div>
      <div
        className={` lg:py-[4.0625rem] lg:${item.spacing} mt-[0.625rem] lg:mt-[0]  `}
      >
        <h1 className=" w-[13.375rem] h-[2.0625rem] font-Jost font-big text-m leading-[2.0625rem] text-primary-main ">
          {item.name}
        </h1>
        <h1 className=" w-[18.3125rem] h-[4.3125rem] font-Jost font-regular text-s leading-[1.4375rem] mt-[0.3125rem] text-secondary-main ">
          {item.description}
        </h1>
      </div>
    </div>
  );
}

export default Cards;
