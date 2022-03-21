import React from "react";

const SPECIAL_CHARACTERS = /[!#$%&+,-./:;<=>?@_{|}]/;

export default function validatePassword(password: string) {
  const hasMinLength = password.length >= 12;
  const hasLowerCharacter = /[a-z]/.test(password);
  const hasUpperCharacter = /[A-Z]/.test(password);
  const hasSpecialCharacter = SPECIAL_CHARACTERS.test(password);
  const hasDigits = /\d/.test(password);
  return {
    hasMinLength,
    hasLowerCharacter,
    hasUpperCharacter,
    hasSpecialCharacter,
    hasDigits,
  };
}
