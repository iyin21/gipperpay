import React from "react";

const CustomButton = (props) => {
  const { type, className, disabled, onClick, children } = props;
  return (
    <button
      type={type}
      className={`w-full lg:w-24 h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
