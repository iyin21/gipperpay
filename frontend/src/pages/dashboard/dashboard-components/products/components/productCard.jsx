import { MdDeleteForever, MdEdit, MdOutlineLink } from "react-icons/md";
import Progress from "../../../../../assets/progress.svg";
import { useNavigate } from 'react-router-dom'

const ProductCard=({image, name, price, itemsLeft, description, handleClick})=>{
    const navigate=useNavigate();
    return(
        <div className="w-full">
            <img src={image} alt="" className="w-full rounded-t-[20px] object-cover" onClick={handleClick} />
            
            <div className="flex mt-2 justify-between ">
                <p className="text-secondary-main font-medium text-s">{name}</p>
                <div className="grid grid-cols-3 gap-2 text-s">
                    <MdDeleteForever color="#A4A4A4" size="20px" className="cursor-pointer"/>
                    <MdEdit color="#A4A4A4" size="20px" className="cursor-pointer"/>
                    <MdOutlineLink color="#FA3C12" size="20px" className="cursor-pointer" onClick={()=>navigate("/payment-link")}/>
                </div>
            </div>
            <p className="text-secondary-main font-medium text-m mt-1">{price}</p>
            <p className="mt-2 text-white-30 font-medium mb-1">{itemsLeft} of 20 items left</p>
            <img src={Progress} alt=""/>
            <p className="mt-2 text-white-30 text-xs mr-16">{description}</p>
        </div> 
    )
}
export default ProductCard;
