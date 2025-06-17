import { Controller, Get, Post, Delete, Patch, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Body } from '@nestjs/common';
import { TodoDto } from 'src/dto/todo.dto';

@Controller('/todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getTodos(): TodoDto[] {
    return this.todoService.getTodos();
  }

  @Post()
  postTodo(@Body() body: TodoDto): TodoDto {
    return this.todoService.addTodo(body);
  }

  @Delete(':id')
  deleteTodo(@Param() id: string): TodoDto | string {
    return this.todoService.deleteTodo(+id);
  }

  @Patch()
  patchTodo(): string {
    return 'Patch from ToDo';
  }
}
