import React from 'react'
import { Provider } from 'react-redux'
import RootNavigator from './navigators/RootNavigator'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}
