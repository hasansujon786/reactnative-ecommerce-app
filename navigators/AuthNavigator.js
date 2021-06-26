import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import SignInScreen from '../screens/auth/SignInScreen'
const Stack = createStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
      />
    </Stack.Navigator>
  )
}
