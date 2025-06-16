import { Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Body } from '@nestjs/common';
import { TodoDto } from 'src/dto/todo.dto';

@Controller('/todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getTodos(): string {
    return 'Get from ToDo';
  }

  @Post()
  postTodo(@Body() body: TodoDto): TodoDto[] {
    return this.todoService.addTodo(body);
  }

  @Delete()
  deleteTodo(): string {
    return 'Delete from ToDo';
  }

  @Patch()
  patchTodo(): string {
    return 'Patch from ToDo';
  }
}
