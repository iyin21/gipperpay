import React from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function PaymentLinkHeader({setActiveLink, title}) {

  const navigate = useNavigate()

  const handleClose = () => {
    setActiveLink(5)
    navigate('/dashboard')
  }
  return (
    <div className="w-full bg-[white] py-[1.8rem] pl-2 lg:pl-4">
      <div className="flex justify-start items-center gap-2 cursor-pointer" >
        <MdCancel size="2rem" color="#7B7B7B" onClick={handleClose}/>
        <p className="text-s text-secondary-main leading-6 font-medium">
          {title}
        </p>
      </div>
    </div>
  );
}

export default PaymentLinkHeader;