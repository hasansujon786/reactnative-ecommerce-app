import { Box, Center, Checkbox, Heading, HStack, Image, Stack, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from './ui/Icon'
import IconButton from './ui/IconButton'

function CartItem({ item, onSelect, onRemove, ...props }) {
  return (
    <Box px={2} {...props}>
      <HStack>
        <Center mr={4}>
          <Checkbox rounded='lg' colorScheme='green' aria-label='cart chekbox' />
        </Center>
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

        <Stack space={1} ml={4} py={1} flex={1} justifyContent='space-between'>
          <Heading color='blueGray.700' noOfLines={2} size='sm' fontWeight='normal'>
            {item.productTitle}
          </Heading>
          <Heading color='accent' size='md' fontWeight='bold'>
            {item.productPrice.toFixed(2)}
          </Heading>
        </Stack>

        <HStack justifyContent='center' alignItems='center'>
          <IconButton
            onPress={onRemove}
            variant='ghost'
            colorScheme='light'
            icon={<Icon color='blueGray.500' name='remove-outline' size='sm' />}
          />
          <Text fontWeight='bold' fontSize='lg'>
            {item.quantity}
          </Text>
          <IconButton
            variant='ghost'
            colorScheme='light'
            icon={<Icon color='secondary' name='add-outline' size='sm' />}
          />
        </HStack>
      </HStack>
    </Box>
  )
}

export default CartItem
