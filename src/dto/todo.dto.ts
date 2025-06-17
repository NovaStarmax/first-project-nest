import { IsOptional, IsString, IsEnum, IsInt } from 'class-validator';

enum StateTodo {
  Done = 'Done',
  InProgress = 'InProgress',
  Todo = 'Todo',
}

export class TodoDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  task: string;

  @IsOptional()
  @IsEnum(StateTodo)
  stateTodo: StateTodo = StateTodo.Todo;
}
