import { useIsFocused } from '@react-navigation/native';
import { Box, Text, Stack, Button, Center, Checkbox, Heading, HStack } from 'native-base'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../../components/CartItem'
import FatButton from '../../components/FatButton'
import { fetchOnlyUserCarts, removeFromCart, updateCartItemCount } from '../../store/actions/cart'
import { addOrder } from '../../store/actions/order'

export default function Cart({ navigation }) {
  const tabIsFocused = useIsFocused()
  const cartTotalAmount = useSelector((state) => state.cart.totalAmout)
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  useEffect(() => {
    if (tabIsFocused) {
      dispatch(fetchOnlyUserCarts())
    }
  }, [tabIsFocused])

  const handleUpdateCount = (cartId, preQuantity, updateBy) => {
    const updatedQuanty = preQuantity + updateBy
    if (updatedQuanty > 0) {
      dispatch(updateCartItemCount(cartId, updateBy))
    } else if (updatedQuanty < 1) {
      dispatch(removeFromCart(cartId))
    }
  }

  return (
    <Box flex={1} pb={24}>
      <FlatList
        keyExtractor={(item) => item.productId}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={cartItems}
        renderItem={(itemData) => (
          <Box mt={6} px={2}>
            <CartItem
              onSelect={() =>
                navigation.navigate('ProductsDetails', { productId: itemData.item.productId })
              }
              onRemove={() => dispatch(removeFromCart(itemData.item.id))}
              onUpdateCount={handleUpdateCount}
              item={itemData.item}
            />
          </Box>
        )}
      />

      <Stack
        px={4}
        py={2}
        bottom={0}
        right={0}
        left={0}
        position='absolute'
        borderTopWidth={1}
        borderColor='gray.300'
        bg='white'
      >
        <HStack alignItems='center' justifyContent='space-between' mb={3}>
          <Text fontSize='sm' fontWeight='bold' color='gray.500'>Total {cartItems.length} Items</Text>

          <Heading color='gray.700' size='md' fontWeight='bold'>
            USD {cartTotalAmount.toFixed(2)}
          </Heading>
        </HStack>
        <FatButton onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}>
          Proceed to Checkout dffs
        </FatButton>
      </Stack>
    </Box>
  )
}
