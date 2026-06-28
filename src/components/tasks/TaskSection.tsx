import { Text, View } from 'react-native';

import { homeStyles } from '../../styles/home.styles';
import { Task } from '../../types/task';
import { TaskItem } from './TaskItem';

type TaskSectionProps = {
  title: string;
  emptyMessage: string;
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

export function TaskSection({
  title,
  emptyMessage,
  tasks,
  onToggleTask,
  onEditTask,
  onDeleteTask,
}: TaskSectionProps) {
  return (
    <View style={homeStyles.section}>
      <View style={homeStyles.sectionHeader}>
        <Text style={homeStyles.sectionTitle}>{title}</Text>
        <Text style={homeStyles.sectionCount}>{tasks.length}</Text>
      </View>

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => onToggleTask(task.id)}
            onEdit={() => onEditTask(task)}
            onDelete={() => onDeleteTask(task)}
          />
        ))
      ) : (
        <View style={homeStyles.emptyState}>
          <Text style={homeStyles.emptyText}>{emptyMessage}</Text>
        </View>
      )}
    </View>
  );
}
