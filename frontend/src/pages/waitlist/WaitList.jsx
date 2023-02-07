import React from 'react'
import Header from './waitlistComponents/Header'
import HeroSection from './waitlistComponents/HeroSection'
import WhatWeOffer from './waitlistComponents/WhatWeOffer'
import WhoCanUse from './waitlistComponents/WhoCanUse'

function WaitList() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <WhoCanUse/>
      <WhatWeOffer/>
    </div>
  )
}

export default WaitList