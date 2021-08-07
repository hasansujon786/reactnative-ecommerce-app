import React from 'react'
import { Button } from 'native-base'

const FatButton = ({ children, ...otherPoros }) => {
  return (
    <Button
      py={4}
      colorScheme='green'
      size='md'
      rounded={10}
      _text={{ color: 'white', fontWeight: 'bold' }}
      {...otherPoros}
    >
      {children}
    </Button>
  )
}

export default FatButton
