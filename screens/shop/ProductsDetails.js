import React, { useEffect } from 'react'
import { Button, Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cart'

function ProductsDetails({ navigation, route }) {
  const dispatch = useDispatch()

  const foundproduct = useSelector((state) =>
    state.product.avalableProducts.find((prod) => prod.id == route.params.productId)
  )
  useEffect(() => {
    navigation.setOptions({ title: foundproduct.title })
  }, [navigation, foundproduct])

  return (
    <View>
      <ScrollView style={{ height: '100%' }}>
        <View style={{ padding: 12, paddingBottom: 50 }}>
          <Image style={styles.image} source={{ uri: foundproduct.imageUrl }} />
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 12 }}>
            {foundproduct.title}
          </Text>
          <Text style={{ fontWeight: 'bold', marginTop: 0, fontSize: 22 }}>
            {foundproduct.price}
          </Text>
          <Text>{foundproduct.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title='ADD TO CART' onPress={() => dispatch(addToCart(foundproduct))} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {},
  image: {
    width: '100%',
    height: 200,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
})

export default ProductsDetails
