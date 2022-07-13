import {BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class item extends BaseEntity{
    @Field(()=>String)
    @Column()
    name:string;
    @Field(()=>String)
    @Column()
    description:string;
    @Field(()=>String)
    @PrimaryGeneratedColumn()
    id:string;
    @Field(()=>Number)
    @Column()
    price:number;
    @Field(()=>String)
    @Column()
    featured_image:string;
    @Field(()=>String)
    @Column()
    category:string;
}