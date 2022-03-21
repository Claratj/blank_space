import { getUsers } from "../api-client/api";
import { IUser } from "../Entities/types";
import { IUserLogin } from "../pages/LoginPage/useLoginPage";

export default function validateUser(user: IUserLogin) {
  let users: IUser[] = [];
  getUsers().then((res: IUser[]) => (users = res));

  const checkedUser = users.find(
    (userRegistered: IUser) =>
      userRegistered.email === user.email &&
      userRegistered.password === user.password
  );
  return checkedUser ? checkedUser : console.log("no estás loggeado");
}
