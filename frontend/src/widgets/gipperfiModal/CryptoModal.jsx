import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import ModalBackDrop from '../Modal/ModalBackDrop'
import { PayoutWallet } from './Payout'
import BuyAndSellSuccessModal from '../Modal/buy/BuyAndSellSuccessModal'

const CryptoModal = ({setShowCryptoModal}) => {
    const [stepCrypto, setStepCrypto] = useState(0)
    const handleNext = () => {
        setStepCrypto(prev => prev + 1);
      };
    
      const handlePrevious = () => {
        setStepCrypto(prev => prev - 1);
      };
      const {coins:{name, current_price}} = useSelector(state =>state.gipperfi)
      
  return (
    <ModalBackDrop  type="gipperfi" stepper={true} stepCrypto={stepCrypto}  setShowCryptoModal={setShowCryptoModal} handlePrevPage={handlePrevious}>
       {stepCrypto === 0 ? <PayoutWallet handleNext={handleNext}/> : stepCrypto === 1 ? <BuyAndSellSuccessModal firstName={`${current_price} ${name}`} desc="Payout request received"/> : ''}
    </ModalBackDrop>
  )
}

export default CryptoModal