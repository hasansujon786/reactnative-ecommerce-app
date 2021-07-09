import React from 'react'
import { Pressable } from 'react-native'
import { Box, Link, Stack, Text, Divider } from 'native-base'
import { useDispatch } from 'react-redux'
import { signOut } from '../../store/actions/auth'

function SettingsScreen() {
  const dispatch = useDispatch()
  const handleSignOut = () => {
    dispatch(signOut())
  }
  return (
    <Box>
      <Stack space={3}>
        <Box bg='white'>
          <Text px={6} py={4}>
            Account Information
          </Text>
          <Divider />
          <Text px={6} py={4}>
            General
          </Text>
          <Divider />
          <Text px={6} py={4}>
            Language
          </Text>
          <Divider />
          <Text px={6} py={4}>
            Help
          </Text>
        </Box>

        <Box>
          <Pressable onPress={handleSignOut}>
            <Text px={6} py={4} color='red.500' fontWeight='bold' bg='white' textAlign='center'>
              Logout
            </Text>
          </Pressable>
        </Box>
      </Stack>
    </Box>
  )
}

export default SettingsScreen
