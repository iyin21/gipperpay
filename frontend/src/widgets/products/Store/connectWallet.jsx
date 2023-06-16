import FormikControls from "../../../components/form/Form-controls";
import {  Form, Formik } from "formik";
import {connect} from "../../../icons";
import CustomButton from '../../../components/form/CustomButton';

const ConnectWallet=({handleConnect})=>{
    return(
        <div>
            <p className="text-secondary-main font-medium text-sm">Connect Wallet</p>
                        <p className="mb-6 text-white-30 text-xs ">
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
                                    <div className="w-full mb-8">
                                        <label htmlFor="firstName" >Enter Email</label>
                                    
                                            <FormikControls
                                                control="input"
                                                name="email"
                                                type="text"
                                                placeholder="Enter Email"
                                            />
                                                
                                    </div>
                                    <CustomButton type="submit" className="lg:w-44 flex justify-center items-center " onClick={handleConnect}>
                                        <img src={connect} className="mr-4" alt=""/>
                                        Connect Wallet
                                    </CustomButton>
                                </Form>
                            )}
                        </Formik>
        </div> 
    )
}
export default ConnectWallet;