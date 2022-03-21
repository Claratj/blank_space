import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api-client/api";
import { AuthContext } from "../../auth/AuthContext";
import dummy_getUsers_response from "../../mocks/serverResponses/dummy_getUsers_response";
import transformResponses from "../../services/transformResponses.service";

// import storeService from "../../services/mocks.service";
import validatePassword from "../../services/validatePassword/validatePassword.service";

export default function useSignUpPage() {
  const [newUser, setNewUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewUser({
      ...newUser,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const { userName, email, password } = newUser;
    const user = { userName, email, password };

    createUser(user).then();
    transformResponses(user);

    dispatch("[auth] Login");

    navigate("/dashboard", {
      replace: true,
    });
  }

  const {
    hasMinLength,
    hasLowerCharacter,
    hasUpperCharacter,
    hasSpecialCharacter,
    hasDigits,
  } = validatePassword(newUser.password);

  return {
    handleInputChange,
    handleSubmit,
    isButtonDisabled: !(
      hasMinLength &&
      hasLowerCharacter &&
      hasUpperCharacter &&
      hasSpecialCharacter &&
      hasDigits &&
      newUser.password === newUser.confirmPassword &&
      newUser.password !== "" &&
      newUser.confirmPassword !== ""
    ),
    newUser,
  };
}
