import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import {styles} from './src/styles'
import { LogIn } from './src/screens/LogIn/LogIn';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LogIn/>
    </SafeAreaView>
  );
}
