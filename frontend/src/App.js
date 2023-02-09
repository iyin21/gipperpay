import "./globalStyles.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductsCheckout from "./pages/Products/ProductsCheckout/ProductsCheckout";
import ProductsPayroll from "./pages/Products/ProductsPayroll/ProductsPayroll";
import ProductsDonation from "./pages/Products/ProductsDonation/ProductsDonation";
import Pricing from "./pages/Pricing/Pricing";

function App() {
  return (
    <div className="font-Jost overflow-hidden">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products/checkout" element={<ProductsCheckout />} />
            <Route path="/products/payroll" element={<ProductsPayroll />} />
            <Route path="/products/donation" element={<ProductsDonation />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
