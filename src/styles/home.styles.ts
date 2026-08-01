import { StyleSheet } from 'react-native';

import { colors, radius, shadows, spacing, typography } from '../design';

export const homeStyles = StyleSheet.create({
  header: {
    gap: spacing.space2,
    marginBottom: spacing.space8,
  },
  eyebrow: {
    color: colors.primary,
    ...typography.caption,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.textPrimary,
    ...typography.h1,
  },
  subtitle: {
    color: colors.textSecondary,
    ...typography.body,
  },
  formCard: {
    marginBottom: spacing.space10,
  },
  list: {
    flex: 1,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionHeaderRow: {
    marginBottom: spacing.space4,
  },
  sectionHeaderRowWithTopMargin: {
    marginTop: spacing.space6,
  },
  sectionTitle: {
    color: colors.textPrimary,
    ...typography.h4,
  },
  sectionCount: {
    color: colors.textTertiary,
    ...typography.caption,
    fontWeight: '700',
  },
  emptyState: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: spacing.space5,
  },
  emptyText: {
    color: colors.textSecondary,
    ...typography.small,
    textAlign: 'center',
  },
  listRow: {
    marginBottom: spacing.space4,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.overlay,
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.bottomSheet,
    borderTopRightRadius: radius.bottomSheet,
    gap: spacing.space6,
    padding: spacing.space6,
    ...shadows.large,
  },
  modalHandle: {
    alignSelf: 'center',
    backgroundColor: colors.borderStrong,
    borderRadius: radius.full,
    height: 4,
    width: 44,
  },
  modalTitle: {
    color: colors.textPrimary,
    ...typography.h4,
  },
  modalActions: {
    flexDirection: 'row',
    gap: spacing.space4,
  },
  modalButton: {
    flex: 1,
  },
});
