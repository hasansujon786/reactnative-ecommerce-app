import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HeaderCartButton from '../components/ui/HeaderCartButton'
import CartScreen from '../screens/shop/CartScreen'
const Stack = createStackNavigator()

export default function CartStackNavigator() {
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
