import { View } from 'react-native';

import { taskFormStyles } from '../../styles/task.styles';
import { TaskPriority } from '../../types/task';
import { AppButton } from '../base/AppButton';
import { AppTextInput } from '../base/AppTextInput';
import { PrioritySelector } from './PrioritySelector';

type TaskFormProps = {
  title: string;
  priority: TaskPriority;
  submitLabel: string;
  showSubmitButton?: boolean;
  onTitleChange: (title: string) => void;
  onPriorityChange: (priority: TaskPriority) => void;
  onSubmit: () => void;
};

export function TaskForm({
  title,
  priority,
  submitLabel,
  showSubmitButton = true,
  onTitleChange,
  onPriorityChange,
  onSubmit,
}: TaskFormProps) {
  return (
    <View style={taskFormStyles.form}>
      <AppTextInput
        label="Nome da tarefa"
        onChangeText={onTitleChange}
        onSubmitEditing={onSubmit}
        placeholder="Ex: Comprar mantimentos"
        returnKeyType="done"
        value={title}
      />
      <PrioritySelector value={priority} onChange={onPriorityChange} />
      {showSubmitButton ? <AppButton title={submitLabel} onPress={onSubmit} /> : null}
    </View>
  );
}
