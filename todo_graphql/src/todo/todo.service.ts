import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import {v4 as uuid} from 'uuid';
import { UpdateTodoDto } from './dto/update.todo';
import { CreateTodoDto } from './dto/create.todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GetArgTodo } from './dto/get.arg.todo';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) private todoRepository: Repository<Todo>){}

    async createTodo(todo:CreateTodoDto):Promise<Todo> {
        const newTodo = new Todo();

        //default
        newTodo.todo_id = uuid();
        newTodo.created_at = new Date();    
        //assiging the value 
        newTodo.title = todo.title;
        newTodo.description = todo.description;
        newTodo.completed = todo.completed;

        await this.todoRepository.save(newTodo);
        return newTodo;
    }
     
    async updateTodo(todo: UpdateTodoDto):Promise<Todo> {
        const todoToUpdate =await this.todoRepository.findOne({todo_id: todo.todo_id} as any)
        if (!todoToUpdate) {
            throw new Error('Todo not exists!!!');
        }

        todoToUpdate.title = todo.title;
        todoToUpdate.description = todo.description;
        todoToUpdate.completed = todo.completed;

        await this.todoRepository.save(todoToUpdate);
        return todoToUpdate;
    }

    

    async findAll(input?: GetArgTodo):Promise<Todo[]>{
        let findByArg= {};
        console.log(input.sort);
        if(input.sort){
            findByArg = {
                order: {
                    created_at: input.sort
                }
            }
        }
        return await this.todoRepository.find(findByArg as any);
    }

    async findOneById(id: string):Promise<Todo>{
        return await this.todoRepository.findOne({todo_id: id} as any)
    }

    async remove(id: string): Promise<Todo> {
        const deletedtodo = await this.findOneById(id);
        // console.log(deletedtodo,"@find");
        if (!deletedtodo) {
          throw new Error('Todo not found');
        }
        

       const m=await this.todoRepository.delete(deletedtodo);
    //    console.log(m,'@res');
       return deletedtodo;
      }
}
