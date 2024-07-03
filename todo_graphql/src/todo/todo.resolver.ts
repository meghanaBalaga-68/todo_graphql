import { UsePipes, ValidationPipe } from "@nestjs/common";
import { Resolver, Mutation, Query, Args } from "@nestjs/graphql";
import { Todo } from "./todo.entity"; 
import { TodoType } from "./todo.type"; 
import { TodoService } from "./todo.service"; 
import { CreateTodoDto } from "./dto/create.todo.dto";
import { UpdateTodoDto } from "./dto/update.todo";
import { GetArgTodo } from "./dto/get.arg.todo";


@Resolver(()=>TodoType)
export class TodoResolver {
    constructor(private readonly todoService:TodoService) {}
    
    @Mutation(()=>TodoType)
    @UsePipes(new ValidationPipe())
    async createTodo(@Args('input') input: CreateTodoDto):Promise<Todo> {
        return await this.todoService.createTodo(input);
    }

    @Mutation(()=>TodoType)
    @UsePipes(new ValidationPipe())
    async updateTodo(@Args('input') input: UpdateTodoDto):Promise<Todo> {
        return await this.todoService.updateTodo(input);
    }

    @Query(()=>[TodoType])
    async todos(@Args() args: GetArgTodo):Promise<Todo[]> {
        return await this.todoService.findAll(args);
    }


    @Query(()=>TodoType)
    async todo(@Args('id') id: string){
        return this.todoService.findOneById(id);
    }
    
    
    @Mutation(() => TodoType)
    async deletetodo(@Args('id') id: string) {
      return this.todoService.remove(id);
    }
}