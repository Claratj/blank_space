import React from "react";
import * as fs from "fs";
// import dummy_getUsers_response from "../mocks/serverResponses/dummy_getUsers_response";
import updateUsersLogged from "./updateUsersLogged.service";

interface INewUser {
  userName: string;
  email: string;
  password: string;
}

function listUsers() {
  // return dummy_getUsers_response;
  return updateUsersLogged();
}

function createUser(newUser: INewUser) {}
