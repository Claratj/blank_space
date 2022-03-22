import { render, screen } from "@testing-library/react";
import React from "react";
import SignUpPage from "./SignUpPage";

describe("<SignUpPage />", () => {
  it("should have the button disabled by default", () => {
    render(<SignUpPage />);

    expect(screen.getByRole("button", { name: "Registrarse" })).toBeDisabled();
  });

  it("should have the button disabled when password and confirmPassword are not equals", () => {
    const password = "dummy_Password1";
    const confirmPassword = "dummy_password";

    render(<SignUpPage />);

    expect(screen.getByRole("button", { name: "Registrarse" })).toBeDisabled();
  });

  it("should have the button enabled when password and confirmPassword are equals and all the validations has passed", () => {
    const password = "dummy_Password1";
    const confirmPassword = "dummy_password1";

    render(<SignUpPage />);

    expect(screen.getByRole("button", { name: "Registrarse" })).toBeEnabled();
  });

  //testear que se esté llamando al endpoint correcto con el payload correcto
});
