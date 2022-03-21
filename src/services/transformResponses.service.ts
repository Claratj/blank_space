import { IUser } from "../Entities/types";
import dummy_getUsers_response from "../mocks/serverResponses/dummy_getUsers_response";

export default function transformResponses(newUser: IUser) {
  let dummy_users_response_array = [];

  for (let user in dummy_getUsers_response) {
    dummy_users_response_array.push(user);
  }

  dummy_users_response_array.push(newUser);

  //sobreescribir el dummy_getUsers_response?

  return {
    dummy_users_response_array,
  };
}
