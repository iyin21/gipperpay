import React from 'react'
import {FaWallet} from "react-icons/fa"
import PrimaryButton from '../../../../widgets/buttons/PrimaryButton'
import CustomButton from '../../../../components/form/CustomButton'

const Products = () => {
  return (
    <div className='flex-row lg:flex pl-8 min-h-screen'>
        <div className='w-full lg:w-[60%]'>
         <p className='font-medium text-l leading-10'>My Products</p>
         <div className='flex justify-center m-auto mt-64 items-center'>
            <div className='m-auto text-center'>
                <p className='text-white-30 text-s font-regular leading-5 mb-1'>You Have no Products yet Get a <br/> payment link to create product</p>
                <CustomButton>Create link</CustomButton>
            </div>
         </div>
        </div>
        <div className='w-full lg:w-[40%] bg-white-60 rounded-sm pt-4 pl-8 pr-16'>
            <div className='flex gap-4 h-auto items-center'>
                <div>
                <div className='w-[30px] h-[30px] flex items-center m-auto rounded-full justify-center bg-primaryLight'>
                    <FaWallet color="#FA3C12"/>
                </div>
                </div>
                <p  className='font-medium text-secondary-main text-s leading-4'>Wallet</p>
            </div>
            <div className='flex justify-between '>
                <div>
                    <p className='text-white-30 text-s font-regular leading-5'>Amount received</p>
                    <p className='font-big text-secondary-main text-sm leading-6'>$0.00</p>
                </div>
                <div>
                <PrimaryButton content="Payout" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products