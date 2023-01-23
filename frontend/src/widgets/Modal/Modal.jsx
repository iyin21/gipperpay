import React, { useState } from "react";
import ModalBackDrop from "./ModalBackDrop";
import Congrats from "./modalforms/Congrats";
import SwapOne from "./modalforms/SwapOne";
import SwapThree from "./modalforms/SwapThree";
import SwapTwo from "./modalforms/SwapTwo";
function Modal(props) {
  // a state to handle movement between different form components in the modal
  const [activeForm, setActiveForm] = useState(0);
  const next = () => {
    setActiveForm(activeForm + 1);
  };

  const Previous = () => {
    setActiveForm(activeForm - 1);
  };
  return (
    <ModalBackDrop
      setShowModal={props.setShowModal}
      Previous={Previous}
      activeForm={activeForm}
      text={props.text}
    >
      {activeForm === 0 ? (
        <SwapOne next={next} />
      ) : activeForm === 1 ? (
        <SwapTwo next={next} />
      ) : activeForm === 2 ? (
        <SwapThree next={next} Previous={Previous} />
      ) : activeForm === 3 ? (
        <Congrats setShowModal={props.setShowModal} />
      ) : null}
    </ModalBackDrop>
  );
}

export default Modal;
