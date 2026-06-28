import { ReactNode } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';

import { containerStyles } from '../../styles/base.styles';

type AppContainerProps = {
  children: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export function AppContainer({
  children,
  contentContainerStyle,
}: AppContainerProps) {
  return (
    <ScrollView
      style={containerStyles.container}
      contentContainerStyle={[containerStyles.content, contentContainerStyle]}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}
