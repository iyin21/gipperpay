import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RiWallet2Line } from "react-icons/ri";
import BuyAndSellSuccessModal from "../../../../../widgets/Modal/buy/BuyAndSellSuccessModal";
import Card from "../components/Card";
import CustomLabel from "../../../../../components/form/CustomLabel";
import CustomInput from "../../../../../components/form/CustomInput";
import Freelance from "../../../../../assets/payroll/freelanceLogo.png";
import { gustCoin } from "../../../../../assets";
import { downIcon } from "../../../../../icons";
import { metamask } from "../../../../../assets";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { dropIn } from "../organization/PayrollLinkModal";

export const Connect = () => {
  const {
    freelance: { firstName, lastName, jobPayer, jobType, description, email, country },
  } = useSelector((state) => state.payroll);
  const data = [
    {
      label: "From",
      name: `${firstName} ${lastName}`,
      email: "MaryStanfield@gmail.com",
      country
    },
    {
      label: "To",
      name: jobPayer,
      email,

      country
    },
  ];

  return (
    <div className="w-full lg:w-[55%] pr-0 lg:pr-8 lg:border-r-2 lg:border-white-30">
      <div className="lg:w-full ">
        <Card
          title="Invoice"
          desc="This invoice was created and sent from gipperpay"
          image={Freelance}
          className="w-full lg:w-[60%] bg-lightGreen"
        />
      </div>
      <div className="mt-4">
        <p className="text-secondary-main font-regular text-s leading-5">
         {jobType}
        </p>
        <p className="font-regular text-white-30 text-xs leading-4 font-jost mt-2">
          {description}
        </p>
        <p className="font-regular text-s text-secondary-main leading-5 my-5">
          Date created <span className="text-white-30">11/20/2023</span>
        </p>
      </div>
      <div className="border-y-[1px] border-white-30 py-4 flex justify-between w-full">
        {data.map((item) => (
          <div>
            <p className="text-white-30 font-medium leading-7 text-sm">
              {item.label}
            </p>
            <p className="text-secondary-main mt-4 font-medium leading-7 text-sm">
              {item.name}
            </p>
            <p className="font-regular text-white-30 text-s my-4 leading-5 font-jost mt-2">
              {item.email}
            </p>
            <p className="font-regular text-white-30 text-s my-4 leading-5 font-jost mt-2">
              {item.country}
            </p>
          </div>
        ))}
      </div>
      <div className="py-4 my-5 bg-white-10 rounded-md px-3 w-full flex gap-3">
        <img src={gustCoin} alt="gust" />
        <p className="font-medium leading-6 text-m text-secondary-main">
          200.00
        </p>
      </div>
    </div>
  );
};
const ConnectWallet = ({ handleNext, stepInvoice }) => {
 
  const [formValues, setFormValues] = useState({
    email: "",
    gust: "",
  });
  const { email, gust } = formValues;
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please submit email");
    } else {
      handleNext();
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (!gust) {
      setError("Please submit gust");
    }
    handleNext();
  };
  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full lg:w-[95%] px-4  mx-auto lg:px-2 py-5 justify-center rounded-md flex h-auto items-center bg-[#fcfcfc] flex-col lg:flex-row"
    >
      {stepInvoice === 0 || stepInvoice === 1 ? <Connect /> : ""}
      {stepInvoice === 0 ? (
        <div className="w-full lg:w-[40%]  pl-0 lg:pl-8">
          <form className="w-full" onSubmit={handleSubmit}>
            <p className="text-secondary-main mt-4 font-medium leading-7 text-sm">
              Connect Wallet
            </p>
            <p className="font-regular text-xs my-2 leading-5 text-white-30">
              Please connect a wallet to make donation
            </p>
            <div className="my-4">
              {error && <p className="text-red-400 mb-2">{error}</p>}
              <CustomLabel>Enter email</CustomLabel>
              <CustomInput
                value={email}
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <button
              className="py-3 px-5 text-s flex justify-center
    gap-2 item-center w-full lg:w-[50%] text-whiteText rounded bg-Rectangle"
            >
              <RiWallet2Line size="1.5rem" /> Connect Wallet
            </button>
          </form>
        </div>
      ) : stepInvoice === 1 ? (
        <div className="w-full lg:w-[40%]  pl-0 lg:pl-8">
          <form onSubmit={handleForm}>
            <p className="text-secondary-main mt-4 font-medium leading-7 text-sm">
              Make payment
            </p>
            <p className="text-secondary-main mt-4 font-regular leading-7 text-s my-4">
              Connected Wallets
            </p>
            <div className="flex my-1 justify-around items-center w-[18.6rem]">
              <div className="h-[40px] w-[40px]">
                <img src={metamask} alt="" />
              </div>

              <div>
                <p className="text-s text-secondary-main font-regular leading-6">
                  Metamask
                </p>
                <p className="text-xs text-white-30 font-regular leading-[18.7px]">
                  Mrehbasvuyed.................Ytegvsafy
                </p>
              </div>

              <div>
                <RiDeleteBin6Fill color="#0B002A" size="1rem" />
              </div>
            </div>
            {email && <p className="text-white-30">{email}</p>}
            <p className="text-secondary-main my-4 font-medium leading-7 text-s">
              Select Payment Method
            </p>
            {error && <p className="text-red-400 mb-2">{error}</p>}
            <CustomLabel>Choose Asset</CustomLabel>
            <div className="mt-[1px] w-full border-[1px] px-5 h-auto bg-white-60 py-[14px] flex flex-row justify-between items-between rounded-[5px] border-primary-90 ">
              <div className="flex h-auto w-full flex- gap-2 ">
                <img
                  src={gustCoin}
                  alt="gustCoin"
                  className="w-[20px] h-[20px]"
                />
                <h1 className="w-[32px] h-[19px] not-italic font-regular text-xs leading-[19px] text-white-30 mr-[5px] ">
                  GU$T
                </h1>
                <img
                  src={downIcon}
                  alt="downIcon"
                  className="w-[20px] h-[20px]"
                />
              </div>

              <input
                value={gust}
                name="gust"
                onChange={handleChange}
                className="w-[20%] text-s font-normal text-white-30"
                placeholder="$0.00"
              />
            </div>
            <div className="flex justify-between w-full h-auto items-center mt-2">
              <p className="w-[90%] text-s font-normal text-white-30">Avaliable Balance: ${gust} GU$T</p>
              <div className="w-[10%]">
                <p className="flex-end bg-primaryLight text-center w-[40px] h-[40px] flex justify-center m-auto items-center rounded-sm text-primary-main">
                  Max
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 w-full lg:w-[30%] h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
            >
              Settle Invoice
            </button>
          </form>
        </div>
      ) : stepInvoice === 2 ? (
        <div className="w-full">
          <BuyAndSellSuccessModal  amountToBuy={gust} desc="Payment received" />
        </div>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default ConnectWallet;
