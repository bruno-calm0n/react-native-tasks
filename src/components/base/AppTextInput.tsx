import {
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import { textInputStyles } from '../../styles/base.styles';
import { colors } from '../../styles/theme';

type AppTextInputProps = TextInputProps & {
  label: string;
  errorMessage?: string;
};

export function AppTextInput({
  label,
  errorMessage,
  style,
  ...inputProps
}: AppTextInputProps) {
  const hasError = Boolean(errorMessage);

  return (
    <View style={textInputStyles.wrapper}>
      <Text style={textInputStyles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={colors.textMuted}
        style={[
          textInputStyles.input,
          hasError ? textInputStyles.inputError : textInputStyles.inputIdle,
          style,
        ]}
        {...inputProps}
      />
      {hasError ? <Text style={textInputStyles.error}>{errorMessage}</Text> : null}
    </View>
  );
}
