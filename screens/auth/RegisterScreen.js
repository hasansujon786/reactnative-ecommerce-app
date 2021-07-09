import { Box, Button, FormControl, Heading, HStack, Input, Link, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Spinner from '../../components/ui/Spinner'
import { useInputState } from '../../hooks'
import { signUpWithEmailPasswordName } from '../../store/actions/auth'

function RegisterScreen({ navigation }) {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)
  // Form state
  const userNameState = useInputState('')
  const userEmailState = useInputState('sujon@gmail.com')
  const userPWState = useInputState('123456')
  const userPWConfiremState = useInputState('123456')

  const handleSignup = async () => {
    setIsLoading(true)
    try {
      await dispatch(signUpWithEmailPasswordName(userEmailState.value, serPWState.value, userNameState.value))
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Box flex={1} p={2} w='90%' mx='auto'>
      <Heading textAlign='center' size='lg' color='accent'>
        Fashion Wear
      </Heading>
      <Heading mt={1} textAlign='center' color='muted.400' size='xs'>
        Create a new account
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
            Your Name
          </FormControl.Label>
          <Input {...userNameState} _focus={{ borderColor: 'accent' }} />
        </FormControl>
        <FormControl>
          <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
            Email ID
          </FormControl.Label>
          <Input {...userEmailState} _focus={{ borderColor: 'accent' }} />
        </FormControl>

        <FormControl mb={5}>
          <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
            Password
          </FormControl.Label>
          <Input {...userPWState} _focus={{ borderColor: 'accent' }} type='password' />
        </FormControl>
        <FormControl mb={5}>
          <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
            Confirem Password
          </FormControl.Label>
          <Input {...userPWState} _focus={{ borderColor: 'accent' }} type='password' />
        </FormControl>

        <VStack space={3}>
          <Button onPress={handleSignup} colorScheme='green' _text={{ color: 'white' }}>
            Sign Up
          </Button>

          <HStack space={2} justifyContent='center'>
            <Text fontSize='sm' color='muted.700' fontWeight={400}>
              I already have an account
            </Text>
            <Link
              onPress={() => navigation.navigate('SignIn')}
              _text={{ color: 'blue.500', bold: true, fontSize: 'sm' }}
            >
              Sign In
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  )
}

export default RegisterScreen
