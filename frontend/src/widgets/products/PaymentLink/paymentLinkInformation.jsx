import FormikControls from "../../../components/form/Form-controls";
import {  Form, Formik } from "formik";
import {useRef, useState} from "react";
import {PaymentLinkIcon, GustLogo, USDTLogo} from "../../../icons"
import { FiUpload } from "react-icons/fi";
import CustomButton from '../../../components/form/CustomButton';
import { MdCancel, MdRadioButtonChecked } from "react-icons/md";


const PaymentLinkInformation=()=>{
    const ref = useRef(null)
    const [files, setFiles]=useState([])
    const [coin, setCoin]=useState("gust")
    function uploadFiles(e) {
        setFiles([...files, ...e.target.files])
    }

    function deleteFile(e) {
        const newFiles = files.filter((_item, index) => index !== e)
        setFiles(newFiles)
    }
    
    return(
        <div className="bg-whiteText w-full pt-4 pb-10">
            <div className="bg-white-90  lg:mx-40 p-6">
            <div className="flex mb-8">
            <img src={PaymentLinkIcon} alt=""/>
                <div className="ml-4">
                    
                    <h5 className="text-sm font-medium"> Payment Link Information</h5>
                    <p>Fill in Product Details to create Payment link</p>
                </div>
            </div>
            <Formik
                initialValues={{
                    firstName:"",
                    lastName:"",
                    storeName:"",
                    productName:"",
                    
                }}
                
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ values }) => (
                    <Form>
                        <div className="grid sm:grid-cols-2  justify-between gap-8 mb-4 w-full">
                            <div className="w-full">
                                <label htmlFor="firstName" >First Name</label>
                            
                                    <FormikControls
                                        control="input"
                                        name="firstName"
                                        type="text"
                                        placeholder="Gipper"
                                    />
                                        
                            </div>
                            <div className="w-full">
                                <label htmlFor="lastName" className="mb-4">Last Name</label>
                                
                                <FormikControls 
                                    control="input"
                                    name="lastName"
                                    type="text"
                                    placeholder="Pay"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="storeName">Store Name</label>
                                
                                    <FormikControls 
                                    control="input"
                                    name="storeName"
                                    type="text"
                                    placeholder="Dhee”s Store"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="productName">Product Name</label>
                            
                                <FormikControls 
                                        control="input"
                                        name="productName"
                                        type="text"
                                        placeholder="Gucci Bag"/>
                                        </div>
                                        <div>
                                            <label htmlFor="productImage">Product Image</label>
                                        <div
                            className="rounded bg-[#F7F7F7] border border-dashed border-primary-90 w-full p-3 cursor-pointer flex py-6"
                            onClick={() => {
                                ref.current?.click()
                            }}
                        >
                            <FiUpload color="#7B7B7B" size="22px"/><p className="ml-4">Drag and drop image here or <span className="text-[#0F0D76]">Browse</span> </p>
                            
                        </div>
                        <input
                        data-testid="file-upload"
                        className="hidden"
                        ref={ref}
                        type="file"
                        onChange={uploadFiles}
                        />
                        
                    {files.length > 0 &&
                        files.map((item, index) =>(
                                <div key={index} className="relative rounded bg-[#F7F7F7] mt-10 flex items-center p-4">
                                    <img
                                       
                                        src={URL?.createObjectURL(
                                            new Blob([item], {
                                                type: "application/zip",
                                            })
                                        )}
                                        alt="findersforce"
                                        className="w-[30px] h-[30px] object-cover rounded-xl flex-none"
                                    />
                                    <p className="text-secondary-main font-medium text-s flex-1  ml-4">{item.name}</p>
                                    <button
                                        type="button"
                                        onClick={() => deleteFile(index)}
                                        className="flex-initial"
                                    >
                                        
                                        <MdCancel size="1rem" color="#7B7B7B" />
                                        
                                        </button>
                                                </div>
                                            )
                                        )}
                                        </div>
                                        <div className="w-full">
                                        <label htmlFor="productDescription">Product Description</label>
                                    
                                            <FormikControls 
                                                control="textarea"
                                                name="productDescription"
                                                type="text"
                                                placeholder="Enter a description..."
                                                />
                                        </div>
                                        
                                        <div className="w-full">
                                            <label htmlFor="coin" >Select Coin to Receive With</label>
                                            <div className={`flex justify-between w-full border border-black-10 h-12 md:h-14 mt-4 rounded p-2 md:p-4 items-center`}>
                                                <div className="bg-[#F7F7F7] flex items-center p-2 rounded-[5px]">
                                                   <img src={GustLogo} alt=""/>
                                                    <p className="pl-1">GU$T</p>   
                                                </div>
                                                <MdRadioButtonChecked onClick={()=>setCoin("gust")} color={`${coin==="gust"? "#FA3C12":"#7B7B7B"}`} size="24px"/>
                                            </div>              
                                        </div>
                                        
                                        <div className="w-full md:hidden block">
                                            
                                            <div className={`flex justify-between w-full border border-black-10 h-12 md:h-14 rounded p-2 md:p-4 items-center`}>
                                            <div className="bg-[#F7F7F7] flex items-center p-2 rounded-[5px]">
                                            <img src={USDTLogo} alt=""/>
                                            <select className="bg-[#F7F7F7]">
                                                <option> USDT</option> 
                                            </select>
                                            </div>
                                            <MdRadioButtonChecked onClick={()=>setCoin("usdt")} color={`${coin==="usdt"? "#FA3C12":"#7B7B7B"}`} size="24px"/>
                                            </div>
                                        </div> 
                                        <div className="w-full">
                                        <label htmlFor="lastName">Price</label>
                                    
                                        <FormikControls 
                                            control="input"
                                            name="price"
                                            type="text"
                                            placeholder="0.00"
                                            prefixIcon={<select className="bg-[#F7F7F7] mr-2">
                                                <option>USD</option> 
                                            </select>}
                                            />
                                            
                                        </div>
                                        <div className="w-full hidden md:block">
                                            
                                            <div className={`flex justify-between w-full border border-black-10 h-12 md:h-14 rounded p-2 md:p-4 items-center`}>
                                            <div className="bg-[#F7F7F7] flex items-center p-2 rounded-[5px]">
                                            <img src={USDTLogo} alt=""/>
                                            <select className="bg-[#F7F7F7]">
                                                <option> USDT</option> 
                                            </select>
                                            </div>
                                            <MdRadioButtonChecked onClick={()=>setCoin("usdt")} color={`${coin==="usdt"? "#FA3C12":"#7B7B7B"}`} size="24px"/>
                                            </div>
                                        </div> 
                                        <div className="w-full">
                                        <label htmlFor="lastName">Qty Available</label>
                                    
                                        <FormikControls 
                                            control="input"
                                            name="quantity"
                                            type="number"
                                            placeholder="0"/>
                                        </div>
                            </div>
                            <CustomButton type="submit" className="lg:w-40">Create Product</CustomButton>
                         </Form>
                         )}
                     </Formik>
            </div>
        </div>
    )
}
export default PaymentLinkInformation;