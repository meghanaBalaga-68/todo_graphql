import { InputType, Field } from "@nestjs/graphql";

import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

@InputType()
export class CreateTodoDto{
    @Field()
    @IsNotEmpty()
    @IsString()
    title: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    description: string;

    @Field()
    @IsNotEmpty()
    @IsBoolean()
    completed: boolean;
}