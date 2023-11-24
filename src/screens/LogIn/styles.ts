import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  loginOptions: {
    paddingVertical: 40,
    borderTopStartRadius: 80,
    backgroundColor: 'white',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    gap: 30
  },
  socialLoginOptions: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
    marginTop: 25
  },
  welcomeWrapper: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  welcome: {
    fontSize: 60,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20
  },
  welcomeText: {
    width: '100%',
    fontSize: 22,
    textAlign: 'justify'
  },
  fontStyle: {
    fontSize: 18,
    textShadowColor: 'hsla(0,0%,27%,0.3)',
    textShadowOffset: { width: 0.5, height: 1 },
    textShadowRadius: 2
  }
})
