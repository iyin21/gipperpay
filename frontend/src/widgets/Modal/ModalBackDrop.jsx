import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
function ModalBackDrop({ children, text, setShowModal, Previous, activeForm }) {
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
  return (
    <div className="border-2 border-green-500 fixed overflow-y-auto left-0 top-0 w-full h-[100vh] flex bg-white-Main z-20">
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
        </header>
        {children}
      </section>
      <aside className="w-[25%] h-full fixed right-0 top-0 bg-whiteText">
        <div className="w-full mt-40 ml-6">
          <p className="font-medium text-secondary-main text-sm leading-7 mb-6">
            Steps
          </p>
          {steps.map((step, i) => (
            <div
              key={i}
              className="w-full flex justify-start gap-2 items-center mb-8"
            >
              <div
                className={`w-[2rem] h-[2rem] flex justify-center items-center rounded-lg text-whiteText ${
                  i === activeForm ? "bg-secondary-main" : "bg-secondary-light"
                }`}
              >
                {step.id}
              </div>
              <p className="text-s">{step.text}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default ModalBackDrop;
