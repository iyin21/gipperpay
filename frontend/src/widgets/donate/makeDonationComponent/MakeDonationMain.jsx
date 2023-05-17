import React from 'react'
import MakeDonationDetails from './MakeDonationDetails'
import MakeDonationHeader from './MakeDonationHeader'

function MakeDonationMain({handleSetActive, email, setEmail, active, setActiveLink }) {
  return (
    <div  className="w-full lg:w-[80%] bg-[#F7F7F7] pb-10">
      <MakeDonationHeader setActiveLink={setActiveLink}/>
      <MakeDonationDetails handleSetActive={handleSetActive} active={active} email={email} setEmail={setEmail}/>
    </div>
  )
}

export default MakeDonationMain