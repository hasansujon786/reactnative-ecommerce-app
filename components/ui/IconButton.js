import { IconButton } from 'native-base'
import React from 'react'

export default function ({ icon, bg, ...props }) {
  return (
    <IconButton
      borderRadius='pill'
      variant='solid'
      colorScheme='dark'
      bg={bg}
      shadow={1}
      {...props}
      icon={icon}
    />
  )
}
