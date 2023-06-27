import { ImproveOnboardingImage  } from "../../../../assets/index";
import { SkullIcon, TetherIcon  } from "../../../../icons";

const ImproveOnboarding=()=>{
    return(
       <div className="px-4 bg-white-70 pt-8">
          <img src={SkullIcon} className="md:ml-16" alt=""/>
           <div className="flex flex-col-reverse lg:flex-row">
                
                <img src={ImproveOnboardingImage } className="md:mt-[-100px]" alt=""/>
                <div className="md:ml-8 mt-8">
                    <p className="lg:text-3xl text-xl  font-bold  text-primary-main">Improve Onboarding And Conversion</p>
                    <p className="lg:text-xl md:text-l mt-4 text-m ">Simplify user flows and allow users to start paying the easy and faster way.</p> 
                    <div className="flex justify-end">
                        <img src={TetherIcon} className="hidden lg:block" alt=""/>  
                    </div>
                </div>
                   
                </div>
                
           
       </div>  
    )
}

export default ImproveOnboarding;