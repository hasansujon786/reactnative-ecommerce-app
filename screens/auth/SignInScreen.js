import React from 'react'
import { Button, View } from 'react-native'
import TextInput from '../../components/ui/TextInput'
import { loginWithEmail, logout } from '../../firebase/firebase'
import { useInputState } from '../../hooks'

function SignInScreen({ navigation }) {
  const userEmailState = useInputState('')
  const userPWState = useInputState('')

  const handleSubmit = async () => {
    try {
      await loginWithEmail(userEmailState.value, userPWState.value)
      navigation.navigate('Shop')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={{ padding: 12 }}>
      <TextInput name='Email' {...userEmailState} />
      <TextInput name='Password' {...userPWState} />
      <View style={{ marginTop: 16 }}>
        <Button onPress={handleSubmit} title='Login' />
      </View>
      <View style={{ marginTop: 16 }}>
        <Button onPress={() => navigation.navigate('Register')} title='Create a new accout' />
      </View>
      <View style={{ marginTop: 16 }}>
        <Button onPress={() => logout()} title='Logout' />
      </View>
    </View>
  )
}

export default SignInScreen
