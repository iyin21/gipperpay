import React, { useState } from "react";
import BuyAndSellSuccessModal from "../buy/BuyAndSellSuccessModal"
import ModalBackDrop from "../ModalBackDrop";
import PasswordModal from "../swapcoin/modalforms/PasswordModal";
import EnterAddress from "./sendGustFlow/EnterAddress";
import PayViaSocial from "./sendGustFlow/PayViaSocial";
import SendGust from "./sendGustFlow/SendGust";
import { gustCoin } from "../../../assets";
import RedeemModal from "./sendGustFlow/RedeemModal";
import {
  Facebook,
  instagram,
  linkedIn,
  Snapchat,
  twitter,
} from "../../../icons";
import SendCongratsModal from "./sendGustFlow/SendCongratsModal";

function SendCoinModal({ setShowSendModal }) {
  const [step, setStep] = useState(0);
  const [socialPay, setSocialPay] = useState(false);
  
  const next = () => {
    setStep(step + 1);
  };

  const previous = () => {
    setStep(step - 1);
  };

  const sendMethods = [
    {
      logo: gustCoin,
      label: "GU$T tag",
    },
    {
      logo: twitter,
      label: "@Twitter Username",
    },
    {
      logo: instagram,
      label: "@Instagram Username",
    },
    {
      logo: linkedIn,
      label: "@Linkedin Username",
    },
    {
      logo: Snapchat,
      label: "@Snapchat Username",
    },
    {
      logo: Facebook,
      label: "@Facebook Username",
    },
  ];

  // details containing the social media handle of the reciever
  // and the GU$T amount to be sent
  const [transactionDetails, setTransactionDetails] = useState({
    gustTag: "",
    reciversUserName: "",
    gustAmount: "",
  });
 const {gustAmount} = transactionDetails
  console.log(transactionDetails);

  const [method, setMethod] = useState(sendMethods[0]);

  return (
    <ModalBackDrop
      setShowSendModal={setShowSendModal}
      type="send"
      step={step}
      previousStep={previous}
      stepper={true}
    >
      {step === 0 ? (
        <SendGust
          nextStep={next}
          sendMethods={sendMethods}
          method={method}
          setMethod={setMethod}
          setSocialPay={setSocialPay}
        />
      ) : step === 1 && !socialPay ? (
        <EnterAddress
          transactionDetails={transactionDetails}
          setTransactionDetails={setTransactionDetails}
          nextStep={next}
        />
      ) : step === 2 ? (
        <PasswordModal nextStep={next} previousStep={previous} type="send" />
      ) : step === 3 ? 
      (
        <SendCongratsModal
          setShowSendModal={setShowSendModal}
          transactionDetails={transactionDetails}
          nextStep={next}
          
        /> 
      ) : step === 4 ? (
        <RedeemModal gustAmount={gustAmount} handleNext={next}/>
      )
      : step === 5 ? <BuyAndSellSuccessModal amountToBuy={gustAmount} desc="Has been redeemed"/> :
      socialPay ? (
        <PayViaSocial
          transactionDetails={transactionDetails}
          setTransactionDetails={setTransactionDetails}
          method={method}
          nextStep={next}
        />
      ) : null}
    </ModalBackDrop>
  );
}

export default SendCoinModal;
