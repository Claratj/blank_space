import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import useLoginPage, { IUserLogin } from "./useLoginPage";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { handleInputChange } = useLoginPage();
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(data: IUserLogin) {
    // hago comprobación de que existe, si sí recupero de users el userName y lo meto sessionStorage.


    //dispatch login
    //redirige a dashboard.
    const action = {
      type: ,
      payload: {
        email: data.email,
        password: data.password,
      },
    };

    dispatch(action);

    // reset();

    navigate("/dashboard", {
      replace: true,
    });
  }

  return (
    <div>
      <form onSubmit={() => handleSubmit}>
        <h1>Speak friend, and enter</h1>

        <input
          type="email"
          aria-label="email"
          placeholder="Tu email..."
          onChange={handleInputChange}
        />
        <input
          type="password"
          aria-label="password"
          placeholder="Tu contraseña..."
          onChange={handleInputChange}
        />

        <button>Entrar</button>
      </form>
    </div>
  );
}
