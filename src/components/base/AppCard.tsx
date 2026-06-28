import { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { cardStyles } from '../../styles/base.styles';

type AppCardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function AppCard({ children, style }: AppCardProps) {
  return <View style={[cardStyles.card, style]}>{children}</View>;
}
