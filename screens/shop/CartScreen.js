import { Box, Button, Heading, HStack } from 'native-base'
import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../../components/CartItem'
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
    <View style={{ flex: 1 }}>
      {/* <ScrollView> */}
      <HStack justifyContent='space-between' px={6} py={2} shadow={2}>
        <Heading noOfLines={2} color='accent'>
          ${cartTotalAmount.toFixed(2)}
        </Heading>

        <Button
          rounded='xl'
          disabled={cartItems.length === 0}
          colorScheme='green'
          onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}
        >
          Proceede to checkout
        </Button>
      </HStack>
      <FlatList
        keyExtractor={(item) => item.productId}
        data={cartItems}
        renderItem={(itemData) => (
          <Box mt={8} px={2}>
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
      {/* </ScrollView> */}
    </View>
  )
}
