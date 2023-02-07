import React from "react";
import { checkwhocan, Rectanglewhocan, whocan1, whocan2 } from "../../../assets";

function WhoCanUse() {
    const data = [
        {
            img: checkwhocan,
            title:"Startup",
            desc:"High-ranked start-ups use gipperpay API to accept crypto payment, letting users be able to pay with crypto"
        },
        {
            img: checkwhocan,
            title:"E-commerce",
            desc:"Put your business across borders by using our e-commerce storefront to sell to people around the world with ease."
        },
        {
            img: checkwhocan,
            title:"Freelancers",
            desc:"Receive payment in crypto for your International gigs and get settled in your local currency with no delay"
        }
    ]

    const data2 = [
        {
            img: checkwhocan,
            title:"Large organization",
            desc:"Easily process payroll for your employee, focus on building your company or organization let's focus on helping you keep employees happy, while you stay compliant."
        },
        {
            img: checkwhocan,
            title:"NGO/campaign",
            desc:"Be limitless with your fundraising, when you can raise from anywhere in the world in cryptocurrency"
        }
    ]
  return (
    <div className="w-full py-[6.25rem]">
      <h2 className="font-big text-l mb-[4.1rem] leading-10 text-secondary-main flex justify-center">
        Who can use Gipperpay?
      </h2>
      <div className="w-full items-center flex justify-center gap-[4.25rem]">
        <div className="relative">
          <img src={whocan1} className="relative z-10" alt="" />
          {/* rectangle */}
          <div className="h-[37.5rem] absolute -top-10">
            <img src={Rectanglewhocan} alt="" />
          </div>
          {/*  */}
        </div>

        <div className=" w-[26%]">
            {
                data.map((data,index)=>(
                    <div key={index} className="flex items-center gap-3 mb-[4.25rem]">
                        <div><img src={data.img} alt="" /></div>
                        <div>
                            <h2 className="text-m text-primary-main leading-8 font-big">{data.title}</h2>
                            <p className="text-s leading-6 text-secondary-main font-regular mt-[0.3rem]">{data.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>

      <div className="w-full mt-[6.8rem] flex items-center justify-center flex-row-reverse gap-[4.25rem]">
        <div className="relative">
          <img src={whocan2} className="relative z-10" alt="" />
          {/* rectangle */}
          <div className="h-[37.5rem] absolute -top-10">
            <img src={Rectanglewhocan} alt="" />
          </div>
          {/*  */}
        </div>

        <div className="w-[26%]">
            {
                data2.map((data,index)=>(
                    <div key={index} className="flex items-center gap-3 mb-[4.25rem]">
                        <div><img src={data.img} alt="" /></div>
                        <div>
                            <h2 className="text-m text-primary-main leading-8 font-big">{data.title}</h2>
                            <p className="text-s leading-6 text-secondary-main font-regular mt-[0.3rem]">{data.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default WhoCanUse;
