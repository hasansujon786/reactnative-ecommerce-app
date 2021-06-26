import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { LogBox, Platform } from 'react-native'
import { auth } from '../firebase/firebase'
import { Ionicons } from '@expo/vector-icons'
import AdminStackNavigator from './AdminNavigator'
import AuthNavigator from './AuthNavigator'
import AccountStackNavigator from './AccountNavigator'
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
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
      try {
        authUser ? setUser(authUser) : setUser(null)
        setIsLoading(false)
        setUser(authUser)
        console.log({ authUser })
      } catch (error) {
        console.log(error)
      }
    })

    // unsubscribe auth listener on unmount
    return unsubscribeAuth
  }, [])

  // if (isLoading) {
  //   return <Spinner />
  // }

  if (Platform.OS == 'android') {
    LogBox.ignoreLogs(['Setting a timer'])
  }

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
        {user && <Tab.Screen name='Admin' component={AdminStackNavigator} />}
        {user && <Tab.Screen name='Account' component={AccountStackNavigator} />}
        {!user && <Tab.Screen name='Account' component={AuthNavigator} />}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
