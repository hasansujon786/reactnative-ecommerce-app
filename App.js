import { extendTheme, NativeBaseProvider } from 'native-base'
import React from 'react'
import { LogBox, Platform } from 'react-native'
import { Provider } from 'react-redux'
import RootNavigator from './navigators/RootNavigator'
import store from './store'

export default function App() {
  if (Platform.OS == 'android') {
    LogBox.ignoreLogs(['Setting a timer'])
  }

  const theme = extendTheme({
    colors: {
      accent: '#22C55E',
      secendary: '#FF7465',
    },
  })

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </NativeBaseProvider>
  )
}
