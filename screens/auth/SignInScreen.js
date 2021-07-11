import { Box, Button, Heading, HStack, Link, Text, VStack } from 'native-base'
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
    <Box flex={1} p={2} w='90%' mx='auto'>
      <Heading textAlign='center' size='lg' color='accent'>
        Fashion Wear
      </Heading>
      <Heading mt={1} textAlign='center' color='muted.400' size='xs'>
        Sign in to continue
      </Heading>

      <VStack space={2} mt={5}>
        <FromInput label='Email ID' {...userEmailState} />
        <FromInput label='Password' {...userPWState}>
          <Link
            _text={{ fontSize: 'xs', fontWeight: '700', color: 'accent' }}
            alignSelf='flex-end'
            mt={1}
          >
            Forget Password?
          </Link>
        </FromInput>

        <VStack mt={4} space={3}>
          <Button onPress={handleSignIn} colorScheme='green' _text={{ color: 'white' }}>
            Login
          </Button>

          <HStack space={2} justifyContent='center'>
            <Text fontSize='sm' color='muted.700' fontWeight={400}>
              I'm a new user.
            </Text>
            <Link
              onPress={() => navigation.navigate('Register')}
              _text={{ color: 'blue.500', bold: true, fontSize: 'sm' }}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
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
