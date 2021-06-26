import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HeaderAdminButtons from '../components/ui/HeaderAdminButtons'
import RegisterScreen from '../screens/auth/RegisterScreen'
import SignInScreen from '../screens/auth/SignInScreen'
const Stack = createStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{ headerRight: () => <HeaderAdminButtons /> }}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{ headerRight: () => <HeaderAdminButtons /> }}
      />
    </Stack.Navigator>
  )
}
