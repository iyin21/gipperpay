import React, { useState } from 'react'
import ModalBackDrop from '../ModalBackDrop'
import SendGust from './forms/SendGust'

function SendCoinModal({setShowSendModal}) {
    const [step,setStep] = useState(0)
    const next = () =>{
        setStep(step + 1)
    }
  return (
    <ModalBackDrop setShowSendModal={setShowSendModal} step={step}>
        {
            step === 0 ? (<SendGust nextStep={next} />) : null
        }
        
    </ModalBackDrop>
  )
}

export default SendCoinModal