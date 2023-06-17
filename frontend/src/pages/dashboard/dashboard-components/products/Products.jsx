import React from 'react'
import {FaWallet} from "react-icons/fa"
import PrimaryButton from '../../../../widgets/buttons/PrimaryButton'
import EmptyState from "./components/emptyState";
import { useNavigate } from 'react-router-dom'
import ProductCard from "./components/productCard";
import {GucciBag, Naira} from "../../../../assets"

const Products = () => {
    const navigate=useNavigate();
    const products= [
        {image:GucciBag, name:"Gucci Bag", price:"$4000.00", itemsLeft:0, description:"the description of the product would be Displayed Here"},
        {image:Naira, name:"Product Name", price:"$0.00", itemsLeft:0, description:"the description of the product would be Displayed Here"}
    ]
  return (
      <div>
        <div className='flex-col-reverse lg:flex-row flex pl-8 min-h-screen'>
            <div className='w-full lg:w-[65%] '>
            <p className='font-medium text-l leading-10'>My Products</p>
            
            {products.length>0 ?(
                <div className="grid gap-10 md:grid-cols-2 lg:mr-10 my-4 mr-8">
                    {products.map((item, index)=>(
                        <ProductCard key={index} image={item.image} name={item.name} price={item.price} itemsLeft={item.itemsLeft} description={item.description} handleClick={()=>navigate("/store")}/>
                        )
                    )}
                </div>
                ):(
                <EmptyState/>
            )}
            
            </div>
            <div className='w-full lg:w-[35%] lg:bg-white-60 rounded-sm pt-4 pr-8 '>
                <div className='flex gap-4 h-auto items-center'>
                    <div>
                    <div className='w-[30px] h-[30px] flex items-center m-auto rounded-full justify-center bg-primaryLight'>
                        <FaWallet color="#FA3C12"/>
                    </div>
                    </div>
                    <p  className='font-medium text-secondary-main text-s leading-4'>Wallet</p>
                </div>
                <div className='flex justify-between mt-5'>
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
    </div>
  )
}

export default Products