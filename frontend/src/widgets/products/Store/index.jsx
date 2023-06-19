import PaymentLinkHeader from "../PaymentLink/paymentLinkHeader"
import StoreASide from "./storeAside";
import StoreMain from "./storeMain";

const Store =({setActiveLink})=>{
    return(
        <div  className=' flex  items-start w-full'>
            <div className="w-full lg:w-[80%]">
                <PaymentLinkHeader title="Dhee’s Store" setActiveLink={setActiveLink}/>
                <StoreMain/>
            </div>
            
            <StoreASide/>
        </div> 

    )
}

export default Store;