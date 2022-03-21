import React from "react";
import validatePassword from "../../services/validatePassword/validatePassword.service";

export interface IPassword {
  password: string;
}

export default function PasswordValidator({ password }: IPassword) {
  const {
    hasMinLength,
    hasLowerCharacter,
    hasUpperCharacter,
    hasSpecialCharacter,
    hasDigits,
  } = validatePassword(password);

  return (
    <ul className="w-full h-16 flex flex-col justify-start flex-wrap">
      <li className="flex space-x-2 items-center">
        {hasMinLength ? (
          <span className="text-xs font-light text-teal-500">
            {" "}
            ✓ 12 characters minimum
          </span>
        ) : (
          <span className="text-xs font-light text-red-500">
            {" "}
            ✕ 12 characters minimum
          </span>
        )}
      </li>
      <li>
        {hasLowerCharacter ? (
          <span className="text-xs font-light text-teal-500">
            {" "}
            ✓ One lowercase character
          </span>
        ) : (
          <span className="text-xs font-light text-red-500">
            {" "}
            ✕ One lowercase character
          </span>
        )}
      </li>
      <li>
        {hasUpperCharacter ? (
          <span className="text-xs font-light text-teal-500">
            {" "}
            ✓ One uppercase character
          </span>
        ) : (
          <span className="text-xs font-light text-red-500">
            {" "}
            ✕ One uppercase character
          </span>
        )}
      </li>
      <li>
        {hasDigits ? (
          <span className="text-xs font-light text-teal-500">
            {" "}
            ✓ One number
          </span>
        ) : (
          <span className="text-xs font-light text-red-500"> ✕ One number</span>
        )}
      </li>
      <li>
        {hasSpecialCharacter ? (
          <span className="text-xs font-light text-teal-500">
            {" "}
            ✓ One special character
          </span>
        ) : (
          <span className="text-xs font-light text-red-500">
            {" "}
            ✕ One special character
          </span>
        )}
      </li>
    </ul>
  );
}
