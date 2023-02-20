import React from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { donation } from "../../../assets";
function MakeDonationHeader({setActiveLink}) {

  const navigate = useNavigate()

  const close = () => {
    setActiveLink(3)
    navigate('/dashboard')
  }
  return (
    <div className="w-full !mb-5 bg-[#FCFCFC] py-[1.8rem] pl-2 lg:pl-10">
      <div className="flex justify-start items-center gap-2 cursor-pointer" onClick={close}>
        <MdCancel size="2rem" color="#7B7B7B" />
        <div className="w-[2.1rem] flex justify-center items-center bg-primary-light rounded-full h-[2.1rem]">
          <img width={30} src={donation} alt="" />
        </div>
        <p className="text-s text-secondary-main leading-6 font-medium">
          Donate
        </p>
      </div>
    </div>
  );
}

export default MakeDonationHeader;
