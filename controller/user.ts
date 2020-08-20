import { getQuery } from "https://deno.land/x/oak/helpers.ts";
import { Context } from "https://deno.land/x/oak/context.ts";

import { IUser } from "../model/user.ts";
import UserRepository from "../repositories/user.ts";

const userRepository = new UserRepository();

export const getUsers = async ({ response }: { response: any }) => {
  const users = await userRepository.getAll();

  response.body = users;
};

export const getUser = async ( { params, response }: { params: { id: string }; response: any } ) => {
  const user = await userRepository.getById(params.id);

  if ( user ) {
    response.status = 200;
    response.body = user;
  } else {
    response.status = 404;
    response.body = { message: "User not found." };
  }
};

export const addUsers = async ( { request, response }: { request: any; response: any }, ) => {
  /*const body = await request.body();
  const newUsers: Array<IUser> = body.value;

  //console.log(users.filter(user => user.id == newUser.id && user.name == newUser.name && user.email == newUser.email ));
  console.log(newUsers);

  for ( let newUser of newUsers ) {
    if ( users.find(user => user.id == newUser.id && user.name == newUser.name && user.email == newUser.email ) ) {
      response.body = { message: "User(s) already exists" };
      response.status = 200;
    } else {
      newUser.create_at = new Date();
      newUser.update_at = new Date();
      users.push(newUser);

      response.body = { message: "OK" };
      response.status = 201;
    }
  }*/
};

export const addUser = async ( { request, response }: { request: any; response: any }, ) => {
  const body = await request.body();
  const user: IUser = body.value;

  userRepository.create(user);

  response.body = { message: "OK" };
  response.status = 201;
};

export const updateUser = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const body = await request.body();
  const updateUser: { name?: string; email?: string } = body.value;

  const user = await userRepository.update(params.id, updateUser);

  if ( user ) {
    response.status = 200;
    response.body = { message: "OK" };
  } /*else {
    response.status = 404;
    response.body = { message: "User not found." };
  }*/
};

export const deleteUser = async (
  //{ params, response }: { params: { id: string }; response: any },
  { params, response }: { params: any; response: any },
) => {
  const user = await userRepository.delete(params.id);

  response.body = { message: "OK" };
  response.status = 200;
};

//export { getUsers, getUser, addUser, updateUser };
//export { getUsers, getUser, addUsers, addUser, updateUser, deleteUser };