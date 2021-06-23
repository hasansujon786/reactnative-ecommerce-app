import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HeaderCartButton from '../components/ui/HeaderCartButton'
import HomeScreen from '../screens/shop/HomeScreen'
import ProductsDetails from '../screens/shop/ProductsDetails'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Cart from '../screens/shop/Cart'
const Stack = createStackNavigator()

export default function ShopStackNavigator() {
  return (
    // <Stack.Navigator>
    <Stack.Navigator initialRouteName='ProductsOverview'>
      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{ headerRight: () => <HeaderCartButton /> }}
      />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen
        name='ProductsOverview'
        component={ProductsOverviewScreen}
        options={{ title: 'All Products', headerRight: () => <HeaderCartButton /> }}
      />
      <Stack.Screen
        name='ProductsDetails'
        component={ProductsDetails}
        options={{ headerRight: () => <HeaderCartButton /> }}
      />
    </Stack.Navigator>
  )
}
