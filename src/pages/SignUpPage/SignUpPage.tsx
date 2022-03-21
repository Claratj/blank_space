import React from "react";
import Button from "../../components/Button/Button";
import PasswordValidator from "../../components/PasswordValidator/PasswordValidator";
import useSignUpPage from "./useSignUpPage";

export default function SignUpPage() {
  const { handleInputChange, handleSubmit, isButtonDisabled, newUser } =
    useSignUpPage();
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md flex flex-col space-y-4 items-center"
      >
        <h1 className="mb-6 text-4xl font-bold">
          Si no estás registrado, nanai de la China
        </h1>

        <input
          type="text"
          name="userName"
          aria-label="userName"
          placeholder="Tu nombre de usuario..."
          onChange={handleInputChange}
          className=" w-full h-12 mt-2 mb-3 px-3 border-solid border-2 border-slate-400 rounded-md"
        />

        <input
          type="email"
          name="email"
          aria-label="email"
          placeholder="Tu email..."
          onChange={handleInputChange}
          className=" w-full h-12 mt-2 mb-3 px-3 border-solid border-2 border-slate-400 rounded-md"
        />
        <input
          type="password"
          name="password"
          aria-label="password"
          placeholder="Tu contraseña..."
          onChange={handleInputChange}
          className=" w-full h-12 mt-2 mb-3 px-3 border-solid border-2 border-slate-400 rounded-md"
        />

        <PasswordValidator password={newUser.password} />

        <input
          type="password"
          name="confirmPassword"
          aria-label="confirmPassword"
          placeholder="Repite tu contraseña..."
          onChange={handleInputChange}
          className=" w-full h-12 mt-2 mb-6 px-3 border-solid border-2 border-slate-400 rounded-md"
        />

        <Button disabled={isButtonDisabled}>Registrarse</Button>
      </form>
    </div>
  );
}
