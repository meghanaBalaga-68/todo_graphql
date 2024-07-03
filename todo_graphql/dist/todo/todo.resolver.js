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
exports.TodoResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const todo_type_1 = require("./todo.type");
const todo_service_1 = require("./todo.service");
const create_todo_dto_1 = require("./dto/create.todo.dto");
const update_todo_1 = require("./dto/update.todo");
const get_arg_todo_1 = require("./dto/get.arg.todo");
let TodoResolver = class TodoResolver {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async createTodo(input) {
        return await this.todoService.createTodo(input);
    }
    async updateTodo(input) {
        return await this.todoService.updateTodo(input);
    }
    async todos(args) {
        return await this.todoService.findAll(args);
    }
    async todo(id) {
        return this.todoService.findOneById(id);
    }
    async deletetodo(id) {
        return this.todoService.remove(id);
    }
};
exports.TodoResolver = TodoResolver;
__decorate([
    (0, graphql_1.Mutation)(() => todo_type_1.TodoType),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "createTodo", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_type_1.TodoType),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_todo_1.UpdateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "updateTodo", null);
__decorate([
    (0, graphql_1.Query)(() => [todo_type_1.TodoType]),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_arg_todo_1.GetArgTodo]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todos", null);
__decorate([
    (0, graphql_1.Query)(() => todo_type_1.TodoType),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "todo", null);
__decorate([
    (0, graphql_1.Mutation)(() => todo_type_1.TodoType),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoResolver.prototype, "deletetodo", null);
exports.TodoResolver = TodoResolver = __decorate([
    (0, graphql_1.Resolver)(() => todo_type_1.TodoType),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoResolver);
//# sourceMappingURL=todo.resolver.js.map