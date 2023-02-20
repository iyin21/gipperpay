import React from 'react'
import CreateDonationAside from './createDonationComponents/CreateDonationAside'
import CreateDonationMain from './createDonationComponents/CreateDonationMain'

function CreateDonation({setActiveLink}) {
  return (
    <div className='min-h-[100vh] flex justify-center items-start w-full'>
        <CreateDonationMain setActiveLink={setActiveLink}/>
        <CreateDonationAside/>
    </div>
  )
}

export default CreateDonation