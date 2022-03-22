import { defaultSession, storageKey } from "../services/session.service";
import { IAction, IAuthState } from "./AuthContext";

export const authReducer = (state: IAuthState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case "[auth] Login":
      const loginSession = {
        ...payload,
        logged: true,
      };
      sessionStorage.setItem(storageKey, JSON.stringify(loginSession));
      return loginSession;
    case "[auth] Logout":
      sessionStorage.clear();
      return defaultSession;
    default:
      return state;
  }
};
