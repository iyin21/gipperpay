import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoutes() {
  // const { user } = useSelector((store) => store.user);
  const user = { token: true };
  return user.token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
