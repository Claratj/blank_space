import React, { useState } from "react";
import { initialAuthValues } from "../../auth/authContext";

export interface IUserLogin {
  email: string;
  password: string;
}

export default function useLoginPage() {
  const [values, setValues] = useState(initialAuthValues);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  return {
    handleInputChange,
  };
}
