import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { ButtonT } from '../../@types/Button'
import { styles } from './styles'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

export function Button({ title, type }: ButtonT) {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })
  if (!fontsLoaded && !fontError) {
    return null
  }

  if (type === 1) {
    return (
      <Pressable
        style={({ pressed }) => [
          { width: '100%', alignItems: 'center' },
          pressed && { opacity: 0.8 }
        ]}
        onPress={() => console.log()}
      >
        {({ pressed }) => {
          return (
            <View
              style={[
                styles.btn,
                styles.btnType1,
                styles.elevation,
                pressed && {
                  elevation: 1,
                  shadowColor: '#444444'
                }
              ]}
            >
              <Text
                style={[
                  {
                    color: '#303030',
                    fontFamily: 'Poppins_700Bold'
                  },
                  styles.fontStyle
                ]}
              >
                {title}
              </Text>
            </View>
          )
        }}
      </Pressable>
    )
  } else if (type === 2) {
    return (
      <Pressable
        style={({ pressed }) => [
          { width: '100%', alignItems: 'center' },
          pressed && { opacity: 0.8 }
        ]}
        onPress={() => console.log()}
      >
        {({ pressed }) => {
          return (
            <View
              style={[
                styles.btn,
                styles.btnType2,
                styles.elevation,
                pressed && {
                  elevation: 1,
                  shadowColor: '#444444'
                }
              ]}
            >
              <Text
                style={[
                  {
                    color: '#F6BE00',
                    fontFamily: 'Poppins_700Bold'
                  },
                  styles.fontStyle
                ]}
              >
                {title}
              </Text>
            </View>
          )
        }}
      </Pressable>
    )
  }
}
