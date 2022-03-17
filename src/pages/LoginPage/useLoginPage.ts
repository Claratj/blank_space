import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import validateUser from "../../services/validateUser.service";

export interface IUserLogin {
  email: string;
  password: string;
}

export default function useLoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // hago comprobación de que existe, si sí recupero de users el userName y lo meto sessionStorage.

    const checkedUser = validateUser(values);
    const action = {
      type: "[auth] Login",
    };

    if (checkedUser) {
      console.log("existe checkedUser");
      dispatch(action);
      navigate("/dashboard", {
        replace: true,
      });
    }
  }

  return {
    handleInputChange,
    handleSubmit,
  };
}
