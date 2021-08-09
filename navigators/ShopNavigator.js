import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// screens
import HomeScreen from '../screens/shop/HomeScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
// hooks & others
import { Colors } from '../constans/color'

const Stack = createStackNavigator()
export default function ShopNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: Colors.defaultBackground }
      }}
    >
      <Stack.Screen
        name='ProductsOverview'
        component={ProductsOverviewScreen}
        options={{
          title: 'All Products',
          // headerTitle: (props) => <SearchBar {...props} />,
          // headerTransparent: false,
          // headerStyle: { backgroundColor: Colors.defaultBackground, elevation: 0 },
          // headerRight: () => <HeaderCartButton />,
        }}
      />
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}
