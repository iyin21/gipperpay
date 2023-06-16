import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { congrats } from '../../../../assets'
import { dropInModal } from './SendCongratsModal'
import CustomLabel from '../../../../components/form/CustomLabel'
import CustomInput from '../../../../components/form/CustomInput'
import CustomButton from '../../../../components/form/CustomButton'

const RedeemModal = ({gustAmount, handleNext}) => {
    const [walletAddress, setWalletAddress] = useState('')
    
  return (
    <div className='m-auto flex justify-center'>
        <motion.div
         variants={dropInModal}
         initial="hidden"
         animate="visible"
         exit="exit"
         className=" w-full lg:w-[39.3rem] h-[33.3rem] mt-10 bg-[white] lg:px-32  rounded-3xl shadow-sm"
        >
            <div className="h-[15rem] p-10">
          <img className="w-full h-full object-contain" src={congrats} alt="" />
        </div>
        <p className="text-m  w-full lg:w-[70%] m-auto text-center leading-8 font-bold text-white-50 flex justify-center items-center">
         You have received from Mary Stansfield
        </p>
        <div className="w-[8rem] h-14 rounded-xl bg-primary-light mx-auto mt-9 mb-3 text-s flex justify-center items-center font-medium text-primary-main leading-6">
          {" "}
        {gustAmount} GU$T{" "}
        </div>
        <div>
            <CustomLabel>Enter USDT (ERC20) address</CustomLabel>
            <CustomInput type="text" value={walletAddress} onChange={(e) =>setWalletAddress(e.target.value)} placeholder="wxzytrscdhfltfygdhgdtgfr"/>
        </div>
        <div className=" mt-2 w-full" onClick={handleNext}>
        <button className="w-full h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"  >Redeem</button>
        </div>
       
        </motion.div>
    </div>
  )
}

export default RedeemModal