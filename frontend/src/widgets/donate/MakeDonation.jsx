import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import MakeDonationAside from './makeDonationComponent/MakeDonationAside'
import MakeDonationMain from './makeDonationComponent/MakeDonationMain'

function MakeDonation({setActiveLink}) {
  const [line, setLine] = useState([{ active: true, text:"Connect a wallet", number:"1" }, { active: false, text:"Make Donation", number:"2" }]);

  const [email,setEmail] = useState('')
  const [active,setActive] = useState(0)

  console.log(email)

  const handleSetActive = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("please fill in your email address");
    } else {
      const newLine = [...line];
      newLine[1].active = true;
      setLine(newLine);
      setActive(active + 1);
    }
  };
  return (
    <div className='min-h-[100vh] flex justify-center items-start w-full'>
        <MakeDonationMain email={email} active={active} setEmail={setEmail} handleSetActive={handleSetActive} setActiveLink={setActiveLink}/>
        <MakeDonationAside line={line} />
    </div>
  )
}

export default MakeDonation