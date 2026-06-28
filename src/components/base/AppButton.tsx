import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';

import { buttonStyles } from '../../styles/base.styles';

type AppButtonVariant = 'primary' | 'secondary' | 'danger';
type AppButtonSize = 'regular' | 'small';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: AppButtonVariant;
  size?: AppButtonSize;
  style?: StyleProp<ViewStyle>;
};

export function AppButton({
  title,
  onPress,
  disabled = false,
  variant = 'primary',
  size = 'regular',
  style,
}: AppButtonProps) {
  const variantStyle = {
    primary: buttonStyles.primary,
    secondary: buttonStyles.secondary,
    danger: buttonStyles.danger,
  }[variant];

  const labelStyle = {
    primary: buttonStyles.primaryLabel,
    secondary: buttonStyles.secondaryLabel,
    danger: buttonStyles.dangerLabel,
  }[variant];

  const buttonStyle = ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
    buttonStyles.button,
    size === 'small' ? buttonStyles.small : null,
    variantStyle,
    pressed && !disabled ? buttonStyles.pressed : buttonStyles.idle,
    disabled ? buttonStyles.disabled : buttonStyles.enabled,
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
          buttonStyles.label,
          size === 'small' ? buttonStyles.smallLabel : null,
          labelStyle,
          disabled ? buttonStyles.disabledLabel : buttonStyles.enabledLabel,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
