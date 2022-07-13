import {BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class indya_database extends BaseEntity{
    @Field(()=>String)
    @Column()
    name:string;
    @Column()
    description:string;
    @PrimaryGeneratedColumn()
    id:string;
    @Column()
    price:number;
    @Column()
    featured_image:string;
    @Column()
    category:string;
}