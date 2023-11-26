import React from 'react'
import { StatusBar, View } from 'react-native'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6BE00'} barStyle={'dark-content'} />
    </View>
  )
}
