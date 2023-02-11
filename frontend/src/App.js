import "./globalStyles.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductsCheckout from "./pages/ProductsCheckout/ProductsCheckout";
import Pricing from "./pages/Pricing/Pricing";
import WaitList from "./pages/waitlist/WaitList"
import { Toaster } from "react-hot-toast";
import WaitListSuccess from "./pages/waitlist/WaitListSuccess";
import { useState } from "react";

function App() {
  const [registered, setIsRegistered] = useState(false);
  return (
    <div className="font-Jost overflow-hidden">
      <Router>
      <Toaster/>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products/checkout" element={<ProductsCheckout />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/waitlist" element={<WaitList setIsRegistered={setIsRegistered} />} />
            <Route path="/waitlist/community" element={<WaitListSuccess registered={registered} />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
