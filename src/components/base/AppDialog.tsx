import { ReactNode } from 'react';
import { Modal, Text, View } from 'react-native';

import { homeStyles } from '../../styles/home.styles';

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
      <View style={homeStyles.dialogBackdrop}>
        <View style={homeStyles.dialogContent}>
          <View
            style={[
              homeStyles.dialogAccent,
              tone === 'danger' ? homeStyles.dialogAccentDanger : null,
            ]}
          />
          <View>
            <Text style={homeStyles.dialogTitle}>{title}</Text>
            <Text style={homeStyles.dialogMessage}>{message}</Text>
          </View>
          <View style={homeStyles.dialogActions}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}
