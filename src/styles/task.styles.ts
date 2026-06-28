import { StyleSheet } from 'react-native';

import { colors, radius, spacing } from './theme';

export const taskItemStyles = StyleSheet.create({
  card: {
    padding: spacing.md,
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.md,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: 2,
  },
  checkboxCompleted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  checkboxMark: {
    color: colors.surface,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 16,
  },
  content: {
    flex: 1,
    gap: spacing.xs,
  },
  titleBlock: {
    gap: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  titleCompleted: {
    color: colors.textMuted,
    textDecorationLine: 'line-through',
  },
  priority: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  priorityDot: {
    borderRadius: 999,
    height: 7,
    width: 7,
  },
  priorityText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.md,
  },
});

export const prioritySelectorStyles = StyleSheet.create({
  wrapper: {
    gap: spacing.sm,
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  options: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  option: {
    alignItems: 'center',
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    flex: 1,
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },
  optionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  optionTextSelected: {
    color: colors.surface,
  },
});

export const taskFormStyles = StyleSheet.create({
  form: {
    gap: spacing.md,
  },
});
