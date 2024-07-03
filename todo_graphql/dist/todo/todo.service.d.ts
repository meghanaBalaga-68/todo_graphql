import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { UpdateTodoDto } from './dto/update.todo';
import { CreateTodoDto } from './dto/create.todo.dto';
import { GetArgTodo } from './dto/get.arg.todo';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    createTodo(todo: CreateTodoDto): Promise<Todo>;
    updateTodo(todo: UpdateTodoDto): Promise<Todo>;
    findAll(input?: GetArgTodo): Promise<Todo[]>;
    findOneById(id: string): Promise<Todo>;
    remove(id: string): Promise<Todo>;
}
