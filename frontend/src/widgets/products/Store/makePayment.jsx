import CustomButton from '../../../components/form/CustomButton';
import {Cat, logo} from "../../../assets";
import FormikControls from "../../../components/form/Form-controls";
import {  Form, Formik } from "formik";
import { HiTrash } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";

const MakePayment=()=>{
    const navigate=useNavigate();
    return(
        <div className="mx-6 md:mx-0">
            <div className="flex items-center md:hidden mt-4">
                    <div className="bg-[#F7F7F7] rounded-full p-2 flex-none">
                        <AiOutlineArrowLeft color="#7B7B7B" size={24} className="cursor-pointer" onClick={()=>navigate(-1)}/>
                        
                    </div>
                    <p  className="text-secondary-main font-medium text-s ml-4 flex-1">Dhee' Store</p>

                    <img
                        src={logo}
                        alt="gipperpaylogo"
                        className=" w-[6.375rem] h-[1.25rem] lg:w-[12.75rem] lg:h-[2.5rem] flex-initial"
                    />
                </div>
                <p className="text-white-30 text-xs md:hidden mt-4">gipperpay@gmail.com</p>
            <p className="text-secondary-main font-medium text-sm mt-8">Make Payment</p> 
            <p className="text-secondary-main font-medium  text-s mt-6" >Connected Wallets</p>
            <div className="mt-6 flex items-center">
                <img src={Cat}width={50} height={40} alt="" className="flex-none"/>
                <div className="ml-6 flex-1">
                    <p className="text-secondary-main font-medium text-s flex-1">Metamask</p>
                    <p className="text-white-30 text-xs ">Mrehbasvuyed.................Ytegvsafy</p>
                </div>
                <HiTrash className="flex-initial" size="24px"/>
            </div>
            <div className="flex justify-between p-2 bg-[#F7F7F7] mt-10">
                <div>
                    <p className="text-white-30 font-medium text-s mb-2" >Item Cost</p>
                    <p className="text-white-30 font-medium text-s mb-2" >Transaction Fee</p>
                    <p className="text-white-30 font-medium text-s" >Total</p>
                </div>
                <div>
                    <p className="text-white-30 font-medium text-s mb-2" >4,000 USDT</p>
                    <p className="text-white-30 font-medium text-s mb-2" >3 USDT</p>
                    <p className="text-white-30 font-medium text-s mb-1" >4,003 USDT</p>
                </div>
            </div>
           
            
            <Formik
                initialValues={{
                    email:"",
                    
                }}
            
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ values }) => (
                    
                    <Form>
                        <div className="w-full mb-8 mt-4">
                            <label htmlFor="amount" className="font-medium" >Pay With</label>
                        
                            <FormikControls 
                                control="input"
                                name="price"
                                type="text"
                                placeholder="0.00"
                                prefixIcon={<select className="bg-[#F7F7F7] mr-2">
                                    <option>USDT</option> 
                                </select>}
                                />
                                    
                        </div>
                        <CustomButton type="submit" className="lg:w-44 items-center  text-center">
                            Pay
                        </CustomButton>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default MakePayment;