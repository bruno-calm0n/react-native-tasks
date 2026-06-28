import { Pressable, Text, View } from 'react-native';

import { taskItemStyles } from '../../styles/task.styles';
import { Task } from '../../types/task';
import {
  taskPriorityBackgroundColors,
  taskPriorityColors,
  taskPriorityLabels,
} from '../../utils/taskUtils';
import { AppButton } from '../base/AppButton';
import { AppCard } from '../base/AppCard';

type TaskItemProps = {
  task: Task;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  return (
    <AppCard style={taskItemStyles.card}>
      <View style={taskItemStyles.row}>
        <Pressable
          accessibilityLabel={
            task.isCompleted ? 'Marcar tarefa como pendente' : 'Marcar tarefa como concluida'
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

        <View style={[taskItemStyles.content, taskItemStyles.titleBlock]}>
          <Text
            style={[
              taskItemStyles.title,
              task.isCompleted ? taskItemStyles.titleCompleted : null,
            ]}
          >
            {task.title}
          </Text>
          <View
            style={[
              taskItemStyles.priority,
              {
                backgroundColor: taskPriorityBackgroundColors[task.priority],
                borderColor: taskPriorityColors[task.priority],
              },
            ]}
          >
            <View
              style={[
                taskItemStyles.priorityDot,
                { backgroundColor: taskPriorityColors[task.priority] },
              ]}
            />
            <Text
              style={[
                taskItemStyles.priorityText,
                { color: taskPriorityColors[task.priority] },
              ]}
            >
              {taskPriorityLabels[task.priority]}
            </Text>
          </View>
        </View>
      </View>

      <View style={taskItemStyles.actions}>
        <AppButton title="Editar" onPress={onEdit} size="small" variant="text" />
        <AppButton title="Deletar" onPress={onDelete} size="small" variant="textDanger" />
      </View>
    </AppCard>
  );
}
