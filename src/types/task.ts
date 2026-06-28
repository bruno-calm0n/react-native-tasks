export type TaskPriority = 'low' | 'medium' | 'high';

export type Task = {
  id: string;
  title: string;
  priority: TaskPriority;
  isCompleted: boolean;
};
