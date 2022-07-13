import { Query, Resolver } from "type-graphql";
import { indya_database } from "./indya_database";

@Resolver()
export default class ItemResolver{
    @Query(() => [indya_database]) 
    items():Promise<indya_database[]>{
        return indya_database.find();
    }
}