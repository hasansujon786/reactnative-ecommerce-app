import { Box, Button, Center, Checkbox, Heading, HStack } from 'native-base'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../../components/CartItem'
import BottomActionBar from '../../components/ui/BottomActionBar'
import { fetchOnlyUserCarts, removeFromCart } from '../../store/actions/cart'
import { addOrder } from '../../store/actions/order'

export default function Cart({ navigation }) {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmout)
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOnlyUserCarts())
  }, [])

  return (
    <Box flex={1} pb={16}>
      <FlatList
        keyExtractor={(item) => item.productId}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={cartItems}
        renderItem={(itemData) => (
          <Box mt={6} px={2}>
            <CartItem
              onSelect={() =>
                navigation.navigate('ProductsDetails', { productId: itemData.item.id })
              }
              onRemove={() => dispatch(removeFromCart(itemData.item.id))}
              item={itemData.item}
            />
          </Box>
        )}
      />

      <BottomActionBar space={4}>
        <Center>
          <Checkbox rounded='lg' colorScheme='green' aria-label='check all cart items'>
            All
          </Checkbox>
        </Center>
        <HStack flex={1} justifyContent='flex-end' alignItems='baseline'>
          <Heading size='md' color='blueGray.600'>
            Total:{' '}
          </Heading>
          <Heading size='lg' color='accent'>
            ${cartTotalAmount.toFixed(2)}
          </Heading>
        </HStack>

        <Button
          rounded='xl'
          disabled={cartItems.length === 0}
          colorScheme='green'
          onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}
        >
          Checkout
        </Button>
      </BottomActionBar>
    </Box>
  )
}
