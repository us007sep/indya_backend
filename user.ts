import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm"
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export default class user extends BaseEntity{
    @Field(()=>String)
    @Column()
    fname:string;
    @Field(()=>String)
    @Column()
    lname:string;
    @Field(()=>String)
    @PrimaryGeneratedColumn()
    email:string;
    @Field(()=>String)
    @Column()
    password:string;
    @Field(()=>String)
    @Column()
    featured_image:string;
}