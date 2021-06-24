import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import OrderScreen from '../screens/user/OrderScreen'
import UserProductScreen from '../screens/user/UserProductScreen'
import EditProductScreen from '../screens/user/EditProductScreen'
import HeaderAdminButtons from '../components/ui/HeaderAdminButtons'
const Stack = createStackNavigator()

export default function ShopStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AP-Products'
        component={UserProductScreen}
        options={{ headerRight: () => <HeaderAdminButtons /> }}
      />
      <Stack.Screen
        name='AP-Orders'
        component={OrderScreen}
        options={{ headerRight: () => <HeaderAdminButtons /> }}
      />
      <Stack.Screen
        name='AP-ProductsEdit'
        component={EditProductScreen}
        options={{ headerRight: () => <HeaderAdminButtons /> }}
      />
    </Stack.Navigator>
  )
}
