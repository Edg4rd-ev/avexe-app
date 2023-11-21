import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { SocialButtonT } from '../../@types/socialButton'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'

export function SocialButton({ title, bgColor }: SocialButtonT) {
  return (
    <Pressable
      style={({ pressed }) => [
        { width: '40%', alignItems: 'center', flex: 1 },
        pressed && { opacity: 0.8 }
      ]}
      onPress={() => console.log()}
    >
      {({ pressed }) => {
        return (
          <View
            style={[
              styles.btn,
              styles.elevation,
              { backgroundColor: bgColor },
              pressed && {
                elevation: 1,
                shadowColor: '#444444'
              }
            ]}
          >
            <Text style={styles.fontStyle}>
              <Icon name={title} size={25} color={'#fff'} />
            </Text>
          </View>
        )
      }}
    </Pressable>
  )
}
