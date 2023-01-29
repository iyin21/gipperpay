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
  type,
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

  console.log(type);

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
  return (
    <div className="fixed overflow-y-auto left-0 top-0 w-full h-[100vh] flex bg-white-Main z-50">
      <section className="bg-white-Main min-h-[100vh] w-[75%]">
        <header className="w-full flex justify-start pl-8 items-center gap-3 bg-whiteText h-20">
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
        </header>
        {children}
      </section>
      {/* side bar containing the steps */}
      <aside className="w-[25%] h-full fixed right-0 top-0 bg-whiteText">
        <div className="w-full mt-40 ml-6">
          <p className="font-medium text-secondary-main text-sm leading-7 mb-6">
            Steps
          </p>
          {type === "swap" &&
            steps.map((step, i) => (
              <div
                key={i}
                className="w-full flex justify-start gap-2 items-center mb-8"
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
                <p className="text-s">{step.text}</p>
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
        </div>
      </aside>
    </div>
  );
}

export default ModalBackDrop;
