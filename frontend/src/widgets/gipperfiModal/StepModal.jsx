import React, { useState } from 'react'
import Payout from './Payout'
import Destination from './Destination'
import Password from './Password'

function StepsModal() {
  const [step,setStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')
  return (
    <div className='fixed top-0 left-0 w-full h-full border-2 border-green-900 bg-whiteText z-10'>
      <p>{step > 0 ? "back" : "close"}</p>
      {
        step === 0 ? (
          <Password setStep={setStep} step={step}/>
        ):
        step === 1 ? (
          <Destination setPaymentMethod={setPaymentMethod} setStep={setStep} step={step}/>
        ):
        step === 2 ? (
          <Payout paymentMethod={paymentMethod} setStep={setStep}/>
        ): null
      }
    </div>
  )
}

export default StepsModal