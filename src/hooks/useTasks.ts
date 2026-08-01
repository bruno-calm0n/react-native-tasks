import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo, useState } from 'react';

import { Task, TaskPriority } from '../types/task';
import { createTask, normalizeTaskTitle, splitTasksByStatus } from '../utils/taskUtils';

const TASKS_STORAGE_KEY = '@react-native-tasks/tasks';

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

function isTask(value: unknown): value is Task {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const task = value as Task;

  return (
    typeof task.id === 'string' &&
    typeof task.title === 'string' &&
    (task.priority === 'high' || task.priority === 'medium' || task.priority === 'low') &&
    typeof task.isCompleted === 'boolean'
  );
}

function parseStoredTasks(storedTasks: string): Task[] | null {
  try {
    const parsedTasks: unknown = JSON.parse(storedTasks);

    if (!Array.isArray(parsedTasks) || !parsedTasks.every(isTask)) {
      return null;
    }

    return parsedTasks;
  } catch {
    return null;
  }
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [hasLoadedStoredTasks, setHasLoadedStoredTasks] = useState<boolean>(false);

  const { pendingTasks, completedTasks } = useMemo(
    () => splitTasksByStatus(tasks),
    [tasks],
  );

  useEffect(() => {
    let isMounted = true;

    async function loadTasks(): Promise<void> {
      const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);

      if (!isMounted) {
        return;
      }

      if (storedTasks) {
        const parsedTasks = parseStoredTasks(storedTasks);

        if (parsedTasks) {
          setTasks(parsedTasks);
        }
      }

      setHasLoadedStoredTasks(true);
    }

    loadTasks().catch(() => undefined);

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!hasLoadedStoredTasks) {
      return;
    }

    AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks)).catch(() => undefined);
  }, [hasLoadedStoredTasks, tasks]);

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
