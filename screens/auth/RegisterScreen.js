import { Box, Button, Heading, HStack, Link, Text, VStack } from 'native-base'
import Icon from '../../components/ui/Icon'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import FromInput from '../../components/ui/FormInput'
import FullPageSpinner from '../../components/ui/FullPageSpinner'
import { registerWithEmail } from '../../firebase/firebase'
import { useInputState } from '../../hooks'

function RegisterScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  // Form state
  const userNameState = useInputState('')
  const userEmailState = useInputState('')
  const userPWState = useInputState('')
  const userPWConfiremState = useInputState('')

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
    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg-man.png')}>
      <Box flex={1} px={4} pb={12}>
        <Heading mt={16} textAlign='center' size='3xl' color='white'>
          Audio
        </Heading>
        <Heading textAlign='center' color='white' size='xs'>
          The only truth is music.
        </Heading>
        <Box flex={1} />
        <VStack space={2} mt={5}>
          <FromInput placeholder='Your Name' {...userNameState}
            borderColor='muted.300'
            variant='filled'
            InputLeftElement={
              <Icon
                name='person-outline'
                size='sm'
                ml={2}
                _light={{
                  color: 'gray.400',
                }}
              />
            }
          />
          <FromInput placeholder='Email' {...userEmailState}
            borderColor='muted.300'
            variant='filled'
            InputLeftElement={
              <Icon
                name='mail-outline'
                size='sm'
                ml={2}
                _light={{
                  color: 'gray.400',
                }}
              />
            }
          />
          <FromInput placeholder='Password' {...userPWState} type='password'
            borderColor='muted.300'
            variant='filled'
            InputLeftElement={
              <Icon
                name='lock-closed-outline'
                size='sm'
                ml={2}
                _light={{
                  color: 'gray.400',
                }}
              />
            }
          />
          <FromInput placeholder='Confirem Password' {...userPWConfiremState} type='password'
            borderColor='muted.300'
            variant='filled'
            InputLeftElement={
              <Icon
                name='lock-closed-outline'
                size='sm'
                ml={2}
                _light={{
                  color: 'gray.400',
                }}
              />
            }
          />

          <VStack mt={2} space={8}>
            <Button
              py={4}
              onPress={handleSignup}
              colorScheme='green'
              size='lg'
              rounded={10}
              _text={{ color: 'white', fontWeight: 'bold' }}>
              Sign Up
            </Button>
            <HStack space={2} justifyContent='center'>
              <Text color='muted.300' fontWeight={400}>If you already have an account?</Text>
              <Link
                onPress={() => navigation.navigate('SignIn')}
                _text={{ color: 'accent', textDecoration: 'underline', bold: true }}
              >
                Sign In here
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </ImageBackground>
  )
}

export default RegisterScreen
