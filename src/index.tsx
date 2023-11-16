import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { LogIn } from './screens/LogIn/LogIn';

export function Main() {
  return (
    <View style={styles.container}>
      <LogIn/>
    </View>
  );
}