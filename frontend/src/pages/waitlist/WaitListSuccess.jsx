import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from './waitlistComponents/Header'
import JoinCommunity from './waitlistComponents/JoinCommunity'

function WaitListSuccess({registered}) {
    const location = useLocation();
    console.log(location)
  return (
    <div>
        <Header/>
        <JoinCommunity registered={registered}/>
    </div>
  )
}

export default WaitListSuccess