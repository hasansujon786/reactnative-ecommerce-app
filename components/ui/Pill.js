import React from 'react'
import { Box, Text } from 'native-base'

const Pill = ({ title, isActive, ...otherProps }) => {
  return (
    <Box
      px={5} py={.5} rounded='pill'
      bg={isActive ? 'accent' : ''}
      {...otherProps}
    >
      <Text text='xs' color={isActive ? 'white' : 'gray.400'}>{title}</Text>
    </Box>
  )
}

export default Pill
