import React from 'react'
import { View, Image, StatusBar, Text, Pressable } from 'react-native'

import { styles } from './styles'
import { Button } from '../../../components/Button'
import { SocialButton } from '../../../components/SocialButtons'

import { useFonts } from 'expo-font'

export function SignIn() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular: require('../../../../assets/fonts/poppins/Poppins_400Regular.ttf')
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
      <View style={styles.signInOptions}>
        <View style={styles.loginWrapper}>
          <Text
            style={[
              styles.fontStyle,
              styles.entrar,
              { fontFamily: 'Poppins_400Regular' }
            ]}
          >
            Entrar
          </Text>
        </View>
        <Button title="Entrar" type={1} />
        <View>
          <Pressable>
            <Text>Cadastrar-se</Text>
          </Pressable>
          <Pressable>
            <Text>Esqueci a senha</Text>
          </Pressable>
        </View>
        <View style={styles.socialLoginOptions}>
          <SocialButton title="google" bgColor="#DB4437" />
          <SocialButton title="facebook" bgColor="#4267B2" />
          <SocialButton title="twitter" bgColor="#1DA1F2" />
        </View>
      </View>
    </View>
  )
}
