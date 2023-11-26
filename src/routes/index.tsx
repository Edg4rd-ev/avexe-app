import { NavigationContainer } from '@react-navigation/native'
import { LoginRoutes } from './login.routes'
import { HomeRoutes } from './home.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  )
}
