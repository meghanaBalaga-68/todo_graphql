"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("./todo.entity");
const uuid_1 = require("uuid");
const typeorm_2 = require("@nestjs/typeorm");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async createTodo(todo) {
        const newTodo = new todo_entity_1.Todo();
        newTodo.todo_id = (0, uuid_1.v4)();
        newTodo.created_at = new Date();
        newTodo.title = todo.title;
        newTodo.description = todo.description;
        newTodo.completed = todo.completed;
        await this.todoRepository.save(newTodo);
        return newTodo;
    }
    async updateTodo(todo) {
        const todoToUpdate = await this.todoRepository.findOne({ todo_id: todo.todo_id });
        if (!todoToUpdate) {
            throw new Error('Todo not exists!!!');
        }
        todoToUpdate.title = todo.title;
        todoToUpdate.description = todo.description;
        todoToUpdate.completed = todo.completed;
        await this.todoRepository.save(todoToUpdate);
        return todoToUpdate;
    }
    async findAll(input) {
        let findByArg = {};
        console.log(input.sort);
        if (input.sort) {
            findByArg = {
                order: {
                    created_at: input.sort
                }
            };
        }
        return await this.todoRepository.find(findByArg);
    }
    async findOneById(id) {
        return await this.todoRepository.findOne({ todo_id: id });
    }
    async remove(id) {
        const deletedtodo = await this.findOneById(id);
        if (!deletedtodo) {
            throw new Error('Todo not found');
        }
        const m = await this.todoRepository.delete(deletedtodo);
        return deletedtodo;
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TodoService);
//# sourceMappingURL=todo.service.js.map