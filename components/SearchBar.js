import { Ionicons } from '@expo/vector-icons'
import { Box, Icon } from 'native-base'
import React from 'react'
import FormInput from './ui/FormInput'

function SearchBar({ ...props }) {
  return (
    <Box width='100%' {...props}>
      <FormInput
        placeholder='Search headphone'
        InputLeftElement={
          <Icon size='sm' ml={2} size={5} color='gray.400' as={<Ionicons name='ios-search' />} />
        }
      />
    </Box>
  )
}

export default SearchBar
