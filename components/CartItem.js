import React from 'react'
import { IconButton, HStack, Text } from 'native-base'
// components
import Icon from './ui/Icon'
import ProductPreview2 from './ProductPreview2'

function CartItem({ item, onSelect, onRemove, onUpdateCount}) {
  return (
    <ProductPreview2 title={item.productTitle} imageUrl={item.imageUrl} price={item.productPrice} onSelect={onSelect}>
      <HStack justifyContent='space-between' >
        <HStack alignItems='center' flexBasis='50%' justifyContent='space-between'>
          <IconButton
            variant='outline'
            colorScheme='dark'
            rounded='xl'
            size='sm'
            onPress={() => onUpdateCount(item.id, item.quantity, -1)}
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
            onPress={() => onUpdateCount(item.id, item.quantity, 1)}
            icon={<Icon name='add-outline' size='xs' />}
            />
        </HStack>
        <IconButton
          colorScheme='dark'
          rounded='xl'
          size='sm'
          onPress={onRemove}
          icon={<Icon color='gray.400' name='trash-outline' size='sm' />}
          />
      </HStack>
    </ProductPreview2>
  )
}

export default CartItem
