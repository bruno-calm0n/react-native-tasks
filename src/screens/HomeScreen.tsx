import { useMemo, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/base/AppButton';
import { AppContainer } from '../components/base/AppContainer';
import { AppTextInput } from '../components/base/AppTextInput';
import { TaskItem } from '../components/tasks/TaskItem';
import { colors, spacing } from '../constants/theme';
import { Task } from '../types/task';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Planejar o dia',
    description: 'Definir as tres prioridades principais.',
    priority: 'high',
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Revisar tarefas pendentes',
    description: 'Remover ou reagendar itens sem urgencia.',
    priority: 'medium',
    isCompleted: false,
  },
];

export function HomeScreen() {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const pendingCount = useMemo<number>(
    () => tasks.filter((task) => !task.isCompleted).length,
    [tasks],
  );

  function handleAddTask(): void {
    const normalizedTitle = taskTitle.trim();

    if (!normalizedTitle) {
      Alert.alert('Titulo obrigatorio', 'Digite uma tarefa antes de adicionar.');
      return;
    }

    const newTask: Task = {
      id: String(Date.now()),
      title: normalizedTitle,
      priority: 'medium',
      isCompleted: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
    setTaskTitle('');
  }

  return (
    <AppContainer>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Minhas tarefas</Text>
        <Text style={styles.title}>Organize o que importa hoje.</Text>
        <Text style={styles.subtitle}>
          {pendingCount} {pendingCount === 1 ? 'tarefa pendente' : 'tarefas pendentes'}
        </Text>
      </View>

      <View style={styles.form}>
        <AppTextInput
          label="Nova tarefa"
          onChangeText={setTaskTitle}
          placeholder="Ex: Comprar mantimentos"
          returnKeyType="done"
          value={taskTitle}
          onSubmitEditing={handleAddTask}
        />
        <AppButton title="Adicionar tarefa" onPress={handleAddTask} />
      </View>

      <View style={styles.list}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 22,
  },
  form: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  list: {
    gap: spacing.md,
  },
});
