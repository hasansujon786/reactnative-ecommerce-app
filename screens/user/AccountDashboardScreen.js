import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../constans/color'
import { signOut } from '../../store/actions/auth'

function AccountDashboardScreen({ navigation }) {
  const dispatch = useDispatch()
  const uid = useSelector((state) => state.auth.uid)

  return (
    <View style={{ paddingHorizontal: 12 }}>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        {uid ? uid : 'no user data avalable'}
      </Text>
      <View style={{ marginTop: 20 }}>
        <Button title='My orders' onPress={() => navigation.navigate('Orders')} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button color={Colors.danger} onPress={() => dispatch(signOut())} title='Logout' />
      </View>
    </View>
  )
}

export default AccountDashboardScreen
