import React, { useState } from "react";
import {
  bit,
  buyActive,
  donateActive,
  donationmobile,
  gipperfiActive,
  gipperfimobile,
  logo,
  notification,
  overviewMobile,
  payrollActive,
  payrollmobile,
  productActive,
  productsmobile,
  profileSm,
  settingsActive,
  settingsmobile,
  transactionActive,
  transactionsmobile,
} from "../../assets";
import { FiMenu } from "react-icons/fi";
import { overviewIcon } from "../../icons";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

function Header({ activeLink, setActiveLink }) {
  const [showMenu, setShowMenu] = useState(false);

  const variants = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, x: "-100%", transition: { delay: 0.5 } },
  };

  const backDrop = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, x: "-100%", transition: { delay: 0.5 } },
  };

  const links = [
    {
      img: overviewMobile,
      linkTitle: "Overview",
    },
    {
      img: bit,
      linkTitle: "Buy & Sell",
    },
    {
      img: gipperfimobile,
      linkTitle: "Gipperfi",
    },
    {
      img: donationmobile,
      linkTitle: "Donations",
    },
    {
      img: payrollmobile,
      linkTitle: "Payroll",
    },
    {
      img: productsmobile,
      linkTitle: "Products",
    },
    {
      img: transactionsmobile,
      linkTitle: "Transactions",
    },
    {
      img: settingsmobile,
      linkTitle: "Settings",
    },
  ];

  const handleActiveLink = (index) => {
    setActiveLink(index);
  };
  return (
    <header className="h-20 px-5 w-full z-40 bg-whiteText flex fixed top-0 right-0 items-center justify-between py-5 lg:px-10 lg:w-[80%]">
      <button className="hidden text-whiteText rounded text-s h-10 bg-secondary-main py-2.5 px-6 lg:block">
        Send & Recieve
      </button>
      <div className="flex items-center gap-1 lg:hidden">
        <FiMenu
          size="2rem"
          className=" mr-5 lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
        {activeLink === 0 ? (
          <>
            <img src={overviewIcon} alt="" />
            <p className="text-xs text-secondary-main font-medium">Overview</p>
          </>
        ) : activeLink === 1 ? (
          <>
            <img src={buyActive} alt="" />
            <p className="text-xs text-secondary-main font-medium">Buy & Sell</p>
          </>
        ) : activeLink === 2 ? (
          <>
            <img src={gipperfiActive} alt="" />
            <p className="text-xs text-secondary-main font-medium">Gipperfi</p>
          </>
        ) : activeLink === 3 ? (
          <>
            <img src={donateActive} alt="" />
            <p className="text-xs text-secondary-main font-medium">Donations</p>
          </>
        ) : activeLink === 4 ? (
          <>
            <img src={payrollActive} alt="" />
            <p className="text-xs text-secondary-main font-medium">Payroll</p>
          </>
        ) : activeLink === 5 ? (
          <>
            <img src={productActive} alt="" />
            <p className="text-xs text-secondary-main font-medium">Products</p>
          </>
        ) : activeLink === 6 ? (
          <>
            <img src={transactionActive} alt="" />
            <p className="text-xs text-secondary-main font-medium">
              Transactions
            </p>
          </>
        ) : activeLink === 7 ? (
          <>
            <img src={settingsActive} alt="" />
            <p className="text-xs text-secondary-main font-medium">Settings</p>
          </>
        ) : null}
      </div>
      <div className="w-44 h-10 flex justify-end gap-2 px-2 items-center lg:w-52 lg:justify-between lg:px-0 lg:gap-0">
        <img src={notification} className="h-5 w-5" alt="" />
        <div className="flex justify-between items-center lg:w-4/5">
          <img src={profileSm} alt="" className="h-10 w-10" />
          <div className="hidden flex-col justify-center item-center lg:flex">
            <p className="text-s p-0 font-regular">Mary Stansfield</p>
            <span className="text-xxs p-0 -mt-2 font-regular">
              gipperpay@gmail.com
            </span>
          </div>
        </div>
      </div>

      <motion.div
        animate={showMenu ? "open" : "closed"}
        variants={backDrop}
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm z-20`}
        onClick={() => setShowMenu(!showMenu)}
      ></motion.div>

      <motion.div
        initial={false}
        animate={showMenu ? "open" : "closed"}
        variants={variants}
        className="fixed overflow-scroll top-0 left-0 w-[70%] h-full bg-whiteText py-11 px-[1.8rem] z-40"
      >
        <div>
          <img src={logo} width={100} height={100} alt="" />
        </div>
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className="flex text-s font-regular leading-6 mt-10 gap-2"
              onClick={() => {
                handleActiveLink(index);
                setShowMenu(!showMenu);
              }}
            >
              <img src={link.img} alt="" />
              {link.linkTitle}
            </li>
          ))}
        </ul>
        <button className="px-[1.6rem] rounded-md py-2 bg-secondary-main mt-10 text-whiteText">
          Send & Receive
        </button>

        <AiFillCloseCircle
          className="absolute right-3 top-3"
          size="2rem"
          onClick={() => setShowMenu(!showMenu)}
        />
      </motion.div>
    </header>
  );
}

export default Header;
