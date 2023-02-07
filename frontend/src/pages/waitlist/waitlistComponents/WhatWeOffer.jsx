import React from 'react'
import { ecommerce, finance, gipperfiActive,productActive, payrollActive, walletpic } from '../../../assets'

function WhatWeOffer() {
    const data= [
        {
            img: walletpic,
            title:'Business wallet',
            desc:"Get fitted with a secured wallet to accept and manage your crypto all in one place."
        },
        {
            img: productActive,
            title:"Checkout",
            desc:"Give your customers a chance to pay with crypto. It's designed to grow your earnings and deliver the best payment experience for your customers"
        },
        {
            img:payrollActive,
            title:"Payroll",
            desc:"The most flexible & compliant payroll system for organizations and freelancers. Hire globally from anywhere"
        },
        {
            img:gipperfiActive,
            title:"Gipperfi",
            desc:"Open a new way to earn interest on your business savings. Get up to 10% APY on your savings"
        },
        {
            img:ecommerce,
            title:"E-commerce store",
            desc:"Create a free e-commerce website and start selling globally with no coding knowledge only a few clicks"
        },
        {
            img:finance,
            title:"Accept payments",
            desc:"Easily receive payment from anyone, anywhere in the world using our tailored tools"
        }
    ]
  return (
    <div className='w-full mt-[6.8rem] '>
        <p className="font-big text-l mb-[4.1rem] leading-10 text-secondary-main flex justify-center">What we offer</p>

        <div className='flex flex-wrap justify-center gap-[3.75rem] pb-[12rem]'>
            {
                data.map((data,index) =>(
                    <div className='w-[18.1rem] py-10 px-5 h-[18.75rem] border-t-2 border-primary-main rounded-xl shadow-[10px_8px_10px_rgba(0,0,0,0.05)]'>
                        <div className='w-12 h-12 flex justify-center items-center rounded-full bg-primary-light'>
                            <img src={data.img} alt="" />
                        </div>

                        <h2 className='font-big text-secondary-main text-sm leading-7 mt-5'>{data.title}</h2>
                        <p className='text-secondary-30 text-s leading-6 font-regular mt-5'>{data.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WhatWeOffer