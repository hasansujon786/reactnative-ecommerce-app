import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HeaderSingInButtons from '../components/ui/HeaderSingInButtons'
import {Colors} from '../constans/color'
import SignInScreen from '../screens/auth/SignInScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import PromptSingIn from '../screens/auth/PromptSingIn'
const Stack = createStackNavigator()

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SignIn'
        component={SignInScreen}
        options={{
          title: '',
          headerLeft: () => <HeaderSingInButtons />,
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name='PromptSingIn'
        component={PromptSingIn}
        options={{
          title: '',
          headerLeft: () => <HeaderSingInButtons />,
          headerStyle: { backgroundColor: Colors.defaultBackground, elevation: 0 },
        }}
      />
    </Stack.Navigator>
  )
}
