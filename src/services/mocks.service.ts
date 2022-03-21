import React from "react";

import * as fs from "fs";
import * as data from "../data/users.json";
import dummy_getUsers_response from "../mocks/serverResponses/dummy_getUsers_response";

interface INewUser {
  userName: string;
  email: string;
  password: string;
}

function listUsers() {
  return dummy_getUsers_response;
}

function createUser(newUser: INewUser) {}
