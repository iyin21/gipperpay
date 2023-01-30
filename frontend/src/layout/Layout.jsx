import React from "react";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="w-full">
      {/* hide nav bar on dashboard page */}
      {location.pathname !== "/dashboard" && <Nav />}
      {children}
      {/* hide footer bar on dashboard page */}
      {location.pathname !== "/dashboard" && <Footer />}
    </div>
  );
}

export default Layout;
