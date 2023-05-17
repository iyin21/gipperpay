import React from 'react'
import FreelanceForm from './FreelanceForm'
import { payrollItems } from '../Payroll'

const Freelance = () => {
   
  return (
    <div>
        {payrollItems.map(({ img, title, desc, checker }, index) => (
        !checker && <div
            key={index}
            
            className={
              
                 "bg-lightGreen rounded-md px-4 py-3 flex h-auto gap-3 items-center w-full"
            }
          >
            <div className="w-[40px] h-[40px] rounded-full flex justify-center text-center items-center bg-whiteText">
              <img src={img} alt={title} className="w-[10px] h-auto" />
            </div>

            <div>
              <p className="text-secondary-50 font-medium text-sm ">{title}</p>
              <p className="text-lightWhite w-full leading[18px] my-3 font-medium text-xs">
                {desc}
              </p>
            </div>
          </div>
        ))}
        <h3 className='text-center text-s font-medium mt-2'>Send invoice</h3>
       <FreelanceForm/>
    </div>
  )
}

export default Freelance