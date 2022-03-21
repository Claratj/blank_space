import { rest } from "msw";
import dummy_getUsers_response from "./serverResponses/dummy_getUsers_response";

function getUsers(req: any, res: any, ctx: any) {
  return res(ctx.json(dummy_getUsers_response));
}

function createUser(req: any, res: any, ctx: any) {
  return res(ctx.json());
}

const usersHandlers = [
  rest.get("https://blankspace.com/users", getUsers),
  rest.post("https://blankspace.com/signup", createUser),
];

export default usersHandlers;
