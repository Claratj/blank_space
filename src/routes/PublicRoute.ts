import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export const PublicRoute = ({ children }: any) => {
  const navigate = useNavigate();

  const { state } = useContext(AuthContext);
  return state.logged ? children : navigate("/login");
};
