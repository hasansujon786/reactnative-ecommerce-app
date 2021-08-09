import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// screens
import CartScreen from '../screens/shop/CartScreen'
// component
import HeaderCartButton from '../components/ui/HeaderCartButton'

const Stack = createStackNavigator()
export default function CartNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Cart'
        component={CartScreen}
        options={{ headerRight: () => <HeaderCartButton /> }}
      />
    </Stack.Navigator>
  )
}
