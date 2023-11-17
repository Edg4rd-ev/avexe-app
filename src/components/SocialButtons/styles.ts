import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  btn: {
    width: '100%',
    padding: 16,
    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: 'hsla(0,0%,27%,0.3)',
    borderTopWidth: 0.1,
    borderStartWidth: 0.1,
    borderEndWidth: 0.1
  },
  elevation: {
    elevation: 4,
    shadowColor: '#444444'
  },
  fontStyle: {
    fontSize: 18,
    textShadowColor: 'hsla(0,0%,27%,0.3)',
    textShadowOffset: { width: 0.5, height: 1 },
    textShadowRadius: 2
  }
})
