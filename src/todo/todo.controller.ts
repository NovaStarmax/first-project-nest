import { Controller, Get, Post, Delete, Patch, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Body } from '@nestjs/common';
import { Todo } from 'generated/prisma';

@Controller('/todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  async getTodo(@Param('id') id: string): Promise<Todo | string> {
    return this.todoService.getTodo(+id);
  }

  @Post()
  async createTodo(@Body() body: Todo): Promise<Todo> {
    return this.todoService.createTodo(body);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<Todo | string> {
    return this.todoService.deleteTodo(+id);
  }

  @Patch(':id')
  async modifyTodo(
    @Param('id') id: string,
    @Body() body: Todo,
  ): Promise<Todo | string> {
    return this.todoService.modifyTodo(+id, body);
  }
}
