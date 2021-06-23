import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import OrderScreen from '../screens/user/OrderScreen'
import HeaderCartButton from '../components/ui/HeaderCartButton'
const Stack = createStackNavigator()

export default function ShopStackNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name='Orders'
        component={OrderScreen}
        options={{ headerRight: () => <HeaderCartButton /> }}
      />
    </Stack.Navigator>
  )
}
