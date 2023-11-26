import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6BE00'
  },
  image: {
    width: 200,
    height: 150,
    alignSelf: 'center'
  },
  logo: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  signUpOptions: {
    paddingVertical: 50,
    borderTopStartRadius: 80,
    backgroundColor: 'white',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    gap: 10
  },
  registerWrapper: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  entrar: {
    width: '100%',
    fontSize: 22,
    textAlign: 'left'
  },
  fontStyle: {
    fontSize: 18,
    textShadowColor: 'hsla(0,0%,27%,0.3)',
    textShadowOffset: { width: 0.5, height: 1 },
    textShadowRadius: 2
  }
})
