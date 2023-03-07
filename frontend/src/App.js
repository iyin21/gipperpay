import "./globalStyles.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import EcommerceStore from "./pages/Businesses/E-commerceStore/EcommerceStore";
import BusinessWallet from "./pages/Businesses/BusinessWallet/BusinessWallet";

function App() {
  const [registered, setIsRegistered] = useState(false);
  return (
    <div className="font-Jost overflow-hidden">
      <Router>
        <Toaster />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
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
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
