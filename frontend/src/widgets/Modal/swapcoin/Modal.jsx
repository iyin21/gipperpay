import React, { useState } from "react";
import ModalBackDrop from "../ModalBackDrop";
import Congrats from "./modalforms/Congrats";
import SwapGust from "./modalforms/SwapGust";
import PasswordModal from "./modalforms/PasswordModal";
import SelectNetwork from "./modalforms/SelectNetwork";
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
      type='swap'
      stepper={true}
    >
      {activeForm === 0 ? (
        <SwapGust
          next={next}
          from={props.from}
          setFrom={props.setFrom}
          to={props.to}
          setTo={props.setTo}
        />
      ) : activeForm === 1 ? (
        <SelectNetwork next={next} from={props.from} to={props.to} />
      ) : activeForm === 2 ? (
        <PasswordModal next={next} type="swap" Previous={Previous} />
      ) : activeForm === 3 ? (
        <Congrats
          from={props.from}
          to={props.to}
          setFrom={props.setFrom}
          setTo={props.setTo}
          setShowModal={props.setShowModal}
        />
      ) : null}
    </ModalBackDrop>
  );
}

export default Modal;
