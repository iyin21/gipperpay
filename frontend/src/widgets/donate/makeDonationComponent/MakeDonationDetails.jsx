import React ,{useState} from "react";
import { donatePeriod, gustCoin, metamask, tenEur } from "../../../assets";
import BuyAndSellSuccessModal from "../../Modal/buy/BuyAndSellSuccessModal";
import { connect } from "../../../icons";
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {AiOutlineDown} from 'react-icons/ai'
function MakeDonationDetails({handleSetActive, email, setEmail, active}) {
 const [gust, setGust]= useState('')
 const handleChange =(e) =>{
  setGust(e.target.value)
 }
  return (
    <div className="w-full lg:w-[90%] flex flex-col lg:flex-row justify-center gap-8 p-5 bg-[#fcfcfc] mx-auto">
     {active === 1 || active === 0 ?  
      <div className="w-full lg:w-[60%]">
      <div className="w-full lg:w-[31.3rem] h-[18.75rem] rounded-[10px]">
        <img
          src={tenEur}
          className="w-full h-full object-cover rounded-[10px]"
          alt=""
        />
      </div>

      <h2 className="mt-10">Mary Stans Foundations</h2>
      <p className="mt-5 w-full lg:w-[80%] text-xs font-regular leading-[18px] text-white-30">
        Lorem ipsum dolor sit amet consectetur. Praesent habitant lectus
        commodo est. Scelerisque convallis tempus vitae sem lobortis ultricies
        viverra lobortis eget. Gravida quam nibh ultricies eget congue. Purus
        hendrerit mauris orci diam vestibulum vitae suspendisse scelerisque.
      </p>

      <div>
        <p className="mt-5">285 Days Left</p>
        <div className="mt-[.6rem]">
          <img src={donatePeriod} alt="" />
        </div>
      </div>
    </div>
     :''
     }
      
      <div className="w-full lg:w-[30%]">
        {
          active === 0 ? (
            <div className="lg:flex lg:pt-40 items-center lg:border-l-2 lg:border-white-30 lg:h-[30.1rem] lg:pl-10 ">
            <form action="" className=" flex-col h-full justify-center">
              <h2 className="text-secondary-main text-sm leading-7 font-medium mb-[3px]">Connect Wallet</h2>
              <p className="text-xs text-white-30 font-regular leading-5">Please connect a wallet to make donation</p>
              <div className="mt-5 text-secondary-main text-sm leading-7 font-medium mb-[3px]">
                <label htmlFor="" className=" text-secondary-main text-xs leading-5 font-medium mb-[3px]">Enter Email</label>
                <input type="text" name="" value={email} onChange={(e)=>setEmail(e.target.value)} id="" className="w-[100%] h-[3.1rem] text-xs px-5 py-[15.5px] rounded-[5px] border border-secondary-20 placeholder:text-xs font-regular" placeholder="Enter Email" />
              </div>
              <button className="flex w-full lg:w-[10.8rem] mt-5 items-center gap-2 justify-center rounded-[5px]  bg-primary-main py-5 lg:py-2 px-5 rounded-6" onClick={handleSetActive}>
                <img src={connect} alt="" />
                <p className=" text-white-Main text-s">Connect Wallet</p>
              </button>
            </form>
          </div>
          ): active === 1 ?
          (
            <div className="pb-5">
              <h2 className="text-sm text-secondary-main font-medium leading-5 ">Make A donation</h2>
              <p className="text-xs text-white-30 font-regular leading-[18.7px] mt-[3px]">Enter the amount you want to donate using your available stable coin </p>
              <h2 className="text-s text-secondary-main font-regular leading-6 my-5">Connected Wallets</h2>
              <div className="flex justify-around items-center w-[18.6rem]">
                <div className="h-[40px] w-[40px]">
                  <img src={metamask} alt="" />
                </div>

                <div>
                  <p className="text-s text-secondary-main font-regular leading-6">Metamask</p>
                  <p className="text-xs text-white-30 font-regular leading-[18.7px]">Mrehbasvuyed.................Ytegvsafy</p>
                </div>

                <div>
                  <RiDeleteBin6Fill color="#0B002A" size="1rem"/>
                </div>
              </div>

              <p className="text-xs text-white-30 font-regular leading-[18.7px] my-5">{email}</p>

              <h2 className="text-sm text-secondary-main font-medium leading-5 ">Select Payment Method</h2>

              <p className="text-xs text-secondary-main font-medium leading-[1.18rem] mt-5 mb-[.6rem]">Donate With</p>
              <div className="h-[3.12rem] flex items-center w-[18.75rem] pl-2 border-secondary-20 border rounded-md">
                <div className="flex items-center gap-2">
                  <img src={gustCoin} alt="" />
                  <p className="text-s text-secondary-main font-regular leading-6">GU$T</p>
                  <AiOutlineDown/>
                </div>
                <input type="text" onChange ={handleChange} name="gust" value={gust} id="" className="h-full px-2 w-[70%] bg-transparent placeholder:text-end placeholder:text-sm placeholder:text-30 placeholder:font-medium" placeholder="0.00" />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-white-30 font-regular leading-[18.7px] my-5">Avaliable Balance: 0 GU$T</p>
                <div className="py-[0.3rem] px-[0.6rem] bg-primary-light text-xs text-primary-main font-regular leading-[18.7px] rounded-md">Max</div>
              </div>

              <button className="bg-primary-main w-full mt-10 lg:mt-0 lg:w-[5.5rem] text-whiteText py-5 lg:py-[0.69rem] px-20 lg:flex justify-center items-center rounded-[5px]" onClick={handleSetActive}>Donate</button>
            </div>
          )
          : ""
        }
      </div>
      {active === 2 && <BuyAndSellSuccessModal desc="Donation received" checker={false} amountToBuy={gust}/>}

    </div>
  );
}

export default MakeDonationDetails;
