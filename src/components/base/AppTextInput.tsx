import { useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import { colors } from '../../design';
import { textInputStyles } from '../../styles/base.styles';

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
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus: NonNullable<TextInputProps['onFocus']> = (event) => {
    setIsFocused(true);
    inputProps.onFocus?.(event);
  };

  const handleBlur: NonNullable<TextInputProps['onBlur']> = (event) => {
    setIsFocused(false);
    inputProps.onBlur?.(event);
  };

  return (
    <View style={textInputStyles.wrapper}>
      <Text style={textInputStyles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={colors.textTertiary}
        style={[
          textInputStyles.input,
          hasError
            ? textInputStyles.inputError
            : isFocused
              ? textInputStyles.inputFocused
              : textInputStyles.inputIdle,
          style,
        ]}
        {...inputProps}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {hasError ? <Text style={textInputStyles.error}>{errorMessage}</Text> : null}
    </View>
  );
}
