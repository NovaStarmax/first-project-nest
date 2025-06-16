import { IsOptional, IsString, IsEnum } from 'class-validator';

enum StateTodo {
  Done = 'Done',
  InProgress = 'InProgress',
  Todo = 'Todo',
}

export class TodoDto {
  @IsString()
  task: string;

  @IsOptional()
  @IsEnum(StateTodo)
  stateTodo: StateTodo = StateTodo.Todo;
}
