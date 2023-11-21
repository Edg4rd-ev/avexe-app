import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/LogIn/SignIn'
import { LogIn } from '../screens/LogIn/LogIn'
import { SignUp } from '../screens/LogIn/SignUp'

const Stack = createStackNavigator()

export function LoginRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="logIn" component={LogIn} />
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  )
}
