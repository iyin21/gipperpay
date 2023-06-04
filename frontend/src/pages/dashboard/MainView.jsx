import React from "react";
import Overview from "./dashboard-components/Overview";
import BuyandSell from "./dashboard-components/BuyandSell";
import Gipperffi from "./dashboard-components/Gipperffi";
import Donate from "./dashboard-components/Donate";
import Settings from "./dashboard-components/Settings/Settings";
import Payroll from "./dashboard-components/payroll/Payroll"
import { useSelector } from "react-redux";
import EmployeesPayroll from "./dashboard-components/payroll/organization/EmployeesPayroll";
import Freelancers from "./dashboard-components/payroll/freelance/Freelancers";
import Products from "./dashboard-components/products/Products";
import Destination from "../../widgets/gipperfiModal/Destination";

function MainView({ activeLink }) {
 const {activePage, isFreelance} = useSelector(state =>state.payroll)
 const {isCrypto, isPayout} = useSelector(state => state.gipperfi)
 console.log(isPayout)
  return (
    <div className="w-[100%] h-auto mt-24 lg:mt-24  lg:ml-[20%] top-0 bg-White lg:w-4/5">
     
      <div className="w-full relative h-auto">
        {activeLink === 0 && <Overview />}
      </div>
      <div className="w-full h-4/5">{activeLink === 1 && <BuyandSell />}</div>
      <div className="w-full h-4/5">{activeLink === 2 && !isCrypto ? <Gipperffi /> : activeLink === 2 && isCrypto && !isPayout ? <Destination/> :''}</div>
      <div className="w-full h-4/5">{activeLink === 3 && !isPayout ? <Donate /> : activeLink === 3 && isPayout && !isCrypto ? <Destination/>:""}</div>
     <div className="w-full h-4/5">{activeLink === 4 && !activePage && !isFreelance ? <Payroll/>: activeLink === 4 && activePage ? <EmployeesPayroll/> : activeLink === 4 && !activePage && isFreelance ? <Freelancers/>:''}</div>
     <div className="w-full h-4/5">{activeLink === 5 && <Products/>}</div>
      <div className="w-full h-4/5">{activeLink === 7 && <Settings />}</div>
    </div>
  );
}

export default MainView;
