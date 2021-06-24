import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from '../../components/OrderItem'

function OrderScreen({ navigation }) {
  const orders = useSelector((state) => state.order.orders)
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={(itemData) => (
          <OrderItem
            order={itemData.item}
          />
        )}
      />
      <Text>order screen</Text>
    </View>
  )
}

export default OrderScreen
