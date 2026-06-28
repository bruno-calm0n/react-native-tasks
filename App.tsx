import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { HomeScreen } from './src/screens/HomeScreen';
import { appStyles } from './src/styles/app.styles';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={appStyles.safeArea}>
        <StatusBar style="dark" />
        <HomeScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
