import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DonationModal from "../../../widgets/donate/DonationModal"
import {
  donateGradient,
  donatePeriod,
  donation,
  payout,
  tenEur,
} from "../../../assets";
import { link, linkWhite, USDT } from "../../../icons";
import { setActivePayoutPage, setActiveCryptoPage } from "../../../redux/gipperfiSlice";

function Donate() {
  const [showDonationModal, setShowDonationModal] = useState(false)
  const dispatch = useDispatch()
  
  const handlePayout =() =>{
  dispatch(setActivePayoutPage(true))
  dispatch(setActiveCryptoPage(false))
  }
  return (
    <>
    <div className="flex flex-col-reverse lg:flex-row justify-between  p-5">
      <div className="w-full mt-8 lg:mt-0 lg:w-[31.9rem] p-5 border rounded-[20px]  border-[ #A4A4A4]">
        <div className="w-[99%] flex justify-center items-center relative   h-[14rem] mx-auto rounded-[10px]">
          <img
            src={tenEur}
            className="w-full absolute h-full object-cover rounded-[10px]"
            alt=""
          />
          <button className="w-[8.4rem] h-9 relative z-10 rounded-md text-white-60 border border-white-60">
            Change Image
          </button>
        </div>

        <div className=" hidden lg:flex justify-between items-center mt-11">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img className="w-full h-full object-cover" src={USDT} alt="" />
            </div>
            <div>
              <p className="text-s text-white-30 leading-6 font-regular">
                Amount Received
              </p>
              <h2 className="leading-7 text-secondary-main text-sm font-big">
                USDT 0.00
              </h2>
            </div>
          </div>

        
            <button onClick={handlePayout} className="flex gap-1 justify-center rounded-md items-center w-[7rem] py-[.68rem] bg-primary-main text-white-60">
              <img src={payout} alt="" /> <p>Payout</p>
            </button>
         
        </div>

        <div className="flex justify-between items-center mt-10">
          <p className="text-sm font-medium leading-7 text-secondary-main">
            Mary Stans Foundations
          </p>
          <div>
            <img src={link} alt="" />
          </div>
        </div>

        <div className="mt-5 w-full lg:w-[29.9rem]">
          <p className="text-xs font-regular leading-5 text-white-30">
            Lorem ipsum dolor sit amet consectetur. Praesent habitant lectus
            commodo est. Scelerisque convallis tempus vitae sem lobortis
            ultricies viverra lobortis eget. Gravida quam nibh ultricies eget
            congue. Purus hendrerit mauris orci diam vestibulum vitae
            suspendisse scelerisque.
          </p>
        </div>

        <div className="mt-5">
          <p className="text-xs text-secondary-main leading-5 font-medium">
            285 Days Left
          </p>
        </div>

        <div className="mt-2">
          <img src={donatePeriod} alt="" />
        </div>
      </div>

      <div className="w-full lg:w-[27.5rem] relative p-8 pl-4 h-[13.3rem] rounded-[20px]">
        <div className="relative z-10 flex items-center justify-start gap-2 w-full">
          <div className="w-[6.1rem] lg:w-[3.1rem] flex justify-center items-center bg-primary-light rounded-full h-[3.1rem]">
            <img src={donation} alt="" />
          </div>
          <div>
            <p className="text-s text-white-60 font-medium leading-6">
              Donation Link
            </p>
            <p className="text-xs text-white-60 font-regular leading-5">
              Get and share Donation link to receice donation from friends
            </p>
          </div>
        </div>

         <Link to="/create-donation">
         <button  className="mt-11 w-[9.25rem] flex gap-2 justify-center items-center rounded-[5px] relative z-10 text-s text-white-60 py-[0.6rem] bg-primary-main">
            <img src={linkWhite} alt="" />
            <p>Create link</p>
          </button>
         </Link>
         
       

        <img
          src={donateGradient}
          className="w-full rounded-[20px] h-full object-cover absolute left-0 top-0"
          alt=""
        />
      </div>

      <div className=" lg:hidden flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <img className="w-full h-full object-cover" src={USDT} alt="" />
            </div>
            <div>
              <p className="text-s text-white-30 leading-6 font-regular">
                Amount Received
              </p>
              <h2 className="leading-7 text-secondary-main text-sm font-big">
                USDT 0.00
              </h2>
            </div>
          </div>

         
            <button onClick={handlePayout} className="flex gap-1 justify-center rounded-md items-center w-[7rem] py-[.68rem] bg-primary-main text-white-60">
              <img src={payout} alt="" /> <p>Payout</p>
            </button>
          
        </div>
    </div>
    {showDonationModal && <DonationModal setShowDonationModal={setShowDonationModal} showDonationModal={showDonationModal}/>}
    </>
    
  );
}

export default Donate;
