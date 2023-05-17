import React, { useState } from 'react'
import Payout from './Payout'
import Destination from './Destination'
import Password from './Password'
import {BiArrowBack} from 'react-icons/bi'

function StepsModal({handleClose}) {
  const [step,setStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')
  return (
    <div className='fixed top-0 left-0 w-full h-full border-2 border-green-900 bg-whiteText z-10'>
      <div className='p-5' onClick={() =>{
        step === 1 ? handleClose() : setStep(step-1)
      }} >{ step === 1 ? (
        <div className='flex items-center gap-2'><BiArrowBack/> <p>Destination</p></div>
      ) : (
        <div className='flex items-center gap-2'><BiArrowBack/> <p>Payout</p></div>
      )}</div>
      {
        step === 0 ? (
          <Password setStep={setStep} handleClose={handleClose} step={step}/>
        ):
        step === 1 ? (
          <Destination setPaymentMethod={setPaymentMethod} setStep={setStep} step={step}/>
        ):
        step === 2 ? (
          <Payout handleClose={handleClose} paymentMethod={paymentMethod} setStep={setStep}/>
        ): null
      }
    </div>
  )
}

export default StepsModal