import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';

import { colors, radius, spacing } from '../../constants/theme';

type AppButtonVariant = 'primary' | 'secondary';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: AppButtonVariant;
  style?: StyleProp<ViewStyle>;
};

export function AppButton({
  title,
  onPress,
  disabled = false,
  variant = 'primary',
  style,
}: AppButtonProps) {
  const buttonStyle = ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
    styles.button,
    variant === 'primary' ? styles.primary : styles.secondary,
    pressed && !disabled ? styles.pressed : styles.idle,
    disabled ? styles.disabled : styles.enabled,
    style,
  ];

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={buttonStyle}
    >
      <Text
        style={[
          styles.label,
          variant === 'primary' ? styles.primaryLabel : styles.secondaryLabel,
          disabled ? styles.disabledLabel : styles.enabledLabel,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.88,
  },
  idle: {
    opacity: 1,
  },
  enabled: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
  primaryLabel: {
    color: colors.surface,
  },
  secondaryLabel: {
    color: colors.primary,
  },
  enabledLabel: {
    opacity: 1,
  },
  disabledLabel: {
    opacity: 0.7,
  },
});
