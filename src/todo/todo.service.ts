import { Injectable } from '@nestjs/common';
import { TodoDto } from 'src/dto/todo.dto';

@Injectable()
export class TodoService {
  readonly todos: TodoDto[] = [];

  public addTodo(task: TodoDto) {
    this.todos.push(task);
    return this.todos;
  }
}
