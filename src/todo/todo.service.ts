import { Injectable } from '@nestjs/common';
// import { TodoDto, StateTodo } from 'src/dto/todo.dto';
import { PrismaClient, Todo } from 'generated/prisma';

@Injectable()
export class TodoService {
  prisma = new PrismaClient();

  public async getTodos() {
    return await this.prisma.todo.findMany();
  }

  public async getTodo(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: { id },
    });

    return todo || 'can not find your task';
  }

  public async createTodo(task: Todo) {
    return await this.prisma.todo.create({
      data: {
        task: task.task,
        stateTodo: task.stateTodo,
      },
    });
  }

  public async deleteTodo(id: number): Promise<Todo | string> {
    try {
      const deletedTodo = await this.prisma.todo.delete({ where: { id } });
      return deletedTodo; // Prisma retourne l'élément supprimé !
    } catch (error) {
      return 'Task not found : ' + error;
    }
  }

  public async modifyTodo(id: number, data: Todo): Promise<Todo | string> {
    try {
      const todo = await this.prisma.todo.update({
        where: { id },
        data: {
          task: data.task,
          stateTodo: data.stateTodo,
        },
      });
      return todo;
    } catch (error) {
      return 'task not found or update failed' + error;
    }
  }

  // public modifyTodo(id: number, task: TodoDto): TodoDto | string {
  //   const index = this.todos.findIndex((todo) => todo.id === id);
  //   if (index !== -1) {
  //     const modified_task: TodoDto = {
  //       id: id,
  //       task: task.task,
  //       stateTodo: task.stateTodo,
  //     };
  //     this.todos.splice(index, 1, modified_task);
  //     return modified_task;
  //   }
  //   return 'can not find your task with your';
  // }
}
