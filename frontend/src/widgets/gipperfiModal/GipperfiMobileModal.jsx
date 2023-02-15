import React from 'react'
import { IoMdArrowBack } from "react-icons/io";

function GipperfiMobileModal({children, handleClose}) {
  return (
    <div className='fixed bg-whiteText top-0 left-0 w-full h-full overflow-scroll z-50'>
      <div className='flex gap-2 items-center p-2' onClick={()=>handleClose("close")}><IoMdArrowBack className='text-white-30'/> <p className='text-sm text-secondary-main leading-7 font-medium'>back</p></div>
      {children}
      </div>
  )
}

export default GipperfiMobileModal