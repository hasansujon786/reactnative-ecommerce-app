import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import useAuthUserListener from '../hooks/useAuthUserListener'
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

export default function RootNavigator() {
  let { uid } = useAuthUserListener()

  // if (isLoading) {
  //   return <Spinner />
  // }
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}
