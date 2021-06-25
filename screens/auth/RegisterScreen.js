import React from 'react'
import { Button, View } from 'react-native'
import TextInput from '../../components/ui/TextInput'
import { registerWithEmail } from '../../firebase/firebase'
import { useInputState } from '../../hooks'

function RegisterScreen({ navigation }) {
  const userNameState = useInputState('')
  const userEmailState = useInputState('')
  const userPWState = useInputState('')

  const handleUserRegisterSubmit = async () => {
    try {
      const response = await registerWithEmail(userEmailState.value, userPWState.value)
      await response.user.updateProfile({
        displayName: userNameState.value,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={{ padding: 12 }}>
      <TextInput name='Full name' {...userNameState} />
      <TextInput name='Email' {...userEmailState} />
      <TextInput name='Password' {...userPWState} />
      <View style={{ marginTop: 16 }}>
        <Button onPress={handleUserRegisterSubmit} title='Create a new accout' />
      </View>
      <View style={{ marginTop: 16 }}>
        <Button onPress={() => navigation.navigate('SignIn')} title='Login' />
      </View>
    </View>
  )
}

export default RegisterScreen
