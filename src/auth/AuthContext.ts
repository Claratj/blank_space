import React, { createContext, Dispatch } from "react";
import { IUser } from "../Entities/types";
import { defaultSession } from "../services/session.service";

export interface IAuthState {
  logged: boolean;
  email?: string;
  password?: string;
  userName?: string;
}

export enum ActionType {
  LOGIN = "[auth] Login",
  LOGOUT = "[auth] Logout",
}

export type IAction = {
  type: ActionType;
  payload: IUser;
};

export interface IAuthStateContext {
  state: IAuthState;
  dispatch: Dispatch<any>;
}

export const AuthContext = createContext<IAuthStateContext>({
  state: defaultSession,
  dispatch: () => null,
});
