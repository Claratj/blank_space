import { IAuthState } from "../auth/AuthContext";

export const storageKey = "[auth-login]";

export const defaultSession = {
  logged: false,
};

export function getSession() {
  //hay que cambiar esto

  const session = sessionStorage.getItem(storageKey);
  return session ? JSON.parse(session) : defaultSession;
}
