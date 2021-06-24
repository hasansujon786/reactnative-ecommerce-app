import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import ShopStackNavigator from './navigators/ShopNavigator'
import AdminStackNavigator from './navigators/AdminNavigator'
import OrdersStackNavigator from './navigators/OrdersNavigator';
import store from './store'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Shop'>
          <Drawer.Screen name='Shop' component={ShopStackNavigator} />
          <Drawer.Screen name='Orders' component={OrdersStackNavigator} />
          <Drawer.Screen name='Admin' component={AdminStackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
