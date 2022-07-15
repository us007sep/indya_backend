import { Query, Resolver } from "type-graphql";
import user  from "./user";

@Resolver()
export default class UserResolver{
    @Query(() => [user]) 
    users():Promise<user[]>{
        return user.find();
    }
}