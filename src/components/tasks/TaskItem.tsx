import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../../constants/theme';
import { Task } from '../../types/task';
import { AppCard } from '../base/AppCard';

type TaskItemProps = {
  task: Task;
};

const priorityLabel: Record<Task['priority'], string> = {
  low: 'Baixa',
  medium: 'Media',
  high: 'Alta',
};

export function TaskItem({ task }: TaskItemProps) {
  return (
    <AppCard style={styles.card}>
      <View style={styles.row}>
        <View style={styles.checkbox} />
        <View style={styles.content}>
          <Text style={styles.title}>{task.title}</Text>
          {task.description ? (
            <Text style={styles.description}>{task.description}</Text>
          ) : null}
        </View>
        <Text style={styles.priority}>{priorityLabel[task.priority]}</Text>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.md,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  content: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
  },
  priority: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
