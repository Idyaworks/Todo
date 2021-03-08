export enum TaskStatus {
  Completed,
  New,
}

export interface Task {
  id?: number;
  title: string;
  description: string;
  status: TaskStatus;
  date?: Date;
}

export interface Filters {
  status: TaskStatus[];
}
