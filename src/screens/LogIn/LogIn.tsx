import React from 'react';
import { View, Image, StatusBar, Pressable, Text} from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';

export function LogIn() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6BE00'} barStyle={'dark-content'}/>
      <View style={styles.logo}>
        <Image
          source={require('../../../assets/logo.png')}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
      <View style={styles.loginOptions}>
        <Button title='Entrar' bgColor='#F6BE00' color='#303030'/>
        <Button title='Cadastrar-se' bgColor='#fff' color='#F6BE00'/>
        <View style={styles.socialLoginOptions}>
          <Pressable>
            <Text>g</Text>
          </Pressable>
          <Pressable>
            <Text>f</Text>
          </Pressable>
          <Pressable>
            <Text>tt</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}