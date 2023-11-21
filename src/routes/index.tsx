import { NavigationContainer } from '@react-navigation/native'
import { LoginRoutes } from './login.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  )
}
