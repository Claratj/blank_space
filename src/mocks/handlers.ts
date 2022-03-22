import { rest } from "msw";
import updateUsersLogged from "../services/updateUsersLogged.service";
import dummy_getUsers_response from "./serverResponses/dummy_getUsers_response";

function getUsers(req: any, res: any, ctx: any) {
  return res(ctx.json(updateUsersLogged()));
}

function createUser(req: any, res: any, ctx: any) {
  return res(ctx.json());
}

const usersHandlers = [
  rest.get("https://blankspace.com/users", getUsers),
  rest.post("https://blankspace.com/signup", createUser),
];

export default usersHandlers;
