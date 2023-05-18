import "./globalStyles.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductsCheckout from "./pages/Products/ProductsCheckout/ProductsCheckout";
import ProductsPayroll from "./pages/Products/ProductsPayroll/ProductsPayroll";
import ProductsDonation from "./pages/Products/ProductsDonation/ProductsDonation";
import ProductsGipperfi from "./pages/Products/ProductsGipperfi/ProductsGipperfi";
import ProductsGUST from "./pages/Products/ProductsGUST/ProductsGUST";
import Pricing from "./pages/Pricing/Pricing";
import WaitList from "./pages/waitlist/WaitList";
import GetStarted from "./pages/GetStarted/GetStarted";
import SignIn from "./pages/GetStarted/SignIn";
import { Toaster } from "react-hot-toast";
import WaitListSuccess from "./pages/waitlist/WaitListSuccess";
import { useState } from "react";
import CreateDonation from "./widgets/donate/CreateDonation";
import MakeDonation from "./widgets/donate/MakeDonation";
import EcommerceStore from "./pages/Businesses/E-commerceStore/EcommerceStore";
import BusinessWallet from "./pages/Businesses/BusinessWallet/BusinessWallet";
import Company from "./pages/company/Company";
import Freelancers from "./pages/dashboard/dashboard-components/payroll/freelance/Freelancers";
import EmployeeModal from "./pages/dashboard/dashboard-components/payroll/organization/EmployeeModal";

function App() {
  const [registered, setIsRegistered] = useState(false);

  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="font-Jost overflow-hidden">
      <Router>
        <Toaster />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/checkout" element={<ProductsCheckout />} />
            <Route path="/products/payroll" element={<ProductsPayroll />} />
            <Route path="/products/donation" element={<ProductsDonation />} />
            <Route path="/products/gipperfi" element={<ProductsGipperfi />} />
            <Route path="/products/GUST" element={<ProductsGUST />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="/waitlist"
              element={<WaitList setIsRegistered={setIsRegistered} />}
            />
            <Route
              path="/waitlist/community"
              element={<WaitListSuccess registered={registered} />}
            />
            <Route
              path="/waitlist"
              element={<WaitList setIsRegistered={setIsRegistered} />}
            />
            <Route
              path="/waitlist/community"
              element={<WaitListSuccess registered={registered} />}
            />
            <Route path="/getStarted" element={<GetStarted />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route
              path="/businesses/ecommerceStore"
              element={<EcommerceStore />}
            />
            <Route
              path="/businesses/businessWallet"
              element={<BusinessWallet />}
            />
            <Route element={<PrivateRoutes />}>
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    activeLink={activeLink}
                    setActiveLink={setActiveLink}
                  />
                }
              />
              <Route
                path="/create-donation"
                element={<CreateDonation setActiveLink={setActiveLink} />}
              />
              <Route
                path="/make-donation"
                element={<MakeDonation setActiveLink={setActiveLink} />}
              />
              <Route path="/employeeForm" element={<EmployeeModal/>}/>
              <Route path="/company" element={<Company/>}/>
            </Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
