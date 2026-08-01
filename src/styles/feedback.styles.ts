import { StyleSheet } from 'react-native';

import { colors, radius, shadows, spacing, typography } from '../design';

export const dialogStyles = StyleSheet.create({
  backdrop: {
    alignItems: 'center',
    backgroundColor: colors.overlay,
    flex: 1,
    justifyContent: 'center',
    padding: spacing.space6,
  },
  content: {
    backgroundColor: colors.surface,
    borderRadius: radius.modal,
    gap: spacing.space6,
    maxWidth: 420,
    padding: spacing.space6,
    width: '100%',
    ...shadows.large,
  },
  accent: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    borderRadius: radius.full,
    height: 4,
    width: 42,
  },
  accentDanger: {
    backgroundColor: colors.danger,
  },
  title: {
    color: colors.textPrimary,
    ...typography.h4,
  },
  message: {
    color: colors.textSecondary,
    ...typography.body,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.space4,
  },
});

export const toastStyles = StyleSheet.create({
  wrapper: {
    bottom: spacing.space6,
    left: spacing.space6,
    position: 'absolute',
    right: spacing.space6,
    zIndex: 20,
  },
  content: {
    backgroundColor: colors.surface,
    borderColor: colors.success,
    borderLeftWidth: 4,
    borderRadius: radius.lg,
    gap: spacing.space1,
    padding: spacing.space4,
    ...shadows.medium,
  },
  label: {
    color: colors.success,
    ...typography.caption,
    fontWeight: '800',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  message: {
    color: colors.textPrimary,
    ...typography.small,
    fontWeight: '600',
  },
});
