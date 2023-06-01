import React, { useState } from 'react'
import Earn from './Earn'
import Freeze from './Freeze'
import GipperfiMobileModal from './GipperfiMobileModal'
import Stake from './Stake'

function MobileModal({handleClose,type}) {
  
  const [stepsModal, setStepsModal] = useState(false)
  const showModal =()=>{
    setStepsModal(true)
  }
  
  return (
    <GipperfiMobileModal handleClose={handleClose}>
      <div className='w-full lg:w-[40%] mt-2 pb-10'>
        {
          type === "fund" ? (
            <Earn stepsModal={stepsModal} handleClose={handleClose} showModal={showModal}/>
          ) :
          type === "stake" ? (
            <Stake stepsModal={stepsModal} handleClose={handleClose} showModal={showModal}/>
          ):
          type=== "freeze" ? (
            <Freeze stepsModal={stepsModal} handleClose={handleClose} showModal={showModal}/>
          ): null
        }
        </div>
    </GipperfiMobileModal>
  )
}

export default MobileModal