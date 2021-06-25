import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import Spinner from '../components/ui/Spinner'
import { auth } from '../firebase/firebase'
import AdminStackNavigator from './AdminNavigator'
import AuthNavigator from './AuthNavigator'
import OrdersStackNavigator from './OrdersNavigator'
import ShopStackNavigator from './ShopNavigator'

const Drawer = createDrawerNavigator()

export default function RootNavigator() {
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
      try {
        authUser ? setUser(authUser) : setUser(null)
        setIsLoading(false)
        console.log({ authUser })
      } catch (error) {
        console.log(error)
      }
    })

    // unsubscribe auth listener on unmount
    return unsubscribeAuth
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Auth'>
        <Drawer.Screen name='Shop' component={ShopStackNavigator} />
        <Drawer.Screen name='Orders' component={OrdersStackNavigator} />
        <Drawer.Screen name='Admin' component={AdminStackNavigator} />
        <Drawer.Screen name='Auth' component={AuthNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
