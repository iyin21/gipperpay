import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { logo } from "../../assets";
function ModalBackDrop({
  children,
  text,
  setShowModal,
  Previous,
  activeForm,
  step,
  previousStep,
  setShowSendModal,
  setShowTopUpModal,
  type,
  TopUpStep,
  previousTopUpStep,
  setTopUpStep,
  setBankPay,
  // activeBuyAndsellSection,
  handlePrev,
  activeModalChild,
  prevModalChild,
  active,
  closeSellModal,
  stepper,
  setShowOrgModal,
  handlePrevious,
  setShowInvoice,
   stepInvoice,
  stepCrypto,
  handlePrevPage,
  setShowCryptoModal
}) {
  const steps = [
    {
      id: 1,
      text: "Select Coin and Amount",
    },
    {
      id: 2,
      text: "Choose Network and wallet Address",
    },
    {
      id: 3,
      text: "Confirm with PIN",
    },
  ];

  const sendSteps = [
    {
      id: 1,
      text: "Choose Method to Send",
    },
    {
      id: 2,
      text: "Enter Receivers Details",
    },
    {
      id: 3,
      text: "Confirm with PIN",
    },
  ];

  const topUpSteps = [
    {
      id: 1,
      text: "Enter Top up Amount",
    },
    {
      id: 2,
      text: "Select Payment Method",
    },
    {
      id: 3,
      text: "Confirm Transaction Details",
    },
  ];
  const invoiceSteps = [
    {
      id: 1,
      text: "Connect a wallet",
    },
    {
      id: 2,
      text: "Confirm details",
    },
    {
      id: 3,
      text: "Make payment",
    }
  ]
  const gipperfiSteps = [
    {
      id: 1,
      text: "Select a wallet",
    },
    {
      id: 2,
      text: "Complete payment",
    },
  ]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed overflow-y-auto left-0 top-0 w-full h-[100vh] flex bg-white-Main z-50"
    >
      <section
        className={`bg-white-Main min-h-[100vh] w-full lg:w-[75%] ${
          type === "buyAndSell" && "lg:w-full"
        }`}
      >
        <header className="w-full fixed z-10 top-0 left-0 flex justify-start pl-8 items-center gap-3 bg-whiteText h-20 lg:relative">
          {
           !stepper && <>
            <AiFillCloseCircle
                cursor="pointer"
                size="2rem"
                color="#7B7B7B"
                onClick={() =>setShowOrgModal(false)}
              />
              <p className="text-s font-medium text-secondary-main leading-6">
                {text}
              </p>
            </>
          }
          {activeForm === 0  ? (
            <>
              <AiFillCloseCircle
                cursor="pointer"
                size="2rem"
                color="#7B7B7B"
                onClick={() => setShowModal(false)}
              />
              <p className="text-s font-medium text-secondary-main leading-6">
                {text}
              </p>
            </>
          ) : activeForm === 1 ? (
            <button
              className="flex items-center justify-start gap-3"
              onClick={Previous}
            >
              <IoMdArrowBack />
              <p className="text-s font-medium text-secondary-main leading-6">
                Select Network
              </p>
            </button>
          ) : null}
          {stepInvoice === 0  ?
            <div className="flex w-full h-auto items-center justify-between">
              <AiFillCloseCircle
                cursor="pointer"
                size="2rem"
                color="#7B7B7B"
                onClick={() =>setShowInvoice(false)}
               
              />
             
            </div>
          : stepInvoice === 1 ? <button
          className="flex items-center justify-start gap-3"
          onClick={handlePrevious}
        >
          <IoMdArrowBack />
          <p className="text-s font-medium text-secondary-main leading-6">
            Connect a wallet
          </p>
        </button> :"" }
        {stepCrypto === 0  &&
            <div className="flex w-full h-auto items-center justify-between">
              <AiFillCloseCircle
                cursor="pointer"
                size="2rem"
                color="#7B7B7B"
                onClick={() =>setShowCryptoModal(false)}
               
              />
             
            </div>
           }
          {step === 0 ? (
            <>
              <AiFillCloseCircle
                cursor="pointer"
                size="2rem"
                color="#7B7B7B"
                onClick={() => setShowSendModal(false)}
              />
              <p className="text-s font-medium text-secondary-main leading-6">
                Send GU$T
              </p>
            </>
          ) : step === 1 ? (
            <button
              className="flex items-center justify-start gap-3"
              onClick={previousStep}
            >
              <IoMdArrowBack />
              <p className="text-s font-medium text-secondary-main leading-6">
                Enter Address
              </p>
            </button>
          ) : step === 4 ? 
          <button
          className="flex items-center justify-start gap-3"
          onClick={() => setShowSendModal(false)}
        >
           <AiFillCloseCircle
                cursor="pointer"
                size="2rem"
                color="#7B7B7B"
                onClick={() => setShowTopUpModal(false)}
              />
          <p className="text-s font-medium text-secondary-main leading-6">
            Redeem Asset
          </p>
        </button>
          : null}

          {TopUpStep === 0 ? (
            <>
              <AiFillCloseCircle
                cursor="pointer"
                size="2rem"
                color="#7B7B7B"
                onClick={() => setShowTopUpModal(false)}
              />
              <p className="text-s font-medium text-secondary-main leading-6">
                Top Up
              </p>
            </>
          ) : TopUpStep === 1 ? (
            <button
              className="flex items-center justify-start gap-3"
              onClick={previousTopUpStep}
            >
              <IoMdArrowBack />
              <p className="text-s font-medium text-secondary-main leading-6">
                Payment Method
              </p>
            </button>
          ) : TopUpStep === 2 ? (
            <button
              className="flex items-center justify-start gap-3"
              onClick={() => {
                setTopUpStep(1);
                setBankPay(false);
              }}
            >
              <IoMdArrowBack />
              <p className="text-s font-medium text-secondary-main leading-6">
                Credit/Debit Card Details
              </p>
            </button>
          ) : null}

          {activeModalChild === 0 ? (
            <button
              className="flex items-center justify-start gap-3"
              onClick={handlePrev}
            >
              <AiFillCloseCircle cursor="pointer" size="2rem" color="#7B7B7B" />
              <p className="text-s font-medium text-secondary-main leading-6">
                Payment Method
              </p>
            </button>
          ) : activeModalChild === 1 ? (
            <button
              className="flex items-center justify-start gap-3"
              onClick={prevModalChild}
            >
              <IoMdArrowBack cursor="pointer" size="2rem" color="#7B7B7B" />
              <p className="text-s font-medium text-secondary-main leading-6">
                Credit/Debit Card Details
              </p>
            </button>
          ) : null}

          {active === 1 ? (
            <button
              className="flex items-center justify-start gap-3"
              onClick={closeSellModal}
            >
              <AiFillCloseCircle cursor="pointer" size="2rem" color="#7B7B7B" />
              <p className="text-s font-medium text-secondary-main leading-6">
                Buy Coin
              </p>
            </button>
          ) : null}
        </header>
        {children}
      </section>

      {/* side bar containing the steps */}
      <aside
        className={`w-full h-16 top-20 lg:w-[25%] lg:h-full fixed lg:right-0 lg:top-0 bg-whiteText ${
          type === "buyAndSell" && "hidden"
        }`}
      >
        {stepInvoice === 0 || stepInvoice === 1 ?
        <div className=" lg:h-20 hidden lg:flex justify-end px-8 items-center text-left">
        <img src={logo} alt="logo" className=" w-[6.375rem] h-[1.25rem] lg:w-[12.75rem] lg:h-[2.5rem] "/>
        </div>
         :""}
        
        <div className="flex gap-2 items-center w-full mt-0 ml-6 pt-2 lg:block lg:mt-40 lg:pt-0">
         {stepper && (step!== 4 || step !== 5) ?
         <p className="font-medium mb-0 text-secondary-main text-s lg:text-sm leading-7 lg:mb-6">
            Steps
          </p> :""}
          {type === "gipperfi" &&
            gipperfiSteps.map((stp, i) => (
              <div
                key={i}
                className="w-full flex justify-start gap-2 items-center mb-0 lg:mb-8"
              >
                <div
                  className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-lg text-whiteText ${
                    i === stepCrypto ? "bg-secondary-main" : "bg-secondary-light"
                  }`}
                >
                  {stp.id}
                </div>
                <p className="hidden lg:block text-s">{stp.text}</p>
              </div>
            ))}
          {type === "swap" &&
            steps.map((step, i) => (
              <div
                key={i}
                className="w-full flex justify-start gap-2 items-center mb-0 lg:mb-8"
              >
                <div
                  className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-lg text-whiteText ${
                    i === activeForm
                      ? "bg-secondary-main"
                      : "bg-secondary-light"
                  }`}
                >
                  {step.id}
                </div>
                <p className="hidden text-s lg:block">{step.text}</p>
              </div>
            ))}

          {/* send gust */}

          {type === "send" && (step === 0 || step === 1 || step === 2 || step === 3) ?
            sendSteps.map((stp, i) => (
              <div
                key={i}
                className="w-full flex justify-start gap-2 items-center mb-0 lg:mb-8"
              >
                <div
                  className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-lg text-whiteText ${
                    i === step ? "bg-secondary-main" : "bg-secondary-light"
                  }`}
                >
                  {stp.id}
                </div>
                <p className="hidden lg:block text-s">{stp.text}</p>
              </div>
            )) :""}

          {/* top up */}
          {type === "topUp" &&
            topUpSteps.map((step, i) => (
              <div
                key={i}
                className="w-full flex justify-start gap-2 items-center mb-0 lg:mb-8"
              >
                <div
                  className={`w-[2rem] h-[2rem]  flex justify-center items-center rounded-lg text-whiteText ${
                    i === TopUpStep ? "bg-secondary-main" : "bg-secondary-light"
                  }`}
                >
                  {step.id}
                </div>
                <p className="hidden text-s lg:block">{step.text}</p>
              </div>
            ))}
            {/* invoice */}
            {type === "invoice" &&
            invoiceSteps.map((step, i) => (
              <div
                key={i}
                className="w-full flex justify-start gap-2 items-center mb-0 lg:mb-8"
              >
                <div
                  className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-lg text-whiteText ${
                    i === stepInvoice
                      ? "bg-secondary-main"
                      : "bg-secondary-light"
                  }`}
                >
                  {step.id}
                </div>
                <p className="hidden text-s lg:block">{step.text}</p>
              </div>
            ))}
        </div>
        {/* <div className="w-[19%] top-5 lg:hidden absolute left-[32%] border border-white-30"></div> */}
        <div className="w-[63%] -z-20 -mt-5 md:w-[63%] lg:hidden  md:left-[12%] ml-[23%] border border-white-30"></div>
      </aside>
    </motion.div>
  );
}

export default ModalBackDrop;
