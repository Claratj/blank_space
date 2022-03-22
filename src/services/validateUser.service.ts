import { IUser } from "../Entities/types";
import dummy_getUsers_response from "../mocks/serverResponses/dummy_getUsers_response";
import { IUserLogin } from "../pages/LoginPage/useLoginPage";
import updateUsersLogged from "./updateUsersLogged.service";

export default function validateUser(user: IUserLogin) {
  //changuilla a falta de backend que me vaya actualizando el get de los usuarios

  const usersLogged = updateUsersLogged();

  // const usersLogged = dummy_getUsers_response.users;

  const checkedUser = usersLogged.find(
    (userLogged) =>
      userLogged.email === user.email && userLogged.password === user.password
  );

  return checkedUser ? checkedUser : console.log("no estás loggeado");
}
