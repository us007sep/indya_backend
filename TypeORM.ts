import * as koa from "koa";
import "./createConnection";
import user from "./user";

const server = new koa();

server.use(async ctx => {
    ctx.response.body = await user.find();
})

server.listen(process.env.PORT || 3009 , () => console.log("Koa server is running"));