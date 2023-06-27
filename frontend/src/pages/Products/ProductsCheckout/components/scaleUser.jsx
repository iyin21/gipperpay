import { Crypto, Line, Stick  } from "../../../../assets/index";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {useState} from "react";

const ScaleUser=()=>{
    const [count, setCount]=useState(0);
    const desc= [{
        title:"Seamless Integration", 
        body:"Integrating checkout into your existing website or E-commerce platform is a breeze. our developer-friendly APIs and plugins make the integration process smooth and hassle-free, allowing you to start accepting cryptocurrencies in no time.whether you're a small business or an enterprise , we adapts to your needs , empowering you to unlock the full potential of crypto payments.", 
    },
    {
        title:"Enhanced Trust And Privacy", 
        body:"Transparency and privacy are the core of Gipperpay’s checkout feature . built on blockchain technology , our platform ensures that customer information is protected and transactions are traceable , providing an extra layer of trust and accountability . your customers can feel confident knowing that their personal data is secure , fostering long-term relationships and brand identity", 
    },
    {
        title:"Global Reach, Local Advantage", 
        body:"expand your business horizons with Gipperpay’s global reach . Tap into a borderless market and reach customers around the world without the complexities of currency conversions or international fees . whether you are selling to customers in new York or Tokyo, checkout enables you to accept payments effortlessly breaking down geographical barriers and opening new growth opportunities.", 
    },
    {
        title:"Secure And Instant Payments", 
        body:"with Gipperpay. your customers can enjoy secure and instant payments using their preferred cryptocurrencies . our robust blockchain infrastructure ensures that transactions are encrypted , protecting both you and your customers from fraud and unauthorised access. say goodbye to chargebacks and payment delays, and embrace the speed and security of decentralized payments.", 
    }
]

    return(
       <div className="bg-white-70 pt-8">
           <h5 className="md:text-2xl text-sm text-secondary-main text-center font-bold w-[80%] mx-auto ">Scale User Adoption by building frictionless crypto checkout experience</h5>
           <div className="flex justify-center lg:flex-row flex-col">
                <img src={Crypto} alt="" className="sm:-mt-10"/>
                <div>
                    {desc.map((item, index)=>(
                        <div key={index} className="bg-white-90 h-fit xl:w-[370px] lg:w-[70%] md:w-[60%] w-[80%] mx-auto py-4 mt-24 rounded lg:hidden block ">
                        <div className="flex justify-end">
                            <img src={Stick}  alt=""/>
                        </div>
                        <p className="text-[#A288C1] text-l font-bold px-6">{item.title}</p>   
                        <img src={Line} alt=""/>
                        <p className="text-white-main-40 px-6 mt-8">{item.body}</p>
    
                    </div>
                    ))}
                    
                 <div className="bg-white-90 h-fit xl:w-[370px] lg:w-[70%] md:w-[60%] w-[80%] mx-auto py-4 mt-24 rounded hidden lg:block">
                        <div className="flex justify-end">
                            <img src={Stick}  alt=""/>
                        </div>
                        <p className="text-[#A288C1] text-l font-bold px-6">{count===0?desc[0].title: count===1? desc[1].title: count===2? desc[2].title: desc[3].title}</p>   
                        <img src={Line} alt=""/>
                        <p className="text-white-main-40 px-6 mt-8">{count===0?desc[0].body: count===1? desc[1].body: count===2? desc[2].body: desc[3].body}</p>
                    </div>
                <div className="lg:flex hidden justify-end">
                    <BsFillArrowRightCircleFill size="30px" onClick={()=>count === 3 ? setCount(0) : setCount(count+1)}/>
                </div>
                
                </div>
               

               
           </div>
       </div>  
    )
}

export default ScaleUser;