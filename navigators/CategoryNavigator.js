import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// screens
import CategoryScreen from '../screens/shop/CategoryScreen'

const Stack = createStackNavigator()
export default function CategoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Category' component={CategoryScreen} />
    </Stack.Navigator>
  )
}
