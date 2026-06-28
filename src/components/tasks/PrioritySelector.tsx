import { Pressable, Text, View } from 'react-native';

import { prioritySelectorStyles } from '../../styles/task.styles';
import { TaskPriority } from '../../types/task';
import { taskPriorityLabels } from '../../utils/taskUtils';

type PrioritySelectorProps = {
  value: TaskPriority;
  onChange: (priority: TaskPriority) => void;
};

const priorities: TaskPriority[] = ['high', 'medium', 'low'];

export function PrioritySelector({ value, onChange }: PrioritySelectorProps) {
  return (
    <View style={prioritySelectorStyles.wrapper}>
      <Text style={prioritySelectorStyles.label}>Prioridade</Text>
      <View style={prioritySelectorStyles.options}>
        {priorities.map((priority) => {
          const isSelected = priority === value;

          return (
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
              key={priority}
              onPress={() => onChange(priority)}
              style={[
                prioritySelectorStyles.option,
                isSelected ? prioritySelectorStyles.optionSelected : null,
              ]}
            >
              <Text
                style={[
                  prioritySelectorStyles.optionText,
                  isSelected ? prioritySelectorStyles.optionTextSelected : null,
                ]}
              >
                {taskPriorityLabels[priority]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
