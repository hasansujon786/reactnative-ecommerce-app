import { Box, Center, Checkbox, IconButton, Heading, HStack, Image, Stack, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from './ui/Icon'

function CartItem({ item, onSelect, onRemove, ...props }) {
  return (
    <Box px={2} {...props}>
      <HStack alignItems='center'>
        {/* <Center mr={4}> */}
        {/*   <Checkbox rounded='xl' colorScheme='green' aria-label='cart item chekbox' /> */}
        {/* </Center> */}
        <TouchableOpacity onPress={onSelect}>
          <Image
            height={90}
            width={90}
            resizeMode='cover'
            rounded='xl'
            alt={item.productTitle}
            source={{
              uri: item.imageUrl,
            }}
          />
        </TouchableOpacity>

        <Stack space={1} ml={4} py={1} flex={1} >
          <Heading color='gray.700' noOfLines={2} size='sm' fontWeight='normal'>
            {item.productTitle}
          </Heading>
          <Heading color='gray.700' size='sm' fontWeight='bold'>
            USD {item.productPrice.toFixed(2)}
          </Heading>
          <HStack justifyContent='space-between' >
            <HStack alignItems='center' flexBasis='50%' justifyContent='space-between'>
              <IconButton
                variant='outline'
                colorScheme='dark'
                rounded='xl'
                size='sm'
                onPress={onRemove}
                icon={<Icon name='remove-outline' size='xs' />}
              />
              <Text fontSize='lg'>
                {item.quantity}
              </Text>
              <IconButton
                variant='outline'
                colorScheme='dark'
                rounded='xl'
                size='sm'
                icon={<Icon name='add-outline' size='xs' />}
              />
            </HStack>
            <IconButton
              colorScheme='dark'
              rounded='xl'
              size='sm'
              icon={<Icon color='gray.400' name='trash-outline' size='sm' />}
            />
          </HStack>
        </Stack>
      </HStack>
    </Box>
  )
}

export default CartItem
