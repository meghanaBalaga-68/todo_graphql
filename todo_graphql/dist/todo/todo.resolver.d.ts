import { Todo } from "./todo.entity";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create.todo.dto";
import { UpdateTodoDto } from "./dto/update.todo";
import { GetArgTodo } from "./dto/get.arg.todo";
export declare class TodoResolver {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(input: CreateTodoDto): Promise<Todo>;
    updateTodo(input: UpdateTodoDto): Promise<Todo>;
    todos(args: GetArgTodo): Promise<Todo[]>;
    todo(id: string): Promise<Todo>;
    deletetodo(id: string): Promise<Todo>;
}
