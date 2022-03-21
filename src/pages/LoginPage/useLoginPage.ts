import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import validateUser from "../../services/validateUser.service";

export interface IUserLogin {
  email: string;
  password: string;
}

export default function useLoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    const checkedUser = validateUser(user);

    if (checkedUser) {
      dispatch("[auth] Login");
      navigate("/dashboard", {
        replace: true,
      });
    }
  }

  return {
    handleInputChange,
    handleSubmit,
    isButtonDisabled: !(user.email !== "" && user.password !== ""),
  };
}
