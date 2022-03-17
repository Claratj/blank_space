import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

export default function Root() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (context?.state.logged) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [context, navigate]);

  return null;
}
