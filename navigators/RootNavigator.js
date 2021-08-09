import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
// StackNavigators
import ShopNavigator from './ShopNavigator'
import CategoryNavigator from './CategoryNavigator'
import SearchNavigator from './SearchNavigator'
import CartNavigator from './CartNavigator'
import AccountNavigator from './AccountNavigator'
import AuthNavigator from './AuthNavigator'
// components
import HeaderProductDetail from '../components/ui/HeaderProductDetail'
import ProductsDetails from '../screens/shop/ProductsDetails'
// hooks & other
import useAuthUserListener from '../hooks/useAuthUserListener'
import { Colors } from '../constans/color'

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
      case 'Search':
        iconName = 'search'
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
      <Tab.Screen name='Shop' component={ShopNavigator} />
      <Tab.Screen name='Category' component={CategoryNavigator} />
      <Tab.Screen name='Search' component={SearchNavigator} />
      {isSignedIn ? (
        <>
          <Tab.Screen name='Cart' component={CartNavigator} />
          <Tab.Screen name='Account' component={AccountNavigator} />
        </>
      ) : (
        <>
          <Tab.Screen name='Cart' component={AuthNavigator} />
          <Tab.Screen name='Account' component={AuthNavigator} />
        </>
      )}
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: Colors.defaultBackground }
        }}
      >
        <Stack.Screen name='Root' component={RootNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name='ProductsDetails'
          component={ProductsDetails}
          options={{
            title: '',
            headerRight: () => <HeaderProductDetail />,
            headerTransparent: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
