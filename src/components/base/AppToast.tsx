import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { homeStyles } from '../../styles/home.styles';

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
  durationMs = 5000,
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
    <View pointerEvents="none" style={homeStyles.toastWrapper}>
      <View style={homeStyles.toastContent}>
        <Text style={homeStyles.toastLabel}>{label}</Text>
        <Text style={homeStyles.toastMessage}>{message}</Text>
      </View>
    </View>
  );
}
