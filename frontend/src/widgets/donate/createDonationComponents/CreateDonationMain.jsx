import React from 'react'
import DonationDetails from './DonationDetails'
import Header from './Header'

function CreateDonationMain({setActiveLink}) {
  return (
    <div className='w-full lg:w-[70%] bg-[#F7F7F7]'>
      <Header setActiveLink={setActiveLink}/>
      <DonationDetails/>
    </div>
  )
}

export default CreateDonationMain