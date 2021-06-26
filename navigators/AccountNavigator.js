import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HeaderCartButton from '../components/ui/HeaderCartButton'
import AccountDashboardScreen from '../screens/user/AccountDashboardScreen'
import OrderScreen from '../screens/user/OrderScreen'
const Stack = createStackNavigator()

export default function AccountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccontDashboard'
        component={AccountDashboardScreen}
        options={{ title: 'Account', headerRight: () => <HeaderCartButton /> }}
      />
      <Stack.Screen
        name='Orders'
        component={OrderScreen}
        options={{ headerRight: () => <HeaderCartButton /> }}
      />
    </Stack.Navigator>
  )
}
