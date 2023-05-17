import React, { useState } from "react";
import {
  contact,
  mail,
  Rectanglelight,
  Rectanglewaitlist,
} from "../../../assets";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function HeroSection({ setIsRegistered }) {
  const rectangleVariants = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 1, duration: 3 },
    },
  };

  const textVariants = {
    hide: { y: "-20%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  const formVariants = {
    hide: { y: "20%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const { name, email } = user;
    !name || !email
      ? toast.error("please fill in your name and email address")
      : setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/waitlist/create",
        {
          name,
          email,
        }
      );
      if (response.status === 201) {
        toast.success("You've been successfully added to our waitlist");
        setIsRegistered(true);
        navigate("/waitlist/community");
      }
    } catch (error) {
      if (error.response.status === 405) {
        toast.error("You already have been included in waitlist");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full mt-14 relative py-[7.1rem] h-[37.5rem] bg-[#F7F7F7]">
      <motion.h2
        variants={textVariants}
        animate="show"
        initial="hide"
        className="text-2xl relative z-10 lg:text-3xl w-full font-big leading-[69px] flex justify-center text-secondary-main"
      >
        Join the Waitlist
      </motion.h2>
      <motion.div
        variants={textVariants}
        animate="show"
        initial="hide"
        className="w-full flex justify-center mt-10 relative z-10"
      >
        <p className="text-sm leading-[27px] w-[35rem] font-regular text-white-30 text-center">
          Allow your business to accept payment online and offline, build
          financial products, sell online, stay compliant and grow your revenue
        </p>
      </motion.div>

      <motion.form
        variants={formVariants}
        animate="show"
        initial="hide"
        className="w-full relative z-10 md:w-[80%] lg:w-[50%] mt-10 mx-auto px-2 lg:px-0 flex flex-col items-center justify-center"
        action=""
      >
        <div className="flex items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] pl-6 rounded-md">
          <div>
            <img src={contact} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Full Name"
            className="h-full w-full py-[1.1rem] pl-3 bg-transparent placeholder:text-white-30 "
          />
        </div>

        <div className="flex mt-[0.6rem] items-center bg-[#FCFCFC] w-full lg:w-[21.8rem] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] pl-6 rounded-md">
          <div>
            <img src={mail} alt="" />
          </div>
          <input
            type="text"
            name=""
            id=""
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email Address"
            className="h-full w-full py-[1.1rem] pl-3 bg-transparent placeholder:text-white-30 "
          />
        </div>

        <button
          className="w-full lg:w-[21.8rem]  py-[0.9rem] mt-[0.6rem] bg-primary-main text-s text-whiteText rounded-md shadow-[0px_1px_2px_rgba(16,24,40,0.05)] leading-6"
          onClick={submit}
        >
          {loading ? "Loading..." : "Join Waitlist"}
        </button>
      </motion.form>

      {/* rectangles */}
      <motion.div
        variants={rectangleVariants}
        animate="show"
        initial="hide"
        className="absolute w-36 h-5 -top-10 -left-16 lg:h-full lg:w-[30rem] lg:-left-5 lg:top-0"
      >
        <img src={Rectanglewaitlist} alt="" />
      </motion.div>

      <motion.div
        variants={rectangleVariants}
        animate="show"
        initial="hide"
        className="absolute w-36 h-28 bottom-52 -right-0 lg:block lg:h-full lg:w-[30rem] lg:-right-[17%] lg:top-0"
      >
        <img src={Rectanglelight} alt="" />
      </motion.div>
      {/* -------------------- */}
    </div>
  );
}

export default HeroSection;
