import React from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { logo } from "../../../../../assets/index";

const PayrollHeader = (props) => {
  const { setShowEmployeeModal } = props;
  return (
    <header className="w-full fixed z-10 top-0 left-0 flex justify-between px-8 items-center  bg-whiteText h-20 lg:relative">
      <div>
        <AiFillCloseCircle
          cursor="pointer"
          size="2rem"
          color="#7B7B7B"
          onClick={() => setShowEmployeeModal(false)}
        />
      </div>
      <div>
      <Link to="/">
          <img
            src={logo}
            alt="gipperpaylogo"
            className=" w-[6.375rem] h-[1.25rem] lg:w-[12.75rem] lg:h-[2.5rem] "
          />
        </Link>
      </div>
    </header>
  );
};

export default PayrollHeader;
