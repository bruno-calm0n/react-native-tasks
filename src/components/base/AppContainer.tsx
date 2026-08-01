import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { containerStyles } from '../../styles/base.styles';

type AppContainerProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function AppContainer({
  children,
  style,
}: AppContainerProps) {
  return <View style={[containerStyles.container, style]}>{children}</View>;
}
