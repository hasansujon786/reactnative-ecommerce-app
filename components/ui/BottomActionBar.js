import { HStack } from 'native-base'
import React from 'react'

function BottomActionBar({ children, bg = 'white', ...props }) {
  return (
    <HStack
      justifyContent='space-between'
      alignItems='center'
      px={4}
      height={16}
      bottom={0}
      right={0}
      left={0}
      position='absolute'
      borderTopWidth={1}
      borderColor='gray.300'
      bg={bg}
      {...props}
    >
      {children}
    </HStack>
  )
}

export default BottomActionBar
