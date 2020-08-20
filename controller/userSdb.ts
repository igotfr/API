import { getQuery } from "https://deno.land/x/oak/helpers.ts";
import { Context } from "https://deno.land/x/oak/context.ts";

import { IUser } from "../model/user.ts";

let users: Array<IUser> = [
  {
    id: "1",
    name: "Naruto Uzumaki",
    email: "naruto.uzumaki@viladafolha.com.br",
    create_at: new Date("2020-05-13"),
    update_at: new Date("2020-05-13"),
  },
  {
    id: "2",
    name: "Uchira Sasuke",
    email: "sasuke.uchira@akatsuki.com.br",
    create_at: new Date("2020-05-13"),
    update_at: new Date("2020-05-13"),
  },
  {
    id: "2",
    name: "Monkey D. Luffy",
    email: "monkey.d.luffy@goingmerry.com.br",
    create_at: new Date("2020-05-13"),
    update_at: new Date("2020-05-13"),
  },
  {
    id: "4",
    name: "Izuku Midoriya",
    email: "izuku.midoriya@heroes.com.br",
    create_at: new Date("2020-05-13"),
    update_at: new Date("2020-05-13"),
  }
];

/*
  aqi getQuery() precisa receber ctx como parâmetro e não algumas keys de ctx.
  ver helpers.ts

const getUsers = ( { request, response }: { request: any; response: any } ) => {*/
export const getUsers = ( ctx: Context ) => {
  const queryParams: { id?: any; name?: any; } = getQuery(ctx, { mergeParams: true });

  let usersFiltrados: Array<IUser> = users.filter(user => (user.id == queryParams.id || !("id" in queryParams))
  && (user.name.includes(queryParams.name) || !("name" in queryParams)));

  ctx.response.body = usersFiltrados;
};

//const getUser = ( { params: { id: string }, response: any } ) => {
export const getUser = ( { params, response }: { params: { id: string }; response: any }, ) => {
  const user: IUser | undefined = users.find(user => user.id === params.id);

  if ( user ) {
    response.status = 200;
    response.body = user;
  } else {
    response.status = 404;
    response.body = { message: "User not found." };
  }
};

export const addUsers = async ( { request, response }: { request: any; response: any }, ) => {
  const body = await request.body();
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
  }
};

export const addUser = async ( { request, response }: { request: any; response: any }, ) => {
  const body = await request.body();
  const newUser: IUser = body.value;

  newUser.create_at = new Date();
  newUser.update_at = new Date();

  if ( users.find(user => user.id == newUser.id && user.name == newUser.name && user.email == newUser.email ) ) {
    response.body = { message: "User already exists" };
    response.status = 200;
  } else {
    users.push(newUser);
    response.body = { message: "OK" };
    response.status = 201;
  }
};

export const updateUser = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  let user: IUser | undefined = users.find((user) => user.id === params.id);

  if ( user ) {
    const body = await request.body();
    const updateUser: { name?: string; email?: string } = body.value;

    user = { ...user, ...updateUser, update_at: new Date() };
    users = [...users.filter((user) => user.id !== params.id), user];

    response.status = 200;
    response.body = { message: "OK" };
  } else {
    response.status = 404;
    response.body = { message: "User not found." };
  }
};

export const deleteUser = (
  //{ params, response }: { params: { id: string }; response: any },
  { params, response }: { params: any; response: any },
) => {
  users.splice(users.findIndex(user => user.id === params.id), 1);

  response.body = { message: "OK" };
  response.status = 200;
};

//export { getUsers, getUser, addUser, updateUser };
//export { getUsers, getUser, addUsers, addUser, updateUser, deleteUser };