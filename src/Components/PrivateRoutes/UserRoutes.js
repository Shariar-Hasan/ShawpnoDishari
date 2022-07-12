import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const UserRoutes = ({ children, ...rest }) => {
  const [loginuser, setLoginuser] = useContext(UserContext);
  let location = useLocation();
  return Object.keys(loginuser).length ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default UserRoutes;
