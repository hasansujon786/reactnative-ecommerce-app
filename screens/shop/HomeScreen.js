import React from 'react'
import { View, Button } from 'react-native'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.openDrawer()}
        // onPress={() => navigation.navigate('Notifications')}
        title='open drawer'
      />
      <Button onPress={() => navigation.navigate('Notifications')} title='go to notification' />
    </View>
  )
}
