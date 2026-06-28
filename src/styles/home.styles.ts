import { StyleSheet } from 'react-native';

import { colors, radius, spacing } from './theme';

export const homeStyles = StyleSheet.create({
  header: {
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 22,
  },
  formCard: {
    marginBottom: spacing.xl,
  },
  section: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  sectionCount: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '700',
  },
  emptyState: {
    borderColor: colors.border,
    borderRadius: radius.md,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: spacing.lg,
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(23, 32, 42, 0.42)',
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    gap: spacing.lg,
    padding: spacing.xl,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 10,
  },
  modalHandle: {
    alignSelf: 'center',
    backgroundColor: colors.border,
    borderRadius: 999,
    height: 4,
    width: 44,
  },
  modalTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  modalActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  modalButton: {
    flex: 1,
  },
  dialogBackdrop: {
    alignItems: 'center',
    backgroundColor: 'rgba(23, 32, 42, 0.46)',
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  dialogContent: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    gap: spacing.lg,
    maxWidth: 420,
    padding: spacing.xl,
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 8,
  },
  dialogAccent: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    height: 4,
    width: 42,
  },
  dialogAccentDanger: {
    backgroundColor: colors.danger,
  },
  dialogTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  dialogMessage: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 22,
  },
  dialogActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
});
