import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'

const Stack = createStackNavigator()

export function HomeRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}
