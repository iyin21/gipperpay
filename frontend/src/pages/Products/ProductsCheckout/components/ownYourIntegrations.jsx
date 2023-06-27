import { Ipad,IPhone12Graphite } from "../../../../assets/index";
import { Sol, Logo  } from "../../../../icons";


const OwnYourIntegrations=()=>{
    return(
       <div className="lg:pl-8 pl-2 mt-8 pb-20">
          <img src={Logo} alt=""/>
           <div className="lg:flex items-center mt-6">
                <div className="w-[90%] lg:w-[100%] mx-auto">
                <p className="lg:text-3xl md:text-l text-sm font-bold text-secondary-40 lg:text-left text-center lg:pl-8">Own Your <span className="text-primary-main">Integrations</span>  With 24/7 Developers Support And Securities For Keys.</p> 
                <div className="flex justify-end">
                <img src={Sol} className="hidden lg:block" alt=""/>
                </div>
                    
                </div>
                <img src={Ipad} alt="" className="ml-6 hidden lg:block " width="700px"/>
                <div className=" mt-10 lg:hidden flex items-start w-[80%] mx-auto">
                  <img src={IPhone12Graphite} alt="" className="mr-4 mt-4 lg:hidden block" width="700px"/>
                  <img src={Sol} width="30px" className="mt-4"  alt=""/>
                </div>
               
                   
                   
                </div>
                
                
           
       </div>  
    )
}

export default OwnYourIntegrations;