import { Box, Button, FormControl, Heading, HStack, Input, Link, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Spinner from '../../components/ui/Spinner'
import { useInputState } from '../../hooks'
import { signInWithEmailAndPassword } from '../../store/actions/auth'

function SignInScreen({ navigation }) {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)
  // Form state
  const userEmailState = useInputState('sujon@gmail.com')
  const userPWState = useInputState('123456')

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      await dispatch(signInWithEmailAndPassword(userEmailState.value, userPWState.value))
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
        Sign in to continue
      </Heading>

      <VStack space={2} mt={5}>
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
          <Link
            _text={{ fontSize: 'xs', fontWeight: '700', color: 'accent' }}
            alignSelf='flex-end'
            mt={1}
          >
            Forget Password?
          </Link>
        </FormControl>

        <VStack space={3}>
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
