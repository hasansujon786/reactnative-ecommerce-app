import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// Screens 
import SearchScreen from '../screens/shop/SearchScreen'

import { Colors } from '../constans/color'

const Stack = createStackNavigator()
export default function SearchNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: Colors.defaultBackground }
      }}
    >
      <Stack.Screen name='Search' component={SearchScreen} />
    </Stack.Navigator>
  )
}
