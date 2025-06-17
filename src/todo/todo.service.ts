import { Injectable } from '@nestjs/common';
import { TodoDto } from 'src/dto/todo.dto';

@Injectable()
export class TodoService {
  readonly todos: TodoDto[] = [];

  public getTodos(): TodoDto[] {
    return this.todos;
  }

  public addTodo(task: TodoDto) {
    this.todos.push(task);
    return task;
  }

  public deleteTodo(id: number): TodoDto | string {
    const task = this.todos.find((todo: TodoDto) => todo.id === id);
    if (task) {
      return task;
    } else {
      return 'task not found';
    }
  }
}
