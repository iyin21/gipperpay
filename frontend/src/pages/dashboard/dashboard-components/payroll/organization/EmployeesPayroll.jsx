import React, { useState } from "react";
import { MdOutlineAttachment } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import EmployeesLogo from "../../../../../assets/employeesLogo.png";
import PayrollLogo from "../../../../../assets/payrollLogo.png";
import { setActivePayrollPage } from "../../../../../redux/payrollSlice";
import OrgLogo from "../../../../../assets/orgLogo.png";
import PayrollTable from "./PayrollTable";
import PayrollLinkModal from "./PayrollLinkModal";

const EmployeesPayroll = () => {
  const [openModal, setOpenModal] = useState(false);
  const { organization } = useSelector((state) => state.payroll);
  const dispatch = useDispatch();
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const [startDate, setStartDate] = useState(today);
  console.log(organization);
  const handleNavigate = () => {
    dispatch(setActivePayrollPage(false));
  };
  const handleChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleModal = () => {
   setOpenModal(true)
  };
  console.log(startDate);
  return (
    <div className="px-8">
      <div>
        <div className="lg:flex justify-between  items-center h-auto">
          <div className="flex gap-4 h-auto items-center">
            <div
              className="w-[50px] bg-white-Main rounded-full h-[50px] flex justify-center items-center cursor-pointer"
              onClick={handleNavigate}
            >
              <AiOutlineArrowLeft size="1.2rem" color="#7B7B7B" />
            </div>
            <p className="block text-secondary-50 font-medium text-sm lg:hidden">
              Payroll
            </p>
          </div>
          <form className="block lg:hidden items-center w-full my-4">
            <div className="relative w-[100%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch color="#7B7B7B" />
              </div>
              <input
                type="text"
                className=" text-white-30 pl-10 w-full outline-none h-[2.8rem] px-5 leading-5 font-regular bg-white-70 rounded-sm"
                placeholder="Search"
              />
            </div>
          </form>
          <div className="w-[65%] flex justify-between ">
            <div className="flex-row hidden lg:flex h-auto items-center gap-3  ">
              <img src={EmployeesLogo} alt="logo" />
              <p className="text-lightWhite font-medium text-x leading-4">
                Employees
              </p>
              <p className="text-secondary-50 font-medium text-sm">
                {organization?.employees}
              </p>
            </div>
            <div className="bg-white-80 flex h-auto items-center w-full lg:w-[30%] rounded-lg  p-2 gap-4 flex-end">
              <div className="w-[40px] h-[40px] rounded-full flex justify-center text-center items-center bg-whiteText">
                <img src={OrgLogo} alt="org" className="w-[20px] h-auto" />
              </div>
              <p>{`Ref ${organization?.company}`}</p>
            </div>
          </div>
        </div>
        <div className=" flex mt-4 justify-between h-auto">
          <div>
            <p className="text-white-30 text-s font-regular leading-5">
              Organization balance
            </p>
            <p className="text-secondary-50 font-medium text-sm">$0.00</p>
          </div>
          <button className="w-[45%] lg:w-[12%] h-10 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6">
            Top Up Balance
          </button>
        </div>
        <div className="flex justify-between h-auto items-center my-4">
          <p className="text-white-30 text-s font-regular leading-5">
            Next Payment Date
          </p>
          <div>
            <input
              name="startDate"
              type="date"
              placeholder={startDate}
              value={startDate}
              onChange={handleChange}
              className="border border-secondary-20 p-2 rounded-[5px]"
            />
          </div>
        </div>
        <div className="flex justify-between h-auto items-center my-3">
          <p className="text-white-30 text-s font-regular leading-5">
            Amount due
          </p>
          <p className="text-secondary-50 text-s font-medium">$49,000</p>
          <div className="flex h-auto items-center gap-3">
            <span className="text-white-30 text-s font-regular leading-5">
              Auto
            </span>
            <label className="relative inline-flex items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer bg-white-70"
                checked
              />

              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
        <div className=" flex h-auto items-center  justify-between  lg:m-auto w-full">
          <p className="flex gap-4 w-full lg:w-[15%]">
            <img
              src={PayrollLogo}
              alt="payroll"
              className="w-[20px] h-[20px]"
            />
            <span className="text-secondary-50 text-s font-medium hidden lg:inline-block">
              Payroll
            </span>
            <p className="text-lightWhite font-medium text-x  lg:hidden blockleading-4">
              Employees <span className="text-secondary-50 font-medium text-sm">{organization?.employees}</span>
            </p>
          </p>
          
          <form className="hidden lg:flex items-center w-[50%]">
            <div className="relative w-[100%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch color="#7B7B7B" />
              </div>
              <input
                type="text"
                className=" text-white-30 pl-10 w-full outline-none h-[2.8rem] px-5 leading-5 font-regular bg-white-70 rounded-sm"
                placeholder="Search"
              />
            </div>
          </form>
          <p
            className="flex gap-4 w-full  lg:w-[20%] cursor-pointer"
            onClick={handleModal}
          >
            <MdOutlineAttachment size="20" color="#FA3C12"  />
            <span className="text-primary-main">Add employee</span>
          </p>
        </div>
      </div>
      <PayrollTable />
      {openModal && (
        <PayrollLinkModal setOpenModal={setOpenModal} openModal={openModal}  checker={false}/>
      )}
    </div>
  );
};

export default EmployeesPayroll;
