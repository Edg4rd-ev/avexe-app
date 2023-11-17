import React from 'react'
import { View, Image, StatusBar, Pressable, Text } from 'react-native'

import { styles } from './styles'
import { Button } from '../../components/Button'
import { SocialButton } from '../../components/SocialButtons'

export function LogIn() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6BE00'} barStyle={'dark-content'} />
      <View style={styles.logo}>
        <Image
          source={require('../../../assets/images/logo2.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.loginOptions}>
        <Button title="Entrar" type={1} />
        <Button title="Cadastrar-se" type={2} />
        <View style={styles.socialLoginOptions}>
          <SocialButton title="google" />
          <SocialButton title="facebook" />
          <SocialButton title="twitter" />
        </View>
      </View>
    </View>
  )
}
