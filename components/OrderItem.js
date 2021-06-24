import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function OrderItem({ order }) {
  // Todo
  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: 'bold', marginTop: 4, fontSize: 18 }}>{order.totalAmout}</Text>
        {order.items.map((item) => (
          <View key={item.productId}>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.productTitle}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.quantity}pcs</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '#ddd',
    height: 120,
  },
  image: {
    width: 150,
    height: '100%',
    // resizeMode: 'cover',
  },
  controls: {},
})

export default OrderItem
