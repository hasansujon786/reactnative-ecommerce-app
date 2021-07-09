import React from 'react'
import { Box, Button } from 'native-base'

function PromptSingIn({ navigation }) {
  return (
    <Box>
      <Button onPress={() => navigation.navigate('SignIn')}>Sign in</Button>
    </Box>
  )
}

export default PromptSingIn
