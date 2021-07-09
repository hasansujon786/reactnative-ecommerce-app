import { Avatar, Box, Center, Divider, Heading, HStack, Stack, Text } from 'native-base'
import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/ui/Icon'

function IconTextButton({
  title,
  iconName,
  direction = 'column',
  iconSize = 'sm',
  space = 0,
  color = 'gray.500',
}) {
  const Wrapper = direction === 'column' ? Stack : HStack
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <Wrapper space={space} flex={1} rounded='xl' alignItems='center' justifyContent='center'>
        <Icon color={color} size={iconSize} name={iconName} />
        <Text fontSize='sm' color={color}>
          {title}
        </Text>
      </Wrapper>
    </TouchableOpacity>
  )
}

function AccountDashboardScreen({ navigation }) {
  // const dispatch = useDispatch()
  // const uid = useSelector((state) => state.auth.uid)

  return (
    <Box flex={1}>
      <ImageBackground
        style={{ width: '100%', height: 200, resizeMode: 'cover', justifyContent: 'flex-end' }}
        source={require('../../assets/gradientbg.png')}
      >
        <HStack space={2} pl={4} mb={8} alignItems='center'>
          <Avatar borderColor='white' borderWidth={1} size='md'>
            HM
          </Avatar>
          <Heading
            size='md'
            color='white'
            style={{
              textShadowColor: 'rgba(0, 0, 0, 0.3)',
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 5,
            }}
          >
            Hasan Mahmud
          </Heading>
        </HStack>
        <HStack space={3} height={8} mb={3}>
          <Center flex={1}>
            <Text color='white'>0</Text>
            <Text color='white' fontSize='xs'>
              My Wishlist
            </Text>
          </Center>
          <Center flex={1}>
            <Text color='white'>0</Text>
            <Text color='white' fontSize='xs'>
              Folowed Stores
            </Text>
          </Center>
          <Center flex={1}>
            <Text color='white'>0</Text>
            <Text color='white' fontSize='xs'>
              Vouchers
            </Text>
          </Center>
        </HStack>
      </ImageBackground>
      <Divider />

      <Box py={1} px={4}>
        <Text fontSize='xs' fontWeight='bold' color='gray.400'>
          MY ORDERS
        </Text>
      </Box>
      <Stack bg='white'>
        <HStack space={3} height={24}>
          <IconTextButton iconSize='md' iconName='car' title='somethint' />
          <IconTextButton iconSize='md' iconName='cart' title='somethint' />
          <IconTextButton iconSize='md' iconName='home' title='somethint' />
        </HStack>
      </Stack>
      <Stack bg='white'>
        <HStack space={3} height={24}>
          <IconTextButton iconSize='md' iconName='cart' title='somethint' />
          <IconTextButton iconSize='md' iconName='car' title='somethint' />
          <IconTextButton iconSize='md' iconName='home' title='somethint' />
        </HStack>
      </Stack>
      <Box py={1} px={4}>
        <Text fontSize='xs' fontWeight='bold' color='gray.400'>
          MY ORDERS
        </Text>
      </Box>
      <Stack bg='white'>
        <HStack space={3} height={24}>
          <IconTextButton iconSize='md' iconName='car' title='somethint' />
          <IconTextButton iconSize='md' iconName='cart' title='somethint' />
          <IconTextButton iconSize='md' iconName='home' title='somethint' />
        </HStack>
      </Stack>
      {/* <View style={{ marginTop: 20 }}> */}
      {/*   <Button title='My orders' onPress={() => navigation.navigate('Orders')} /> */}
      {/* </View> */}
      {/* <View style={{ marginTop: 20 }}> */}
      {/*   <Button color={Colors.danger} onPress={() => dispatch(signOut())} title='Logout' /> */}
      {/* </View> */}
    </Box>
  )
}

export default AccountDashboardScreen
