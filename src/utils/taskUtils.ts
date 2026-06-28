import { Task, TaskPriority } from '../types/task';

export const taskPriorityLabels: Record<TaskPriority, string> = {
  high: 'Alta',
  medium: 'Media',
  low: 'Baixa',
};

export const taskPriorityColors: Record<TaskPriority, string> = {
  high: '#DC2626',
  medium: '#D97706',
  low: '#0F9F6E',
};

export const taskPriorityBackgroundColors: Record<TaskPriority, string> = {
  high: '#FEE2E2',
  medium: '#FEF3C7',
  low: '#DFF7EC',
};

export function normalizeTaskTitle(title: string): string {
  return title.trim().replace(/\s+/g, ' ');
}

export function createTask(title: string, priority: TaskPriority): Task {
  return {
    id: String(Date.now()),
    title: normalizeTaskTitle(title),
    priority,
    isCompleted: false,
  };
}

export function splitTasksByStatus(tasks: Task[]): {
  pendingTasks: Task[];
  completedTasks: Task[];
} {
  return {
    pendingTasks: tasks.filter((task) => !task.isCompleted),
    completedTasks: tasks.filter((task) => task.isCompleted),
  };
}
