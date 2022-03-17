import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

export const PublicRoute = ({ children }) => {
  const navigate = useNavigate();

  const { logged } = useContext(AuthContext);
  return logged ? children : navigate("/login");
};
