import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export default function PrivateRoute({ children }) {
  const { logged } = useContext(AuthContext);
  const location = useLocation();

  localStorage.setItem("lastPath", location.pathname);

  return logged ? children : <Navigate to="/login" />;
}
