import { Application } from "https://deno.land/x/oak/mod.ts";
import { applyGraphQL, gql } from "https://deno.land/x/oak_graphql/mod.ts";

import UserRepository from "./repositories/user.ts";

const userRepository = new UserRepository();
const app = new Application();

const typeDefs = gql``;

const port = 3030;

console.log(`Server started on http://localhost:${port}`);

await app.listen({ port });