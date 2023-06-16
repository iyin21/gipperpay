import React from 'react'
import PaymentLinkHeader from "./paymentLinkHeader";
import PaymentLinkInformation from "./paymentLinkInformation"

function PaymentLink({setActiveLink}){
     
    return(
        
        <div className=' flex  items-start w-full'>
            <div className="w-full lg:w-[80%]">
            <PaymentLinkHeader title="Payment Link" setActiveLink={setActiveLink}/>
            <PaymentLinkInformation/>
            </div>
            
         </div>
        
    )
}

export default PaymentLink;

