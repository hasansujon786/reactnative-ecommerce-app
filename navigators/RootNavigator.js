import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { LogBox, Platform } from 'react-native'
import { auth } from '../firebase/firebase'
import AdminStackNavigator from './AdminNavigator'
import AuthNavigator from './AuthNavigator'
import OrdersStackNavigator from './OrdersNavigator'
import ShopStackNavigator from './ShopNavigator'

const Drawer = createDrawerNavigator()

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
      <Drawer.Navigator initialRouteName='Shop'>
        <Drawer.Screen name='Shop' component={ShopStackNavigator} />
        {user && <Drawer.Screen name='Orders' component={OrdersStackNavigator} />}
        {user && <Drawer.Screen name='Admin' component={AdminStackNavigator} />}
        <Drawer.Screen name='SingIn' component={AuthNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
