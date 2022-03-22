import { IUser } from "../Entities/types";
import dummy_getUsers_response from "../mocks/serverResponses/dummy_getUsers_response";

export default function updateUsersLogged(newUser?: IUser) {
  if (newUser) {
    dummy_getUsers_response.users.push(newUser as any);
  }

  return dummy_getUsers_response.users;
}
