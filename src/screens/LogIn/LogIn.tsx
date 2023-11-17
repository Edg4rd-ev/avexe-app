import React from 'react'
import { View, Image, StatusBar, Text } from 'react-native'

import { styles } from './styles'
import { Button } from '../../components/Button'
import { SocialButton } from '../../components/SocialButtons'

import { useFonts } from 'expo-font'

export function LogIn() {
  const [fontsLoaded, fontError] = useFonts({
    Xilosa: require('../../../assets/fonts/xilosa/xilosa_.ttf'),
    Poppins_400Regular: require('../../../assets/fonts/poppins/Poppins_400Regular.ttf')
  })
  if (!fontsLoaded && !fontError) {
    return null
  }
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
        <View style={styles.welcomeWrapper}>
          <Text
            style={[styles.fontStyle, styles.welcome, { fontFamily: 'Xilosa' }]}
          >
            Bem-vindo
          </Text>
          <Text
            style={[
              styles.fontStyle,
              styles.welcomeText,
              { fontFamily: 'Poppins_400Regular' }
            ]}
          >
            Tenha um controle maior sobre sua vida financeira e não se{' '}
            <Text style={[styles.fontStyle, { fontFamily: 'Xilosa' }]}>
              !AVEXE
            </Text>{' '}
            no fim do mês!
          </Text>
        </View>
        <Button title="Entrar" type={1} />
        <Button title="Cadastrar-se" type={2} />
        <View style={styles.socialLoginOptions}>
          <SocialButton title="google" bgColor="#DB4437" />
          <SocialButton title="facebook" bgColor="#4267B2" />
          <SocialButton title="twitter" bgColor="#1DA1F2" />
        </View>
      </View>
    </View>
  )
}
