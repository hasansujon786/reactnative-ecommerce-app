import { Box, Button, Heading, HStack, Link, Text, VStack } from 'native-base'
import { ImageBackground } from 'react-native'
import Icon from '../../components/ui/Icon'
import React, { useState } from 'react'
import FromInput from '../../components/ui/FormInput'
import FullPageSpinner from '../../components/ui/FullPageSpinner'
import { loginWithEmail } from '../../firebase/firebase'
import { useInputState } from '../../hooks'

function SignInScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  // Form state
  const userEmailState = useInputState('sujon@gmail.com')
  const userPWState = useInputState('123456')

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      const email = userEmailState.value
      const password = userPWState.value
      await loginWithEmail(email, password)
    } catch (error) {
      setIsLoading('SignInScreen', false)
      console.log(error)
    }
  }

  if (isLoading) {
    return <FullPageSpinner />
  }

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../assets/bg-man.png')}>
      <Box flex={1} px={4} pb={12} >
        <Heading mt={16} textAlign='center' size='3xl' color='white'>
          Audio
        </Heading>
        <Heading textAlign='center' color='white' size='xs'>
          The only truth is music.
        </Heading>

        <Box flex={1} />
        <VStack space={2} mt={5}>
          <FromInput
            borderColor='muted.300'
            variant='filled'
            placeholder='Email'
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
            {...userEmailState}
          />
          <FromInput
            borderColor='muted.300'
            variant='filled'
            placeholder='Password'
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
            {...userPWState}
          />

          <VStack mt={5} space={6}>
            <Link
              _text={{ fontSize: 'md', fontWeight: '700', color: 'muted.300' }}
              alignSelf='center'
            >
              Forget Password
            </Link>
            <Button
              py={4}
              onPress={handleSignIn}
              colorScheme='green'
              size='lg'
              rounded={10}
              _text={{ color: 'white', fontWeight: 'bold' }}>
              Sign In
            </Button>

            <HStack space={2} justifyContent='center'>
              <Text color='muted.300' fontWeight={400}>
                Didn't have an account?
              </Text>
              <Link
                onPress={() => navigation.navigate('Register')}
                _text={{ color: 'accent', textDecoration: 'underline', bold: true }}
              >
                Sign Up here
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </ImageBackground>
  )
}

export default SignInScreen

// {/* <HStack justifyContent='center' alignItem='center'> */}
// {/*   <IconButton */}
// {/*     variant='unstyled' */}
// {/*     startIcon={ */}
// {/*       <Icon as={<MaterialCommunityIcons name='facebook' />} color='muted.700' size='sm' /> */}
// {/*     } */}
// {/*   /> */}
// {/*   <IconButton */}
// {/*     variant='unstyled' */}
// {/*     startIcon={ */}
// {/*       <Icon as={<MaterialCommunityIcons name='google' />} color='muted.700' size='sm' /> */}
// {/*     } */}
// {/*   /> */}
// {/*   <IconButton */}
// {/*     variant='unstyled' */}
// {/*     startIcon={ */}
// {/*       <Icon as={<MaterialCommunityIcons name='github' />} color='muted.700' size='sm' /> */}
// {/*     } */}
// {/*   /> */}
// {/* </HStack> */}
