import React, { useRef } from "react";
import { telegram, twitter, whatsapp } from "../../../icons";
import { motion } from 'framer-motion'
function JoinCommunity({ registered }) {
  const scrollRef = useRef(null);
  const textVariants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <motion.div
      variants={textVariants}
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      ref={scrollRef}
      className="pb-[5.2rem]"
    >
      {registered && (
        <h2 className="text-3xl font-big leading-[69px] flex justify-center text-secondary-main">
          Thank You!
        </h2>
      )}

      <div className="w-full mt-10 flex justify-center">
        <p className="text-sm leading-[27px] w-[20rem] font-regular text-white-30 text-center">
          Reach out to us directly by joining any of our communities
        </p>
      </div>

      <div className="w-full flex flex-col items-center">
        <a
          href="https://twitter.com/i/communities/1622011655428112386"
          rel="noreferrer"
          target="_blank"
        >
          <div className="w-[21.9rem] flex items-center justify-center gap-2 h-[3.1rem] mt-[2.5rem] bg-[#3D5C6C] text-s text-whiteText rounded-md shadow-[0px_1px_2px_rgba(16,24,40,0.05)] leading-6">
            <div className="w-7 flex items-center h-7">
              <img src={twitter} alt="" />
            </div>{" "}
            <p>Twitter Community</p>
          </div>
        </a>

        <a href="https://t.me/Gipperpay" rel="noreferrer" target="_blank">
          <div className="w-[21.9rem] flex items-center justify-center gap-2 h-[3.1rem] mt-[2.5rem] bg-[#118CCA] text-s text-whiteText rounded-md shadow-[0px_1px_2px_rgba(16,24,40,0.05)] leading-6">
            <div className="w-7 flex items-center h-7">
              <img src={telegram} alt="" />
            </div>{" "}
            <p>Telegram Community</p>
          </div>
        </a>

        <a
          href="https://chat.whatsapp.com/HGj5OENGqK06onGmCzHxLM"
          rel="noreferrer"
          target="_blank"
        >
          <div className="w-[21.9rem] flex items-center justify-center gap-2 h-[3.1rem] mt-[2.5rem] bg-[#4BC85A] text-s text-whiteText rounded-md shadow-[0px_1px_2px_rgba(16,24,40,0.05)] leading-6">
            <div className="w-7 flex items-center h-7">
              <img src={whatsapp} alt="" />
            </div>{" "}
            <p>Whatsapp Community</p>
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default JoinCommunity;
