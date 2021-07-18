import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Colors } from '../constans/color'
import useAuthUserListener from '../hooks/useAuthUserListener'
// import Playground from '../Playground'
import ProductsDetails from '../screens/shop/ProductsDetails'
import AccountStackNavigator from './AccountNavigator'
import AuthStackNavigator from './AuthNavigator'
import CartStackNavigator from './CartNavigator'
import CategoryStackNavigator from './CategoryNavigator'
import ShopStackNavigator from './ShopNavigator'

const Tab = createBottomTabNavigator()
const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName

    switch (route.name) {
      case 'Shop':
        iconName = 'home'
        break
      case 'Account':
        iconName = 'person'
        break
      case 'Cart':
        iconName = 'cart'
        break
      case 'Category':
        iconName = 'apps'
        break
      case 'Admin':
        iconName = 'clipboard'
        break
      default:
        iconName = 'reorder-two'
    }

    return <Ionicons name={iconName} size={22} color={color} />
  },
})

function RootNavigator() {
  const { isSignedIn } = useAuthUserListener()

  return (
    <Tab.Navigator
      initialRouteName='Shop'
      screenOptions={tabScreenOptions}
      tabBarOptions={{ activeTintColor: Colors.accent, inactiveTintColor: 'gray' }}
    >
      <Tab.Screen name='Shop' component={ShopStackNavigator} />
      <Tab.Screen name='Category' component={CategoryStackNavigator} />
      {isSignedIn ? (
        <>
          <Tab.Screen name='Cart' component={CartStackNavigator} />
          <Tab.Screen name='Account' component={AccountStackNavigator} />
        </>
      ) : (
        <>
          <Tab.Screen name='Cart' component={AuthStackNavigator} />
          <Tab.Screen name='Account' component={AuthStackNavigator} />
        </>
      )}
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
