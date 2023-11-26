import React from 'react'
import { View, Image, StatusBar, Text, Pressable } from 'react-native'

import { styles } from './styles'
import { Button } from '../../../components/Button'
import { SocialButton } from '../../../components/SocialButtons'

import { useFonts } from 'expo-font'
import { Input } from '../../../components/Input'

export function SignUp() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular: require('../../../../assets/fonts/poppins/Poppins_400Regular.ttf'),
    Poppins_700Bold: require('../../../../assets/fonts/poppins/Poppins_700Bold.ttf')
  })
  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6BE00'} barStyle={'dark-content'} />
      <View style={styles.logo}>
        <Image
          source={require('../../../../assets/images/logo2.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.signUpOptions}>
        <View style={styles.registerWrapper}>
          <Text
            style={[
              styles.fontStyle,
              styles.entrar,
              { fontFamily: 'Poppins_700Bold' }
            ]}
          >
            Cadastrar
          </Text>
        </View>
        <Input placeHolder="Nome" keyboardType="default" />
        <Input placeHolder="Sobrenome" keyboardType="default" />
        <Input placeHolder="Email" keyboardType="email-address" />
        <Input placeHolder="Senha" setVisible={true} />
        <Input placeHolder="Confirmar senha" setVisible={true} />
        <Button title="Cadastrar" type={1} />
      </View>
    </View>
  )
}
