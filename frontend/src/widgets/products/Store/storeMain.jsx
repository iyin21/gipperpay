import {GucciBag, Progress, Shoe} from "../../../assets";
import CustomButton from '../../../components/form/CustomButton';
import ProductCard from "../../../pages/dashboard/dashboard-components/products/components/productCard";
import { useNavigate } from 'react-router-dom'
import MakePayment from "./makePayment";
import ConnectWallet from "./connectWallet";
import {useState} from "react";

const StoreMain=()=>{
    const navigate=useNavigate();

    const [stage, setStage]=useState("connectWallet")
    const products= [
        {image:GucciBag, name:"Gucci Bag", price:"$4000.00", itemsLeft:0, description:"the description of the product would be Displayed Here"},
        {image:Shoe, name:"Product Name", price:"$0.00", itemsLeft:0, description:"the description of the product would be Displayed Here"}
]
    return(
        <div className="md:bg-whiteText w-full pt-4 px-8 pb-10">
            <div className="bg-white-90  p-4">
                <div className="flex md:pr-6">
                    <div className="md:w-[60%] md:pr-20 ">
                        <img src={GucciBag} className="w-full" alt=""/>
                        <CustomButton type="submit" className="w-full items-center mt-8 md:hidden" onClick={()=>{console.log("rrr");navigate("/connect-wallet")}}>
                          Buy now              
                        </CustomButton>
                        <p className="text-secondary-main font-medium text-sm mt-16">Gucci Bag</p>
                    
                        <p className="text-secondary-main font-medium text-m mt-6">$4000.00</p> 
                        <p className="mt-6 text-white-30 text-xs ">
                            Lorem ipsum dolor sit amet consectetur. 
                            Praesent habitant lectus commodo est. Scelerisque convallis tempus vitae sem lobortis ultricies viverra lobortis eget.
                            Gravida quam nibh ultricies eget congue. Purus hendrerit mauris orci diam vestibulum vitae suspendisse scelerisque.
                        </p>
                        <p className="mt-6 text-white-30 font-medium mb-1">0 of 20 items left</p>
                        <img src={Progress} alt=""/>
                    </div>
                    <div className="border-l-[1.5px] border-l-white-20 mt-10 pt-36 pl-10 mb-8 lg:w-[40%] hidden md:block">
                        {
                            stage==="connectWallet" ?(
                                <ConnectWallet handleConnect={()=>setStage("MakePayment")}/>
                            ):(
                                <MakePayment />
                            )
                        }
                    </div>
                </div>
            </div>   
            <div className="md:w-[60%]">
                <p className="text-secondary-main font-medium text-sm mt-4">More Products</p>
                <div className="grid gap-10 md:grid-cols-2 lg:mr-10 mt-4 pr-4">
                        {products.map((item, index)=>(
                            <ProductCard key={index} image={item.image} name={item.name} price={item.price} itemsLeft={item.itemsLeft} description={item.description}/>
                            )
                        )}
                </div>
            </div> 
            
        </div>  
    )
}

export default StoreMain;

