import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiOutlinePause } from "react-icons/ai";

const employeesList = [
  {
    id: 1,
    fullName: "Divine Onji",
    email: "divine@gmail.com",
    role: "Lead designer",
    salary: "$1,200",
  },
  {
    id: 2,
    fullName: "Divine Onji",
    email: "divine@gmail.com",
    role: "Lead designer",
    salary: "$1,200",
  },
  {
    id: 3,
    fullName: "Divine Onji",
    email: "divine@gmail.com",
    role: "Lead designer",
    salary: "$1,200",
  },
  {
    id: 4,
    fullName: "Divine Onji",
    email: "divine@gmail.com",
    role: "Lead designer",
    salary: "$1,200",
  },
  {
    id: 5,
    fullName: "Divine Onji",
    email: "divine@gmail.com",
    role: "Lead designer",
    salary: "$1,200",
  },
];

const PayrollTable = () => {
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState("");
  const handleToggle = (id) => {
    setToggle((prev) => !prev);
    setId(id);
  };
  return (
    <>
      <table className=" w-full hidden lg:table table-fixed border-separate border-spacing-4">
        <thead className="w-full my-[32px]">
          {/* {headerTitle.map((title) => (
          <tr key={title.id} className="flex w-full">
            <th className="text-start font-Jost font-medium text-xs font-white-30">{title.title}</th>
          </tr>
        ))} */}
          <tr className="px-8">
            <th className="text-start font-Jost font-medium text-x text-white-30 px-4 leading-4">
              FullName
            </th>
            <th className="text-start font-Jost font-medium text-x text-white-30 px-4  leading-4">
              Email
            </th>
            <th className="text-start font-Jost font-medium text-x text-white-30 px-4  leading-4">
              Role
            </th>
            <th className="text-start font-Jost font-medium text-x text-white-30 px-4  leading-4">
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((item) => (
            <tr key={item.id}>
              <td className="border  rounded-lg px-4 py-2 font-Jost  text-x text-white-30 leading-4">
                {item.fullName}
              </td>
              <td className="border rounded-lg px-4 m-4  text-x text-white-30 leading-4">
                {item.email}
              </td>
              <td className="border rounded-lg px-4  text-x text-white-30 leading-4">
                {item.role}
              </td>
              <td className="border rounded-lg px-4  text-x text-white-30 leading-4">
                {item.salary}
              </td>
              <td
                className="flex justify-end px-4 cursor-pointer text-x text-white-30 leading-4 relative"
                onClick={() => handleToggle(item.id)}
              >
                <BsThreeDots />

                {toggle && id === item.id && (
                  <div className=" absolute right-2 top-4 w-[50%] flex h-auto items-center gap-3 bg-whiteText px-3 py-2">
                    <RiDeleteBin2Fill color="#FA1212" />
                    <MdModeEditOutline color="Secondary 40" />
                    <AiOutlinePause onClick={handleToggle} />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {employeesList.map((employee) => (
        <div className="block w-full lg:hidden my-8 border border-gray-400 rounded-md px-3 py-4">
          <div className="flex text-secondary-50 font-medium text-sm justify-between h-auto items-center">
            <p>{employee.fullName}</p>
            <p>{employee.salary}</p>
          </div>
          <p className="text-x text-white-30 leading-4 my-2">{employee.role}</p>
          <div className="flex justify-between h-auto items-center">
            <p className="text-x text-white-30 leading-4">{employee.email}</p>
            <div className="flex gap-3">
            <RiDeleteBin2Fill color="#7B7B7B" />
            <AiOutlinePause color="#7B7B7B"/>
            <MdModeEditOutline color="#7B7B7B"/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PayrollTable;
