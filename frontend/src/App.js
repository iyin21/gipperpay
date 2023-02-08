import "./globalStyles.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductsCheckout from "./pages/ProductsCheckout/ProductsCheckout";
import ProductsPayout from "./pages/ProductsPayout/ProductsPayout";
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
            <Route path="/products/payout" element={<ProductsPayout />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
