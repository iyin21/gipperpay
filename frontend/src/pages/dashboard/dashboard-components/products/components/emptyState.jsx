import CustomButton from '../../../../../components/form/CustomButton'
import { useNavigate } from 'react-router-dom';

function EmptyState(){
    const navigate=useNavigate()
    return(
        <div className='flex justify-center m-auto mt-64 items-center'>
                <div className='m-auto text-center'>
                    <p className='text-white-30 text-s font-regular leading-5 mb-1'>You Have no Products yet Get a <br/> payment link to create product</p>
                    
                    <CustomButton onClick={()=>navigate("/payment-link")}>Create link</CustomButton>
                </div>
            </div>
    )
}
export default EmptyState; 