import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import CategoryScreen from '../screens/shop/CategoryScreen'
const Stack = createStackNavigator()

export default function CategoryStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Category' component={CategoryScreen} />
    </Stack.Navigator>
  )
}
