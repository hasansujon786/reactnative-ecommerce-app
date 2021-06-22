import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Provider } from 'react-redux'
import HomeScreen from './screens/product/HomeScreen'
import ProductsDetails from './screens/product/ProductsDetails'
import ProductsOverviewScreen from './screens/product/ProductsOverviewScreen'
import store from './store'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function ShopStackNavigator() {
  return (
    <Stack.Navigator initialRouteName='ProductsOverview'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen
        name='ProductsOverview'
        component={ProductsOverviewScreen}
        options={{ title: 'All Products' }}
      />
      <Stack.Screen
        name='ProductsDetails'
        component={ProductsDetails}
        options={{ title: 'Choosen product' }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Shop'>
          <Drawer.Screen name='Shop' component={ShopStackNavigator} />
          {/*<Drawer.Screen name='Notifications' component={NotificationsScreen} />*/}
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
