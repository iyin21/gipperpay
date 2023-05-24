import React from "react";

const Card = (props) => {
  const { image, title, desc, checker, className } = props;
  return (
    <div
      checker={checker}
      className={
        `px-4 py-2 flex h-auto items-center w-full  gap-3 rounded-md` +
        className
      }
    >
      <div className="w-[60px] h-[60px] rounded-full flex justify-center text-center items-center bg-whiteText">
        <img src={image} alt={title} className="w-auto h-auto" />
      </div>

      <div>
        <p className="text-secondary-50 font-medium text-sm ">{title}</p>
        <p className="text-lightWhite w-[100%] leading[18px] my-3 font-medium text-xs">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
