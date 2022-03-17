import React, { createContext, Dispatch } from "react";
import { defaultSession } from "../services/session.service";

export interface IAuthState {
  userName: string;
  logged: boolean;
}

enum ActionType {
  LOGIN = "[auth] Login",
  LOGOUT = "[auth] Logout",
}

export type IAction = {
  type: ActionType;
};

export interface IAuthStateContext {
  state: IAuthState;
  dispatch: Dispatch<any>;
}

export const AuthContext = createContext<IAuthStateContext>({
  state: defaultSession,
  dispatch: () => null,
});
