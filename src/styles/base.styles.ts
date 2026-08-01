import { StyleSheet } from 'react-native';

import { colors, layout, radius, shadows, spacing, typography } from '../design';

export const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    maxWidth: layout.maxContentWidth,
    paddingHorizontal: layout.horizontalPadding,
    paddingVertical: spacing.space10,
    width: '100%',
    alignSelf: 'center',
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    borderRadius: radius.button,
    paddingHorizontal: spacing.space5,
    paddingVertical: spacing.space3,
  },
  small: {
    minHeight: layout.minTouchTarget,
    paddingHorizontal: spacing.space4,
    paddingVertical: spacing.space2,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primaryLight,
    borderWidth: 1,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  pressed: {
    opacity: 0.9,
  },
  idle: {
    opacity: 1,
  },
  enabled: {
    ...shadows.small,
  },
  disabled: {
    backgroundColor: colors.textDisabled,
    borderColor: colors.textDisabled,
    opacity: 1,
  },
  label: {
    ...typography.body,
    fontWeight: '700',
  },
  smallLabel: {
    ...typography.caption,
  },
  primaryLabel: {
    color: colors.surface,
  },
  secondaryLabel: {
    color: colors.textPrimary,
  },
  ghostLabel: {
    color: colors.primary,
  },
  dangerLabel: {
    color: colors.surface,
  },
  textLabel: {
    color: colors.primary,
  },
  textDangerLabel: {
    color: colors.danger,
  },
  enabledLabel: {
    opacity: 1,
  },
  disabledLabel: {
    color: colors.surface,
  },
});

export const cardStyles = StyleSheet.create({
  card: {
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: colors.borderLight,
    backgroundColor: colors.card,
    padding: spacing.space5,
    ...shadows.medium,
  },
});

export const textInputStyles = StyleSheet.create({
  wrapper: {
    gap: spacing.space2,
  },
  label: {
    color: colors.textPrimary,
    ...typography.small,
    fontWeight: '600',
  },
  input: {
    minHeight: 48,
    borderRadius: radius.input,
    borderWidth: 1,
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    ...typography.body,
    paddingHorizontal: spacing.space4,
    paddingVertical: spacing.space3,
  },
  inputIdle: {
    borderColor: colors.border,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  inputError: {
    borderColor: colors.danger,
  },
  error: {
    color: colors.danger,
    ...typography.caption,
  },
});
