import React from 'react'
import {BsCashCoin} from 'react-icons/bs'
function PrimaryButton({content}) {
  return (
    <button className='py-3 px-5 text-s flex justify-center
    gap-2 item-center w-28 text-whiteText rounded bg-Rectangle'><BsCashCoin size='1.5rem'/>{content}</button>
  )
}

export default PrimaryButton