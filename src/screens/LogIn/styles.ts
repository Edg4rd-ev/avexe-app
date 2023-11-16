import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 150,
    alignSelf: 'center'
  },
  logo: {
    flex: 3,
    width: '100%',
    justifyContent: 'center'
  },
  loginOptions: {
    flex: 2.2,
    borderTopStartRadius: 80,
    backgroundColor: 'white',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    gap: 30
  },
  socialLoginOptions: {
    flexDirection: 'row'
  }
})
