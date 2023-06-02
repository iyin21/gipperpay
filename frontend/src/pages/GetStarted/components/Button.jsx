import React from "react";

function Button({ name, isSubmitting, radius, isValid, dirty }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting || !isValid || dirty}
      className={`lg:w-[20.1875rem] w-[18.625rem] xs:w-full items-center h-[3.125rem] py-[0.625rem]  bg-primary-main rounded-[0.3125rem] ${
        (isSubmitting || !isValid || dirty) && "opacity-[0.35]"
      } ${radius}  `}
    > {/** Made the button responsive */}
      <h1 className="text-center text-white-70 font-Jost font-medium text-s leading-[1.4375rem] ">
        {name}
      </h1>
    </button>
  );
}

export default Button;
