import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { LogBox, Platform } from 'react-native'
import { auth } from '../firebase/firebase'
import { Ionicons } from '@expo/vector-icons'
import AdminStackNavigator from './AdminNavigator'
import AuthNavigator from './AuthNavigator'
import OrdersStackNavigator from './OrdersNavigator'
import ShopStackNavigator from './ShopNavigator'

const Tab = createBottomTabNavigator()
const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName

    if (route.name === 'Shop') {
      iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
    } else if (route.name === 'Settings') {
      iconName = focused ? 'ios-list-box' : 'ios-list'
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
        {user && <Tab.Screen name='Orders' component={OrdersStackNavigator} />}
        {user && <Tab.Screen name='Admin' component={AdminStackNavigator} />}
        <Tab.Screen name='SingIn' component={AuthNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
