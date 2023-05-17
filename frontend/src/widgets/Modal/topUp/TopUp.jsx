import React from "react";
import { useState } from "react";
import { apple, banktransfer, google, mastercard } from "../../../icons";
import ModalBackDrop from "../ModalBackDrop";
import BankTransferDetails from "./topUpFlow/BankTransferDetails";
import EnterCardDetails from "./topUpFlow/EnterCardDetails";
import SelectPaymentMethod from "./topUpFlow/SelectPaymentMethod";
import TopUpCongratsModal from "./topUpFlow/TopUpCongratsModal";
import TopUPGust from "./topUpFlow/TopUPGust";

function TopUp({ setShowTopUpModal }) {
  const [TopUpStep, setTopUpStep] = useState(0);

  // amount you wish to top up
  const [topUpAmount, setTopUpAmount] = useState("");

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    cvv: "",
    expiryDate: "",
  });

  console.log(cardDetails);

  const nextTopUpStep = () => {
    setTopUpStep(TopUpStep + 1);
  };

  const previousTopUpStep = () => {
    setTopUpStep(TopUpStep - 1);
  };

  const [bankPay, setBankPay] = useState(false);

  const paymentMethods = [
    {
      logo: mastercard,
      label: "Credit card/Debit card",
    },
    {
      logo: banktransfer,
      label: "Bank Transfer",
    },
    {
      logo: apple,
      label: "Apple pay",
    },
    {
      logo: google,
      label: "Google pay",
    },
  ];

  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
  console.log(paymentMethod);
  return (
    <ModalBackDrop
      type="topUp"
      setShowTopUpModal={setShowTopUpModal}
      TopUpStep={TopUpStep}
      previousTopUpStep={previousTopUpStep}
      setTopUpStep={setTopUpStep}
      setBankPay={setBankPay}
      stepper={true}
    >
      {TopUpStep === 0 ? (
        <TopUPGust
          topUpAmount={topUpAmount}
          setTopUpAmount={setTopUpAmount}
          nextTopUpStep={nextTopUpStep}
        />
      ) : TopUpStep === 1 ? (
        <SelectPaymentMethod
          paymentMethods={paymentMethods}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          nextTopUpStep={nextTopUpStep}
          setBankPay={setBankPay}
        />
      ) : TopUpStep === 2 && !bankPay ? (
        <EnterCardDetails
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          topUpAmount={topUpAmount}
          nextTopUpStep={nextTopUpStep}
        />
      ) : TopUpStep === 3 ? (
        <TopUpCongratsModal topUpAmount={topUpAmount} setShowTopUpModal={setShowTopUpModal} />
      ) : bankPay ? (
        <BankTransferDetails topUpAmount={topUpAmount} nextTopUpStep={nextTopUpStep} />
      ) : null}
    </ModalBackDrop>
  );
}

export default TopUp;
