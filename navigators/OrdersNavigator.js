import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import HeaderAdminButtons from '../components/ui/HeaderAdminButtons'
import OrderScreen from '../screens/user/OrderScreen'
const Stack = createStackNavigator()

export default function OrdersStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AP-Orders'
        component={OrderScreen}
        options={{ headerRight: () => <HeaderAdminButtons /> }}
      />
    </Stack.Navigator>
  )
}
