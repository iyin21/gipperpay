import React from "react";
import { useNavigate } from "react-router-dom";
import { congrats } from "../../../assets";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function LinkCreatedCongratsModal({ topUpAmount, setShowTopUpModal }) {
  const navigate = useNavigate();

  const handleFinish = () => {
    setShowTopUpModal(false);
    navigate("/dashboard");
  };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-[100%] fixed top-auto left-0 h-[100vh] flex justify-center backdrop-blur-sm z-20"
    >
      <div className="w-fit h-fit mt-10 pb-3 p-5 bg-[white] rounded-3xl shadow-sm">
        <div className="h-[10rem]">
          <img className="w-[100%] h-[80%] object-contain" src={congrats} alt="" />
        </div>
        <p className="text-sm leading-8 font-bold text-white-50 flex justify-center items-">
          Success Link created!
        </p>
        <div>
          <input className="max:w-[15rem] h-10 rounded-xl border mx-auto mt-9 mb-3 text-s flex justify-center items-center font-medium text-primary-main leading-6" />
        </div>

        <button className="w-[8rem] h-11 bg-primary-main mx-auto mt-8 text-s flex justify-center items-center gap-2 font-medium text-primary-main leading-6 rounded-[5px]">
          <p
            className="text-s font-regular text-whiteText"
            onClick={() => {
              setTimeout(() => {
                navigate("/store-main");
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'center',
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'success',
                  title: 'Copied'
                })
              });
            }}
          >
            Copy Link
          </p>
        </button>
      </div>
    </motion.div>
  );
}

export default LinkCreatedCongratsModal;
