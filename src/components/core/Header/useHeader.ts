import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";

export default function useHeader() {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "[auth] Logout" });

    navigate("/login", {
      replace: true,
    });
  };
  return { handleLogout };
}
