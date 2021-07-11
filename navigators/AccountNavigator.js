import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HeaderAccountButton from '../components/ui/HeaderAccountButton'
import HeaderAdminButtons from '../components/ui/HeaderAdminButtons'
import HeaderStoreEditProduct from '../components/ui/HeaderStoreEditProduct'
import AccountDashboardScreen from '../screens/user/AccountDashboardScreen'
import EditProductScreen from '../screens/user/EditProductScreen'
import OrderScreen from '../screens/user/OrderScreen'
import SettingsScreen from '../screens/user/SettingsScreen'
import UserProductScreen from '../screens/user/UserProductScreen'
const Stack = createStackNavigator()

export default function AccountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccontDashboard'
        component={AccountDashboardScreen}
        options={{ title: '', headerRight: () => <HeaderAccountButton />, headerTransparent: true }}
      />
      <Stack.Screen
        name='AccontSettings'
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />

      <Stack.Screen
        name='StoreProducts'
        component={UserProductScreen}
        options={{ title: 'Products', headerRight: () => <HeaderAdminButtons /> }}
      />
      <Stack.Screen
        name='StoreEditProduct'
        component={EditProductScreen}
        options={({ route }) => ({
          headerRight: () => <HeaderStoreEditProduct />,
          title: !route.params.productId ? 'Add a new product' : 'Update your product',
        })}
      />
      <Stack.Screen name='StoreOrders' component={OrderScreen} />
    </Stack.Navigator>
  )
}
