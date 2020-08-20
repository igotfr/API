import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

import { DB_HOST, DB_NAME } from "../config.ts";

const client = new MongoClient();
client.connectWithUri(DB_HOST);

const db = client.database(DB_NAME);

export default db;