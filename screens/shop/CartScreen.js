import React, { useEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
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
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>

        <Button
          disabled={cartItems.length === 0}
          title='Proceede to checkout'
          color='#FF3D00'
          onPress={() => dispatch(addOrder(cartItems, cartTotalAmount))}
        />
      </View>
      <FlatList
        keyExtractor={(item) => item.productId}
        data={cartItems}
        renderItem={(itemData) => (
          <CartItem
            onSelect={() => navigation.navigate('ProductsDetails', { productId: itemData.item.id })}
            onRemove={() => dispatch(removeFromCart(itemData.item.id))}
            item={itemData.item}
          />
        )}
      />
      {/* </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    // color: Colors.primary,
  },
})
