import React, { useState } from 'react'
import { Button, View } from 'react-native'
import { useDispatch } from 'react-redux'
import Spinner from '../../components/ui/Spinner'
import TextInput from '../../components/ui/TextInput'
import { Colors } from '../../constans/color'
import { useInputState } from '../../hooks'
import { signInWithEmailAndPassword, signUpWithEmailPasswordName } from '../../store/actions/auth'

function SignInScreen({ navigation }) {
  const dispatch = useDispatch()

  const [isSingIn, setIsSingIn] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  // From state
  const userNameState = useInputState('')
  const userEmailState = useInputState('sujon@gmail.com')
  const userPWState = useInputState('123456')

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      if (isSingIn) {
        await dispatch(signInWithEmailAndPassword(userEmailState.value, userPWState.value))
      } else {
        await dispatch(signUpWithEmailPasswordName(userEmailState.value, serPWState.value, userNameState.value))
      }
      navigation.navigate('Shop')
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <View style={{ padding: 12 }}>
      {!isSingIn && <TextInput name='Full name' {...userNameState} />}
      <TextInput name='Email' {...userEmailState} />
      <TextInput name='Password' {...userPWState} />
      <View style={{ marginTop: 16 }}>
        <Button
          color={Colors.accent}
          onPress={handleSubmit}
          title={isSingIn ? 'SingIn' : 'SingUp'}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <Button
          onPress={() => setIsSingIn((bool) => !bool)}
          title={`Switch to ${isSingIn ? 'SingUp' : 'SingIn'}`}
        />
      </View>
    </View>
  )
}

export default SignInScreen
