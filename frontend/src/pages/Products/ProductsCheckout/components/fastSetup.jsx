import { FastSetupImage } from "../../../../assets/index";
import { ItcLogo, Bitcoin  } from "../../../../icons";
import CustomButton from '../../../../components/form/CustomButton';
import { BiRightArrowAlt } from "react-icons/bi";

const FastSetup=()=>{
    return(
       <div className="md:pl-6 py-8 pr-4 lg:pr-0 pb-14">
          <img src={ItcLogo} className="mb-8" alt=""/>
           <div className="lg:flex items-center">        
                <div className="lg:pl-14 pl-4 ">
                    <p className="lg:text-3xl text-xl  font-bold  text-primary-main">Fast Setup</p>
                    <p className="lg:text-xl md:text-l mt-2 text-m ">Enable checkout in web or mobile app quickly with just a few lines of code</p>  
                    <CustomButton className="flex justify-center items-center text-center text-s lg:text-sm mt-6 xs:w-32 sm:w-36 lg:w-40  mt-10"><h1 className="mr-[0.625rem] ">Get started</h1>
            <BiRightArrowAlt size="24px" /></CustomButton> 
                </div>
                <div>
                <img src={FastSetupImage} className="lg:pl-8 pl-4 mt-16 lg:mt-0" alt=""/>
                <div className="md:block flex justify-end">
                    <img src={Bitcoin} className="ml-10 mt-4 md:mr-0 mr-8" alt=""/>
                </div> 
                
                </div>
                
                </div>
            
                
           
       </div>  
    )
}

export default FastSetup;