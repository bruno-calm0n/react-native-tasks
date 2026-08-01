import { ReactNode } from 'react';
import { Modal, Text, View } from 'react-native';

import { dialogStyles } from '../../styles/feedback.styles';

type AppDialogTone = 'default' | 'danger';

type AppDialogProps = {
  visible: boolean;
  title: string;
  message: string;
  tone?: AppDialogTone;
  children: ReactNode;
  onClose: () => void;
};

export function AppDialog({
  visible,
  title,
  message,
  tone = 'default',
  children,
  onClose,
}: AppDialogProps) {
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <View style={dialogStyles.backdrop}>
        <View style={dialogStyles.content}>
          <View
            style={[
              dialogStyles.accent,
              tone === 'danger' ? dialogStyles.accentDanger : null,
            ]}
          />
          <View>
            <Text style={dialogStyles.title}>{title}</Text>
            <Text style={dialogStyles.message}>{message}</Text>
          </View>
          <View style={dialogStyles.actions}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}
