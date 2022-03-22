import axios from "axios";
import { IUser } from "../Entities/types";

export async function getUsers(): Promise<any> {
  return await axios
    .get("https://blankspace.com/users")
    .then((res) => res.data)
    .then((data) => data.users)
    .catch((err) => console.error(err));
}

export async function createUser(newUser: IUser): Promise<IUser> {
  return await axios
    .post("https://blankspace.com/signup")
    .then((res) => res.data)
    .catch((err) => console.error(err));
}
