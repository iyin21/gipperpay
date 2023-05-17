import React from 'react'

function MakeDonationAside({line}) {
  return (
    <div className='hidden lg:block w-[20%] min-h-[100vh] bg-[#fcfcfc] p-8'>
      <p className='mt-[10rem] text-sm text-secondary-main leading-7 font-medium'>steps</p>
      {
        line.map((line,index) => (
          <div key={index} className="flex justify-start gap-2 items-center mt-[1.5rem]" >
            <div className={`${line.active ? "bg-secondary-main" : "bg-secondary-light"} flex justify-center items-center w-[33px] h-[33px] rounded-[10px]`}>
              <p className={`${line.active ? "text-secondary-light" : "text-secondary-main"}`}>{line.number}</p>
            </div>
            <p>{line.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default MakeDonationAside