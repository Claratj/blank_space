import validatePassword from "./validatePassword.service";

describe("validate password service", () => {
  it("should return true when password is min 12 characters", () => {
    const { hasMinLength } = validatePassword("dummy_password");

    expect(hasMinLength).toBe(true);
  });
  it("should return true when password has a lowercase character", () => {
    const { hasLowerCharacter } = validatePassword("dummy_password");

    expect(hasLowerCharacter).toBe(true);
  });
  it("should return true when password has an uppercase character", () => {
    const { hasUpperCharacter } = validatePassword("dummy_Character");

    expect(hasUpperCharacter).toBe(true);
  });
  it("should return true when password has a special character", () => {
    const { hasSpecialCharacter } = validatePassword("dummy_character");

    expect(hasSpecialCharacter).toBe(true);
  });
  it("should return true when password has a number ", () => {
    const { hasDigits } = validatePassword("dummy_password1");

    expect(hasDigits).toBe(true);
  });
});
