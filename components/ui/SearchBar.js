import { Ionicons } from '@expo/vector-icons'
import { HStack, Icon, IconButton, Input, VStack } from 'native-base'
import React from 'react'

function SearchBar() {
  return (
    <VStack space={8} width='100%' p={4}>
      <HStack width='100%' space={2}>
        <Input
          placeholder='Find your product'
          variant='filled'
          flex={1}
          bg='gray.200'
          borderRadius={10}
          py={1}
          px={2}
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon size='sm' ml={2} size={5} color='gray.400' as={<Ionicons name='ios-search' />} />
          }
        />
        <IconButton
          bg='gray.200'
          rounded='xl'
          icon={<Icon size='sm' color='gray.400' as={<Ionicons name='scan' />} />}
        />
      </HStack>
    </VStack>
  )
}

export default SearchBar
