import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Colors } from '../constans/color'
import HomeScreen from '../screens/shop/HomeScreen'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
const Stack = createStackNavigator()

export default function ShopStackNavigator() {
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
