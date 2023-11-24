import React from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'
import { InputT } from '../../@types/input'

export function Input({ placeHolder, keyboardType, setVisible }: InputT) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={'gray'}
        style={styles.inputStyle}
        keyboardType={keyboardType}
        secureTextEntry={setVisible}
      />
    </View>
  )
}
