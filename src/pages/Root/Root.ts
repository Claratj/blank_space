import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

export default function Root() {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.logged) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [state.logged, navigate]);

  return null;
}
