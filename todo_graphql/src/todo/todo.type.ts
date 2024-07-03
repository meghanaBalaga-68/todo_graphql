import {v4 as uuidv4} from 'uuid';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';

//Graphql types
@ObjectType()
export class TodoType {
    @Field(() => ID)
    todo_id: string = uuidv4();

    @Field(()=> String)
    title: string;

    @Field(()=>String)
    description: string;

    @Field(()=>String, {defaultValue: "false"})
    completed: string;
    
    @Field()
    created_at: Date;
}
