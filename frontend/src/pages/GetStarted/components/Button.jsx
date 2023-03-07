import React from "react";

function Button({ name, isSubmitting }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`lg:w-[20.1875rem] w-[18.625rem] items-center h-[3.125rem] py-[0.625rem]  bg-primary-main rounded-[0.3125rem] ${
        isSubmitting && "opacity-[0.35]"
      }  `}
    >
      <h1 className="text-center text-white-70 font-Jost font-medium text-s leading-[1.4375rem] ">
        {name}
      </h1>
    </button>
  );
}

export default Button;
