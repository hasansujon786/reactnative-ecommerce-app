import React, { useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import OrderItem from '../../components/OrderItem'
import { fetchUserOrders } from '../../store/actions/order'

function OrderScreen({ navigation }) {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.order.orders)

  useEffect(() => {
    dispatch(fetchUserOrders())
  }, [])

  return (
    <View>
      <FlatList data={orders} renderItem={(itemData) => <OrderItem order={itemData.item} />} />
    </View>
  )
}

export default OrderScreen
