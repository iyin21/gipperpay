import React from "react";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="w-full">
      {/* hide nav bar on dashboard page */}
      {(location.pathname !== ("/waitlist") && location.pathname !== ("/dashboard") && location.pathname !== ("/create-donation") && location.pathname !== ("/make-donation")&&location.pathname !== ("/payment-link") &&location.pathname !== ("/store")&&location.pathname !== ("/connect-wallet")&&location.pathname !== ("/make-payment"))  && <Nav />}
      {children}
      {/* hide footer bar on dashboard page */}
      {(location.pathname !== "/dashboard" && location.pathname !== ("/create-donation") && location.pathname !== ("/make-donation")&&location.pathname !== ("/payment-link")&&location.pathname !== ("/store")&&location.pathname !== ("/connect-wallet")&&location.pathname !== ("/make-payment")) && <Footer />}
    </div>
  );
}

export default Layout;
