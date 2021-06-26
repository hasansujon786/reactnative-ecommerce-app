import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { logout } from '../../firebase/firebase'

function AccountDashboardScreen({ navigation }) {
  return (
    <View style={{ paddingHorizontal: 12 }}>
      <View style={{ marginTop: 20 }}>
        <Button title='My orders' onPress={() => navigation.navigate('Orders')} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button onPress={() => logout()} title='Logout' />
      </View>
    </View>
  )
}

export default AccountDashboardScreen
