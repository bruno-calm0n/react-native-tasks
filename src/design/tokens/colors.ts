export const colors = {
  primary50: '#EEF4FF',
  primary100: '#DCE8FF',
  primary200: '#BFD4FF',
  primary300: '#92B6FF',
  primary400: '#5E90FF',
  primary500: '#3461F6',
  primary600: '#2852E0',
  primary700: '#1E43C2',
  primary800: '#17359B',
  primary900: '#132B7A',

  primary: '#3461F6',
  primaryLight: '#EEF4FF',
  primaryDark: '#1E43C2',

  background: '#F8FAFC',
  surface: '#FFFFFF',
  card: '#FFFFFF',
  overlay: 'rgba(15,23,42,.45)',

  borderLight: '#F1F5F9',
  border: '#E5E7EB',
  borderStrong: '#CBD5E1',

  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textTertiary: '#94A3B8',
  textDisabled: '#CBD5E1',

  success: '#16A34A',
  warning: '#F59E0B',
  danger: '#DC2626',
  info: '#3B82F6',

  icon: '#475569',
} as const;

export const priorityColors = {
  high: {
    background: '#FEE2E2',
    border: '#FECACA',
    text: '#DC2626',
  },
  medium: {
    background: '#FEF3C7',
    border: '#FCD34D',
    text: '#D97706',
  },
  low: {
    background: '#DBEAFE',
    border: '#93C5FD',
    text: '#2563EB',
  },
  completed: {
    background: '#DCFCE7',
    border: '#86EFAC',
    text: '#15803D',
  },
} as const;

export const darkColors = {
  background: '#0F172A',
  surface: '#1E293B',
  card: '#273449',
  textPrimary: '#F8FAFC',
  textSecondary: '#CBD5E1',
  border: '#334155',
  primary: '#5B7CFF',
  success: '#22C55E',
  warning: '#FBBF24',
  danger: '#F87171',
} as const;
