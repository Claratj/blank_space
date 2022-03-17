import users from "../data/users.json";
import { IUserLogin } from "../pages/LoginPage/useLoginPage";

export default function validateUser(user: IUserLogin) {
  const checkedUser = users.find(
    (userRegistered) =>
      userRegistered.email === user.email &&
      userRegistered.password === user.password
  );

  return checkedUser ? checkedUser : console.log("no estás loggeado");
}
