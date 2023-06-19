import { logo } from "../../../assets/index";
import {GucciBag} from "../../../assets";
import FormikControls from "../../../components/form/Form-controls";
import {  Form, Formik } from "formik";
import CustomButton from '../../../components/form/CustomButton';
import {connect} from "../../../icons";
import { AiOutlineArrowLeft, AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

const MobileConnectWallet=()=>{
    const navigate=useNavigate();
    return(
        <div className="px-8 mt-4">
            
                <div className="flex items-center">
                    <div className="bg-[#F7F7F7] rounded-full p-2 flex-none">
                        <AiOutlineArrowLeft color="#7B7B7B" size={24} className="cursor-pointer" onClick={()=>navigate(navigate(-1))}/>
                        
                    </div>
                    <p  className="text-secondary-main font-medium text-s ml-4 flex-1">Dhee' Store</p>

                    <img
                        src={logo}
                        alt="gipperpaylogo"
                        className=" w-[6.375rem] h-[1.25rem] lg:w-[12.75rem] lg:h-[2.5rem] flex-initial"
                    />
                </div>
                
        
            <div className="flex justify-between mt-8">
                <img src={GucciBag} className="w-[155px]" alt=""/>
                <div>
                    <div className="flex items-center">
                        <AiFillMinusCircle size={24} color="#7B7B7B"/>
                        <p className="text-secondary-main font-medium text-sm mx-4">1 Item</p>
                        <AiFillPlusCircle size={24} color="#7B7B7B"/>
                    </div>
                    <p className="text-secondary-main font-medium text-sm mt-10">Gucci Bag</p>
                </div>     
            </div>
            <div className="flex justify-between mt-10">
                <p className="text-white-30 font-medium text-s">Total Fee</p>
                <h5 className="text-secondary-main font-medium text-m">$4,000.00</h5> 
            </div>
            <p className="text-secondary-main font-medium text-sm mt-8">Connect Wallet</p> 
                <p className="mt-1 text-white-30 text-xxs ">
                    Please connect a wallet to make Payment
                </p>
                
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
                                <label htmlFor="email" className="text-secondary-main font-medium text-s" >Enter Email</label>
                            
                                    <FormikControls
                                        control="input"
                                        name="email"
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                        
                            </div>
                            <CustomButton type="submit" className="lg:w-44 flex justify-center items-center  mt-2" onClick={()=>navigate("/make-payment")}>
                                <img src={connect} className="mr-4" alt=""/>
                                Connect Wallet
                            </CustomButton>
                        </Form>
                    )}
                </Formik>
            <div>

            </div>
        </div>
    )
}
export default MobileConnectWallet