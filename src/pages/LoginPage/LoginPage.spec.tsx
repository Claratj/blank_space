import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import LoginPage from "./LoginPage";

describe("<LoginPage />", () => {
  it("should have the button disabled by default", () => {
    render(<LoginPage />);

    expect(screen.getByRole("button", { name: "Entrar" })).toBeDisabled();
  });

  it("should have the button enable if both email and password are filled", () => {
    const email = "dummy@email.com";
    const password = "dummy_Password123!";

    render(<LoginPage />);

    userEvent.paste(screen.getByLabelText("email"), email);
    userEvent.paste(screen.getByLabelText("password"), password);

    expect(screen.getByRole("button", { name: "Entrar" })).toBeEnabled();
  });
});
