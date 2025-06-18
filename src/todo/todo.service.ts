import { Injectable } from '@nestjs/common';
import { TodoDto, StateTodo } from 'src/dto/todo.dto';

@Injectable()
export class TodoService {
  id: number = 1;
  readonly todos: TodoDto[] = [
    { id: 0, task: 'Auto generate', stateTodo: StateTodo.Done },
  ];

  public getTodos(): TodoDto[] {
    return this.todos;
  }

  public getTodo(id: number): TodoDto | string {
    const todo = this.todos.find((todo) => todo.id === id);
    return todo || 'can not find specific task';
  }

  public addTodo(task: TodoDto) {
    const new_task: TodoDto = {
      id: this.id,
      task: task.task,
      stateTodo: task.stateTodo,
    };
    this.todos.push(new_task);
    this.id++;
    return new_task;
  }

  public deleteTodo(id: number): TodoDto | string {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      return this.todos.splice(index, 1)[0]; // Splice prend (start, numberToDelete) et retourne les ou l’élément supprimé sans recrée un nouveau tableau
    }
    return 'task not found';
  }

  public modifyTodo(id: number, task: TodoDto): TodoDto | string {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== id) {
      const modified_task: TodoDto = {
        id: id,
        task: task.task,
        stateTodo: task.stateTodo,
      };
      this.todos.splice(index, 1, modified_task);
      return modified_task;
    }
    return 'can not find your task with your';
  }
}
