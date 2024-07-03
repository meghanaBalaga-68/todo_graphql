import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoResolver } from './todo.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodoService, TodoResolver],
  exports: [ TodoService]
})
export class TodoModule {}
