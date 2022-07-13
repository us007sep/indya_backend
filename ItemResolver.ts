import { Query, Resolver } from "type-graphql";
import { item } from "./item";

@Resolver()
export default class ItemResolver{
    @Query(() => [item]) 
    items():Promise<item[]>{
        return item.find();
    }
}