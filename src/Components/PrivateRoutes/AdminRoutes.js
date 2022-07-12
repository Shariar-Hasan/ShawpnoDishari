import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const AdminRoutes = ({ children, ...rest }) => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  let location = useLocation();
  return loginuser?.accountInfo?.admin ? (
    children
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default AdminRoutes;
