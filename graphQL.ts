import * as koa from "koa";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-koa";
import * as Router from "koa-router";
import { graphqlHTTP } from "koa-graphql";
import "./createConnection";
import * as cors from "@koa/cors"
import ItemResolver from "./ItemResolver";
import UserResolver from "./UserResolver";

async function main(){
    const app = new koa();

    const resolvers =await buildSchema({
        resolvers: [ItemResolver,UserResolver]
    });

    const appoloServer = new ApolloServer({schema:resolvers});

    const routers = new Router();
    routers.all("/graphql", graphqlHTTP({schema:resolvers}));      //graphQLHTTP is the server and first argument is the endpoint
    appoloServer.applyMiddleware({app});
    app.use(cors());    //Connecting the firebase and heroku
    app.use(routers.routes()).use(routers.allowedMethods());
    app.use(cors());
    app.listen(process.env.PORT || 3010 , () => console.log("Hello from KOA Server"));
}

main();