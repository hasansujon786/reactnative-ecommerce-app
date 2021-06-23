import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'

function CartItem({ item, onSelect, onRemove }) {
  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <TouchableOpacity onPress={onSelect}>
        <Image
          style={styles.image}
          source={{
            uri: item.imageUrl,
          }}
        />
      </TouchableOpacity>
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.productTitle}</Text>
        <Text style={{ fontSize: 14 }}>{item.quantity}pc</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 4, fontSize: 18 }}>${item.productPrice}</Text>
      </View>
      <View style={styles.controls}>
        <Button title='Remove' onPress={onRemove} />
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

export default CartItem
