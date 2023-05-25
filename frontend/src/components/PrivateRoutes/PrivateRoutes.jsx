import React from "react";
import { Outlet, Navigate } from "react-router-dom";


function PrivateRoutes() {

  const user = { token: true };
  return user.token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
