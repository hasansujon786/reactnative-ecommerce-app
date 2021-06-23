import React from 'react'
import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem'

export default function Cart({ navigation }) {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Object.keys(cartItems)}
        keyExtractor={(item) => item}
        renderItem={(itemData) => (
          <CartItem
            onSelect={() => navigation.navigate('ProductsDetails', { productId: itemData.item })}
            item={cartItems[itemData.item]}
          />
        )}
      />
    </View>
  )
}
