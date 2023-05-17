import React, { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

function PasswordModal({ Previous, next, type, previousStep, nextStep }) {
  // reference to the four input boxes
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);

  console.log(firstInputRef);
  //   state holding the input values
  const [pin, setPin] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });

  // const [hidePassword, setHidePassword] = useState(false)

  //   destructuring the pin object to get it's value
  const { one, two, three, four } = pin;
  const pinCode = one + two + three + four;
  console.log(pinCode);

  //   onchange handler
  function handleChange(e) {
    const { name, value } = e.target;
    setPin((prevPin) => ({ ...prevPin, [name]: value }));
    // move to next input field once current field has a value
    if (firstInputRef.current.value !== "") {
      secondInputRef.current.focus();
    }
    if (secondInputRef.current.value !== "") {
      thirdInputRef.current.focus();
    }
    if (thirdInputRef.current.value !== "") {
      fourthInputRef.current.focus();
    }
  }

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
      className="w-[100%] fixed top-0 left-0 h-[100vh] flex justify-center items-center backdrop-blur-sm z-20"
    >
      <div className="w-[22.4rem] h-[27rem] bg-[white] relative">
        <AiFillCloseCircle
          cursor="pointer"
          className="absolute top-14 left-16"
          size="2rem"
          color="#7B7B7B"
          onClick={type === "send" ? previousStep : Previous}
        />
        <h2 className="mt-36 text-xs leading-5 font-medium text-secondary-main text-center">
          Transaction PIN
        </h2>
        <p className="mt-3 text-xs leading-5 font-regular text-secondary-30 text-center">
          Confirm with Transaction PIN
        </p>
        <div className="w-[11rem] mx-auto flex justify-between items-center mt-5">
          <div
            className={`w-[2.5rem] h-[2.5rem] border flex justify-center items-center p-1 rounded-lg ${
              firstInputRef.current ? "border-primary-main" : "border-black"
            }`}
          >
            <input
              className="w-full text-sm h-full pl-[40%]"
              value={pin.one}
              name="one"
              onChange={handleChange}
              type="password"
              placeholder="1"
              maxLength={1}
              ref={firstInputRef}
            />
          </div>
          <div
            className={`w-[2.5rem] h-[2.5rem] border flex justify-center items-center p-1 rounded-lg ${
              secondInputRef.current ? "border-primary-main" : "border-black"
            }`}
          >
            <input
              className="w-full h-full pl-[40%]"
              value={pin.two}
              name="two"
              onChange={handleChange}
              type="password"
              placeholder="2"
              maxLength={1}
              ref={secondInputRef}
            />
          </div>
          <div
            className={`w-[2.5rem] h-[2.5rem] border flex justify-center items-center p-1 rounded-lg ${
              thirdInputRef.current ? "border-primary-main" : "border-black"
            }`}
          >
            <input
              className="w-full h-full pl-[40%]"
              value={pin.three}
              name="three"
              onChange={handleChange}
              type="password"
              placeholder="-"
              maxLength={1}
              ref={thirdInputRef}
            />
          </div>
          <div
            className={`w-[2.5rem] h-[2.5rem] border flex justify-center items-center p-1 rounded-lg ${
              fourthInputRef.current ? "border-primary-main" : "border-black"
            }`}
          >
            <input
              className="w-full h-full pl-[40%]"
              value={pin.four}
              name="four"
              onChange={handleChange}
              type="password"
              placeholder="-"
              maxLength={1}
              ref={fourthInputRef}
            />
          </div>
        </div>

        <p className="text-xs font-regular leading-5 text-secondary-30 text-center mt-10">
          Don’t Have one?{" "}
          <span className="text-primary-main"> Set Transaction PIN</span>
        </p>
        <button
          className="w-24 h-12 mt-12 ml-36 mx-auto bg-primary-main rounded-md text-s leading-6 text-whiteText font-regular"
          onClick={type === "send" ? nextStep : next}
        >
          Confirm
        </button>
      </div>
    </motion.div>
  );
}

export default PasswordModal;
