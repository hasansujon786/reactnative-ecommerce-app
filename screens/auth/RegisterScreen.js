import { Box, Button, Heading, HStack, Link, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import FromInput from '../../components/ui/FormInput'
import FullPageSpinner from '../../components/ui/FullPageSpinner'
import { registerWithEmail } from '../../firebase/firebase'
import { useInputState } from '../../hooks'

function RegisterScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  // Form state
  const userNameState = useInputState('test user')
  const userEmailState = useInputState('testuser@gmail.com')
  const userPWState = useInputState('123456')
  const userPWConfiremState = useInputState('123456')

  const handleSignup = async () => {
    setIsLoading(true)
    try {
      const email = userEmailState.value
      const password = userPWState.value
      await registerWithEmail(email, password)
    } catch (error) {
      setIsLoading(false)
      console.log('RegisterScreen', error)
    }
  }

  if (isLoading) {
    return <FullPageSpinner />
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
        <FromInput label='Your Name' {...userNameState} />
        <FromInput label='Email ID' {...userEmailState} />
        <FromInput label='Password' {...userPWState} type='password' />
        <FromInput label='Confirem Password' {...userPWConfiremState} type='password' />

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
