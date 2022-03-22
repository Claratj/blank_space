import { IUser } from "../Entities/types";
import dummy_getUsers_response from "../mocks/serverResponses/dummy_getUsers_response";

export default function updateUsersLogged(newUser?: IUser) {
  let dummy_getUsers_updated_response = dummy_getUsers_response.users;
  if (newUser) {
    dummy_getUsers_updated_response.push(newUser as any);
  }

  return dummy_getUsers_updated_response;
}
