import React from 'react'
import { bank, cryptoWallet } from '../../assets'

function Destination({setPaymentMethod,setStep,step}) {
    const data = [
       {
        img:bank,
        title:"Send to Bank Account",
        desc:"Send to recepients bank acount Details"
       },
       {
        img:cryptoWallet,
        title:"Send to Crypto Wallet",
        desc:"Send to Crypto Wallet Address"
       },
    ]

    const handleMethod = (index) =>{
        index === 0 ? setPaymentMethod("bank"):
        setPaymentMethod("wallet")
        setStep(step+1)
    }
  return (
    <div className='p-5'>
        {
            data.map((data,index)=>(
                <div key={index} className={`w-full mt-10 p-3 ${index === 0 ? "bg-[#EEF7D4]" : "bg-[#D9E1F2]"} h-[8.75rem] rounded-[10px]`} onClick={()=>handleMethod(index)}>
                    <div>
                        <img src={data.img} alt="" />
                    </div>
                    <h2 className='text-sm mt-[0.6rem] text-secondary-main leading-7 font-medium'>{data.title}</h2>
                    <p className='text-xs mt-[0.6rem] leading-5 text-secondary-main font-regular'>{data.desc}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Destination