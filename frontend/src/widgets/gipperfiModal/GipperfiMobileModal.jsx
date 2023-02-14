import React from 'react'

function GipperfiMobileModal({children}) {
  return (
    <div className='fixed bg-whiteText top-0 left-0 w-full h-full border-2 border-black'>{children}</div>
  )
}

export default GipperfiMobileModal