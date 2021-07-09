import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HeaderAccountButton from '../components/ui/HeaderAccountButton'
import AccountDashboardScreen from '../screens/user/AccountDashboardScreen'
import OrderScreen from '../screens/user/OrderScreen'
import SettingsScreen from '../screens/user/SettingsScreen'
const Stack = createStackNavigator()

export default function AccountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccontDashboard'
        component={AccountDashboardScreen}
        options={{ title: '', headerRight: () => <HeaderAccountButton />, headerTransparent: true, }}
      />
      <Stack.Screen
        name='Orders'
        component={OrderScreen}
        options={{ title: 'My Orders', headerRight: () => <HeaderAccountButton /> }}
      />
      <Stack.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Stack.Navigator>
  )
}
