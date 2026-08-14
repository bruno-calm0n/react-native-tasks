import { Pressable, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

import { taskItemStyles } from '../../styles/task.styles';
import { Task, TaskPriority } from '../../types/task';
import { taskPriorityLabels } from '../../utils/taskUtils';
import { AppButton } from '../base/AppButton';
import { AppCard } from '../base/AppCard';

type TaskItemProps = {
  task: Task;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const priorityBadgeStyles: Record<TaskPriority, StyleProp<ViewStyle>> = {
  high: taskItemStyles.priorityHigh,
  medium: taskItemStyles.priorityMedium,
  low: taskItemStyles.priorityLow,
};

const priorityTextStyles: Record<TaskPriority, StyleProp<TextStyle>> = {
  high: taskItemStyles.priorityHighText,
  medium: taskItemStyles.priorityMediumText,
  low: taskItemStyles.priorityLowText,
};

export function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  return (
    <AppCard style={taskItemStyles.card}>
      <View style={taskItemStyles.row}>
        <Pressable
          accessibilityLabel={
            task.isCompleted ? 'Marcar tarefa como pendente' : 'Marcar tarefa como concluída'
          }
          accessibilityRole="checkbox"
          accessibilityState={{ checked: task.isCompleted }}
          onPress={onToggle}
          style={[
            taskItemStyles.checkbox,
            task.isCompleted ? taskItemStyles.checkboxCompleted : null,
          ]}
        >
          {task.isCompleted ? <Text style={taskItemStyles.checkboxMark}>✓</Text> : null}
        </Pressable>

        <View style={taskItemStyles.content}>
          <Text
            style={[
              taskItemStyles.title,
              task.isCompleted ? taskItemStyles.titleCompleted : null,
            ]}
          >
            {task.title}
          </Text>
        </View>
      </View>

      <View style={taskItemStyles.footer}>
        <View style={taskItemStyles.actions}>
          {!task.isCompleted ? (
            <AppButton title="Editar" onPress={onEdit} size="small" variant="text" />
          ) : null}
          <AppButton title="Deletar" onPress={onDelete} size="small" variant="textDanger" />
        </View>
        <View style={[taskItemStyles.priorityBadge, priorityBadgeStyles[task.priority]]}>
          <Text style={[taskItemStyles.priorityText, priorityTextStyles[task.priority]]}>
            {taskPriorityLabels[task.priority]}
          </Text>
        </View>
      </View>
    </AppCard>
  );
}
