import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HeaderCartButton from '../components/ui/HeaderCartButton'
import HomeScreen from '../screens/shop/HomeScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
const Stack = createStackNavigator()

export default function ShopStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ProductsOverview'
        component={ProductsOverviewScreen}
        options={{
          title: 'All Products',
          headerShown: false,
          headerRight: () => <HeaderCartButton />,
        }}
      />
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}
