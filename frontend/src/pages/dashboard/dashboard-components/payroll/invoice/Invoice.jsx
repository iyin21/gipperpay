import React,{useState} from 'react'
import ModalBackDrop from '../../../../../widgets/Modal/ModalBackDrop'
import ConnectWallet from './ConnectWallet';
const Invoice = ({showInvoice, setShowInvoice}) => {
    const [stepInvoice, setStepInvoice] = useState(0);
    const handleNext = () => {
        setStepInvoice(prev => prev + 1);
      };
    
      const handlePrevious = () => {
        setStepInvoice(prev => prev - 1);
      };
  return (
    <ModalBackDrop stepInvoice={stepInvoice} showInvoice={showInvoice} handlePrevious={handlePrevious} setShowInvoice={setShowInvoice} type="invoice" stepper={true}>
       <div className='py-5'> { <ConnectWallet  handleNext={handleNext} stepInvoice={stepInvoice}/>}</div>
    </ModalBackDrop>
  )
}

export default Invoice