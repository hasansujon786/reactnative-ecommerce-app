import { Ionicons } from '@expo/vector-icons'
import { Button, Center, HStack, Icon, Input, Text } from 'native-base'
import React from 'react'

function SearchBar() {
  return (
    <HStack width='100%'>
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
        style={{ height: 44 }}
        InputLeftElement={
          <Icon size='sm' ml={2} size={5} color='gray.400' as={<Ionicons name='ios-search' />} />
        }
      />
      <Button size='xs' variant='ghost' colorScheme='light'>
        <Center>
          <Icon size='xs' color='gray.700' as={<Ionicons name='scan' />} />
          <Text color='gray.700' fontSize='xs'>
            Scan
          </Text>
        </Center>
      </Button>
    </HStack>
  )
}

export default SearchBar
