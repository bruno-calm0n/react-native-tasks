import { StyleSheet } from 'react-native';

import { colors, priorityColors, radius, spacing, typography } from '../design';

export const taskItemStyles = StyleSheet.create({
  card: {
    padding: spacing.space5,
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.space4,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: radius.sm,
    borderWidth: 2,
    borderColor: colors.borderStrong,
  },
  checkboxCompleted: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxMark: {
    color: colors.surface,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 16,
  },
  content: {
    flex: 1,
    gap: spacing.space1,
  },
  title: {
    color: colors.textPrimary,
    ...typography.body,
    fontWeight: '600',
  },
  titleCompleted: {
    color: colors.textTertiary,
    textDecorationLine: 'line-through',
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.space4,
  },
  priorityBadge: {
    borderRadius: radius.full,
    borderWidth: 1,
    paddingHorizontal: spacing.space3,
    paddingVertical: spacing.space1,
  },
  priorityHigh: {
    backgroundColor: priorityColors.high.background,
    borderColor: priorityColors.high.border,
  },
  priorityMedium: {
    backgroundColor: priorityColors.medium.background,
    borderColor: priorityColors.medium.border,
  },
  priorityLow: {
    backgroundColor: priorityColors.low.background,
    borderColor: priorityColors.low.border,
  },
  priorityText: {
    ...typography.caption,
    fontWeight: '700',
  },
  priorityHighText: {
    color: priorityColors.high.text,
  },
  priorityMediumText: {
    color: priorityColors.medium.text,
  },
  priorityLowText: {
    color: priorityColors.low.text,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.space2,
  },
});

export const prioritySelectorStyles = StyleSheet.create({
  wrapper: {
    gap: spacing.space2,
  },
  label: {
    color: colors.textPrimary,
    ...typography.small,
    fontWeight: '600',
  },
  options: {
    flexDirection: 'row',
    gap: spacing.space2,
  },
  option: {
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: radius.button,
    borderWidth: 1,
    flex: 1,
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: spacing.space3,
  },
  optionSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  optionText: {
    color: colors.textSecondary,
    ...typography.small,
    fontWeight: '600',
  },
  optionTextSelected: {
    color: colors.primary,
  },
});

export const taskFormStyles = StyleSheet.create({
  form: {
    gap: spacing.space4,
  },
});
