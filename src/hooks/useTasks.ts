import { useMemo, useState } from 'react';

import { Task, TaskPriority } from '../types/task';
import { createTask, normalizeTaskTitle, splitTasksByStatus } from '../utils/taskUtils';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Planejar o dia',
    priority: 'high',
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Revisar tarefas pendentes',
    priority: 'medium',
    isCompleted: false,
  },
];

type UpdateTaskInput = {
  title: string;
  priority: TaskPriority;
};

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const { pendingTasks, completedTasks } = useMemo(
    () => splitTasksByStatus(tasks),
    [tasks],
  );

  function addTask(title: string, priority: TaskPriority): boolean {
    const normalizedTitle = normalizeTaskTitle(title);

    if (!normalizedTitle) {
      return false;
    }

    setTasks((currentTasks) => [createTask(normalizedTitle, priority), ...currentTasks]);
    return true;
  }

  function updateTask(taskId: string, input: UpdateTaskInput): boolean {
    const normalizedTitle = normalizeTaskTitle(input.title);

    if (!normalizedTitle) {
      return false;
    }

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, title: normalizedTitle, priority: input.priority }
          : task,
      ),
    );

    return true;
  }

  function toggleTaskCompletion(taskId: string): void {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function deleteTask(taskId: string): void {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }

  return {
    tasks,
    pendingTasks,
    completedTasks,
    addTask,
    updateTask,
    toggleTaskCompletion,
    deleteTask,
  };
}
