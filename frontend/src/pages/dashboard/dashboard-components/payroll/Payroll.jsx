import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrganizationLogo from "../../../../assets/payroll/orgLogo.png";
import FreelanceLogo from "../../../../assets/payroll/freelanceLogo.png";
import OrganizationProfile from "./organization/OrganizationProfile";
import { useSelector, useDispatch } from "react-redux";
import { setActivePayrollPage , setFreelancePage} from "../../../../redux/payrollSlice";
export const payrollItems = [
  {
    img: OrganizationLogo,
    title: "Organization",
    desc: "50 Payroll Employees",
    checker: true,
  },
  {
    img: FreelanceLogo,
    title: "Freelancers",
    desc: "Create and send invoices for quick transaction with clients",
    checker: false,
  },
];
const Payroll = () => {
  const [showOrgModal, setShowOrgModal] = useState(false);
  const { organization } = useSelector((state) => state.payroll);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleModal = (index) => {
      if(index === 0){
        if (!Object.keys(organization).length === 0) {
          dispatch(setActivePayrollPage(true));
          dispatch(setFreelancePage(false))
        } else {
          setShowOrgModal((prev) => !prev);
        }

      }else if(index === 1){
      
        dispatch(setFreelancePage(true))
        dispatch(setActivePayrollPage(false));
      }
     
    
  };
  return (
    <>
      <div
        className={
          showOrgModal
            ? "hidden"
            : "lg:flex gap-4 w-full lg:w-[60%] px-3 cursor-pointer"
        }
      >
        {payrollItems.map(({ img, title, desc, checker }, index) => (
          <div
            key={index}
            onClick={() => handleModal(index)}
            className={
              checker
                ? "bg-lightBlue px-4 py-6 flex h-auto items-center w-full lg:w-[60%] gap-3 rounded-md"
                : "bg-lightGreen rounded-md px-4 py-6 flex h-auto gap-3 items-center w-full lg:w-[60%]"
            }
          >
            <div className="w-[50px] h-[50px] rounded-full flex justify-center text-center items-center bg-whiteText">
              <img src={img} alt={title} className="w-[20px] h-auto" />
            </div>

            <div>
              <p className="text-secondary-50 font-medium text-sm ">{title}</p>
              <p className="text-lightWhite w-[70%] leading[18px] my-3 font-medium text-xs">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      {showOrgModal && (
        <OrganizationProfile
          showOrgModal={showOrgModal}
          handleModal={handleModal}
        />
      )}
    </>
  );
};

export default Payroll;
