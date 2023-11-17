import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { ButtonT } from '../../@types/Button'
import { styles } from './styles'

export function Button({ title, type }: ButtonT) {
  if (type === 1) {
    return (
      <View style={[styles.btn, styles.btnType1, styles.elevation]}>
        <Pressable>
          <Text style={{ color: '#303030' }}>{title}</Text>
        </Pressable>
      </View>
    )
  } else if (type === 2) {
    return (
      <View style={[styles.btn, styles.btnType2, styles.elevation]}>
        <Pressable>
          <Text style={{ color: '#F6BE00' }}>{title}</Text>
        </Pressable>
      </View>
    )
  }
}
