import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function PrivateRoute({ children }: any) {
  const { state } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  localStorage.setItem("lastPath", location.pathname);

  return state.logged
    ? children
    : navigate("/login", {
        replace: true,
      });
}
