import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import UserProductScreen from '../screens/user/UserProductScreen'
import EditProductScreen from '../screens/user/EditProductScreen'
import HeaderAdminButtons from '../components/ui/HeaderAdminButtons'
const Stack = createStackNavigator()

export default function AdminStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AdminProducts'
        component={UserProductScreen}
        options={{ headerRight: () => <HeaderAdminButtons /> }}
      />
      <Stack.Screen
        name='AdminEditProduct'
        component={EditProductScreen}
        options={{ headerRight: () => <HeaderAdminButtons /> }}
      />
    </Stack.Navigator>
  )
}
