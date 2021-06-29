import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import useAuthUserListener from '../hooks/useAuthUserListener'
// import Playground from '../Playground'
import ProductsDetails from '../screens/shop/ProductsDetails'
import AccountStackNavigator from './AccountNavigator'
import AdminStackNavigator from './AdminNavigator'
import AuthNavigator from './AuthNavigator'
import ShopStackNavigator from './ShopNavigator'

const Tab = createBottomTabNavigator()
const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName

    switch (route.name) {
      case 'Shop':
        iconName = focused ? 'home' : 'home-outline'
        break
      case 'Account':
        iconName = focused ? 'person' : 'person-outline'
        break
      case 'Admin':
        iconName = focused ? 'clipboard' : 'clipboard-outline'
        break
      default:
        iconName = focused ? 'reorder-two' : 'reorder-two-outline'
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />
  },
})

function RootNavigator() {
  let { uid } = useAuthUserListener()
  // let uid = null

  // if (isLoading) {
  //   return <Spinner />
  // }
  return (
    <Tab.Navigator
      initialRouteName='Shop'
      screenOptions={tabScreenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Shop' component={ShopStackNavigator} />
      {uid && <Tab.Screen name='Admin' component={AdminStackNavigator} />}
      {uid && <Tab.Screen name='Account' component={AccountStackNavigator} />}
      {!uid && <Tab.Screen name='Account' component={AuthNavigator} />}
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name='Playground' component={Playground} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Root' component={RootNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name='ProductsDetails'
          component={ProductsDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
