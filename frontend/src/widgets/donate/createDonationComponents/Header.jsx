import React from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Header({ setActiveLink }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setActiveLink(3);
    navigate("/dashboard");
  };
  return (
    <div className="w-full !mb-5 bg-[#FCFCFC] py-[1.8rem] pl-2 lg:pl-10">
      <div className="flex justify-start items-center gap-2 cursor-pointer" onClick={handleClose}>
        <MdCancel size="2rem" color="#7B7B7B" />
        <p className="text-s text-secondary-main leading-6 font-medium">
          Create Donation Link
        </p>
      </div>
    </div>
  );
}

export default Header;
