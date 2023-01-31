import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
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
  setTopUpStep
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
  return (
    <div className="fixed overflow-y-auto left-0 top-0 w-full h-[100vh] flex bg-white-Main z-50">
      <section className="bg-white-Main min-h-[100vh] w-full lg:w-[75%]">
        <header className="w-full fixed top-0 left-0 flex justify-start pl-8 items-center gap-3 bg-whiteText h-20 lg:relative">
          {activeForm === 0 ? (
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
          ) : null}

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
              onClick={()=>setTopUpStep(1)}
            >
              <IoMdArrowBack />
              <p className="text-s font-medium text-secondary-main leading-6">
                Credit/Debit Card Details
              </p>
            </button>
          ) : null}
        </header>
        {children}
      </section>
      {/* side bar containing the steps */}
      <aside className="w-full h-12 top-20 lg:w-[25%] lg:h-full fixed lg:right-0 lg:top-0 bg-whiteText">
        <div className="flex gap-2 items-center w-full mt-0 ml-6 pt-2 lg:block lg:mt-40 lg:pt-0">
          <p className="font-medium mb-0 text-secondary-main text-s lg:text-sm leading-7 lg:mb-6">
            Steps
          </p>
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

          {type === "send" &&
            sendSteps.map((stp, i) => (
              <div
                key={i}
                className="w-full flex justify-start gap-2 items-center mb-8"
              >
                <div
                  className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-lg text-whiteText ${
                    i === step ? "bg-secondary-main" : "bg-secondary-light"
                  }`}
                >
                  {stp.id}
                </div>
                <p className="text-s">{stp.text}</p>
              </div>
            ))}

          {/* top up */}
          {type === "topUp" &&
            topUpSteps.map((step, i) => (
              <div
                key={i}
                className="w-full flex justify-start gap-2 items-center mb-0 lg:mb-8"
              >
                <div
                  className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-lg text-whiteText ${
                    i === TopUpStep ? "bg-secondary-main" : "bg-secondary-light"
                  }`}
                >
                  {step.id}
                </div>
                <p className="hidden text-s lg:block">{step.text}</p>
              </div>
            ))}
        </div>
      </aside>
    </div>
  );
}

export default ModalBackDrop;
