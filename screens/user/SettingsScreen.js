import { Box, Divider, Stack, Text } from 'native-base'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import FullPageSpinner from '../../components/ui/FullPageSpinner'
import { logout } from '../../firebase/firebase'

function SettingsScreen() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    try {
      await logout()
    } catch (err) {
      setIsLoading(false)
      console.log('error', err)
    }
  }

  if (isLoading) {
    return <FullPageSpinner />
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
