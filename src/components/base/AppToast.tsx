import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { layout } from '../../design';
import { toastStyles } from '../../styles/feedback.styles';

type AppToastProps = {
  visible: boolean;
  label: string;
  message: string;
  durationMs?: number;
  onHide: () => void;
};

export function AppToast({
  visible,
  label,
  message,
  durationMs = layout.toastDurationMs,
  onHide,
}: AppToastProps) {
  useEffect(() => {
    if (!visible) {
      return undefined;
    }

    const timerId = setTimeout(onHide, durationMs);

    return () => clearTimeout(timerId);
  }, [durationMs, onHide, visible]);

  if (!visible) {
    return null;
  }

  return (
    <View pointerEvents="none" style={toastStyles.wrapper}>
      <View style={toastStyles.content}>
        <Text style={toastStyles.label}>{label}</Text>
        <Text style={toastStyles.message}>{message}</Text>
      </View>
    </View>
  );
}
