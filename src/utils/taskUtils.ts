import { Task, TaskPriority } from '../types/task';

export const taskPriorityLabels: Record<TaskPriority, string> = {
  high: 'Alta',
  medium: 'Média',
  low: 'Baixa',
};

export const taskPriorityColors: Record<TaskPriority, string> = {
  high: '#DC2626',
  medium: '#D97706',
  low: '#0F9F6E',
};

export function normalizeTaskTitle(title: string): string {
  return title.trim().replace(/\s+/g, ' ');
}

type RandomUUIDProvider = {
  randomUUID?: () => string;
};

let fallbackTaskIdSequence = 0;

function createTaskId(): string {
  const cryptoProvider = (globalThis as typeof globalThis & {
    crypto?: RandomUUIDProvider;
  }).crypto;

  if (typeof cryptoProvider?.randomUUID === 'function') {
    return cryptoProvider.randomUUID();
  }

  fallbackTaskIdSequence += 1;
  return `${Date.now()}-${fallbackTaskIdSequence}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createTask(title: string, priority: TaskPriority): Task {
  return {
    id: createTaskId(),
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
