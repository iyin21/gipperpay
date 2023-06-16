import React, { useState } from "react";
import { donatePeriod, gustCoin } from "../../../assets";
import { USDT } from "../../../icons";
import { MdOutlineDateRange } from "react-icons/md";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { addDonation } from "../../../redux/donateSlice";
import DonationModal from "../DonationModal";


function DonationDetails() {
  const [line, setLine] = useState([{ active: true }, { active: false }]);

  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);
  const [paths, setPaths] = useState([]);
  const [showDonationModal, setShowDonationModal] = useState(false)

  const [data, setData] = useState({
    name: "",
    desc: "",
    startDate: "",
    endDate: "",
  });

  const { startDate, endDate, name, desc } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInTime = end.getTime() - start.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  console.log(data);

  const onDrop = (acceptedFiles) => {
    setPaths(acceptedFiles);
  };

  const recieveMethod = (index) => {
    setActive2(index);
  };

  const handleSetActive = (e) => {
    e.preventDefault();
    const { name, desc, startDate, endDate } = data;
    if (!name || !desc || !startDate || !endDate) {
      return toast.error("please fill the details for the donation");
    } else {
      const newLine = [...line];
      newLine[1].active = true;
      setLine(newLine);
      setActive(active + 1);
    }
  };

  const options = [
    {
      img: gustCoin,
      label: "GU$T",
    },
    {
      img: USDT,
      label: "USDT",
    },
  ];

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addDonation(data));
  setShowDonationModal(true)
  };
  return (
    <div className="w-full min-h-[100vh]">
      <div className="w-full lg:w-[52.62rem] p-4 lg:p-10 bg-white-60 mx-auto flex flex-col lg:flex-row justify-between">
       {
       active  === 0 || active === 1 ?
       <div>
       <div className="flex items-center gap-4">
         <div className="lg:hidden pt-10 pb-10 flex gap-2">
           {line.map((line, index) => (
             <div
               key={index}
               className={` ${
                 line.active ? " border-primary-main" : " border-white-20"
               } border-b-2 w-5`}
             ></div>
           ))}
         </div>

         <h2 className="text-s text-secondary-main leading-6 font-medium pt-10 pb-10">
           Donation Details
         </h2>
       </div>

       <div className="w-full border-2 border-black lg:w-[20rem] relative flex justify-center items-center h-[14.2rem] bg-[#F7F7F7] rounded-[20px]">
         <div>
           <Dropzone onDrop={onDrop}>
             {({ getRootProps, getInputProps }) => (
               <div {...getRootProps()}>
                 <input {...getInputProps()} />
                 <button className="rounded-[100px] p-2 text-s relative z-10 text-white-30 border border-white-30">
                   change image
                 </button>
               </div>
             )}
           </Dropzone>
           {paths.map((file) => (
             <div key={file.name}>
               <img
                 src={URL.createObjectURL(file)}
                 alt={file.name}
                 className="absolute left-0 top-0 w-full h-full object-contain"
               />
             </div>
           ))}
         </div>
       </div>

       {active === 1 && (
         <>
           <h2 className="mt-10 text-s font-medium text-secondary-main leading-6">
             {data.name}
           </h2>
           <p className="mt-5 text-xs text-white-30 leading-[18px] w-full lg:w-[70%]">
             {data.desc}
           </p>

           <div className="flex mt-5 gap-2 items-center">
             <MdOutlineDateRange color="#7B7B7B" />
             <p className="text-white-30 text-xs">
               {data.startDate} - {data.endDate}
             </p>
           </div>

           <div className="mt-5">
             <p className="text-s font-medium text-secondary-main leading-6 mb-[10px]">
               {differenceInDays} days left
             </p>
             <div>
               <img src={donatePeriod} alt="" />
             </div>
           </div>
         </>
       )}
     </div> : ""
       }
        

        <div className="w-[52%]">
          {active === 1 || active === 2 ? 
          <div className="hidden pt-10 pb-12 lg:flex gap-2">
          {line.map((line, index) => (
            <div
              key={index}
              className={` ${
                line.active ? " border-primary-main" : " border-white-20"
              } border-b-2 w-5`}
            ></div>
          ))}
        </div> :""
          }
          

          {active === 0 ? (
            <form action="">
              <div className="mt-10 lg:mt-0 mb-10">
                <label
                  htmlFor=""
                  className="text-xs text-secondary-main font-medium leading-5 mb-[5px]"
                >
                  Name this Donation
                </label>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                  className="w-full h-[3.1rem] border border-secondary-20 rounded-[5px] px-5 text-xs text-secondary-30 font-regular leading-5"
                />
              </div>

              <div className="mb-10">
                <label
                  htmlFor=""
                  className="text-xs text-secondary-main font-medium leading-5 mb-[5px]"
                >
                  What is this Donation About
                </label>
                <textarea
                  name="desc"
                  className="w-full !h-[8.4rem] border border-secondary-20 rounded-[5px] px-5 py-[10px] text-xs text-secondary-30 font-regular leading-5"
                  value={desc}
                  onChange={handleChange}
                  cols="30"
                  rows="10"
                  placeholder="Enter a description..."
                ></textarea>
              </div>

              <div className="flex gap-2 items-center">
                <div>
                  <label
                    htmlFor=""
                    className="text-xs text-secondary-main font-medium leading-5 mb-[5px] block"
                  >
                    Start Date
                  </label>
                  <input
                    name="startDate"
                    type="date"
                    value={startDate}
                    onChange={handleChange}
                    className="border border-secondary-20 p-2 rounded-[5px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="text-xs text-secondary-main font-medium leading-5 mb-[5px] block"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={handleChange}
                    className="border border-secondary-20 p-2 rounded-[5px]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary-main px-5 py-[11px] text-s text-white-60 font-regular mt-10 rounded-[5px] w-full lg:w-[6.4rem]"
                onClick={handleSetActive}
              >
                Continue
              </button>
            </form>
          ) : 
          (
            <div>
              <p className="text-xs text-secondary-main mt-[1.87rem]">
                Receive With
              </p>

              {options.map((option, index) => (
                <div
                  className="mt-5 flex justify-between p-2 items-center w-full lg:w-[18.75rem] h-[3.1rem] border border-secondary-20 rounded-[5px]"
                  onClick={() => recieveMethod(index)}
                >
                  <div className="flex items-center gap-2">
                    <img src={option.img} alt="" />
                    <p
                      className={`${
                        index === 1
                          ? "text-s font-medium leading-6 text-secondary-main"
                          : "text-xs text-[#7B7B7B]"
                      } `}
                    >
                      {option.label}
                    </p>
                  </div>

                  <div
                    className={`w-4 h-4 border-2 rounded-full ${
                      index === active2
                        ? "border-primary-main"
                        : "border-white-20"
                    }  flex justify-center items-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index === active2 ? "bg-primary-main" : "bg-white-20"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="w-full lg:w-[7.25rem] bg-primary-main px-5 py-[11px] text-s text-white-60 font-regular mt-10 rounded-[5px]"
                onClick={handleSubmit}
              >
                Create Link
              </button>
            </div>
          ) }
        </div>
      </div>
     { showDonationModal && <DonationModal showDonationModal={showDonationModal} setShowDonationModal={setShowDonationModal
    }/>}
      
    </div>
  );
}

export default DonationDetails;
