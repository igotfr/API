import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import { HOST, PORT } from "./config.ts";
import router from "./router.ts";

const app = new Application();

app.use(oakCors()); // Enabled Cors
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listen on ${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`);