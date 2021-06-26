import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../constans/color'
import { useInputState } from '../../hooks'
import { createProduct, deleteProduct, updateProdcut } from '../../store/actions/product'

function EditProductScreen({ navigation, route }) {
  const dispatch = useDispatch()

  const { productId } = route.params
  console.log(productId)
  const foundProduct = useSelector((state) =>
    state.product.avalableProducts.find((pod) => pod.id == productId)
  )
  // const foundProductIdx = useSelector(state => avalableProducts.findIndex(pod => pod.id == productId))

  let url =
    'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  let description = 'this is a description'
  const titleInputState = useInputState(productId ? foundProduct.title : 'Product title')
  const imageUrlInputState = useInputState(productId ? foundProduct.imageUrl : url)
  const descriptionInputState = useInputState(productId ? foundProduct.description : description)
  const priceInputState = useInputState(productId ? String(foundProduct.price) : '343')

  const handleSubmit = () => {
    const product = {
      title: titleInputState.value,
      imageUrl: imageUrlInputState.value,
      description: descriptionInputState.value,
      price: +priceInputState.value,
    }
    productId ? dispatch(updateProdcut(productId, product)) : dispatch(createProduct(product))
    navigation.goBack()
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Product title</Text>
        <TextInput style={styles.input} {...titleInputState} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Product image URL</Text>
        <TextInput style={styles.input} {...imageUrlInputState} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Product price</Text>
        <TextInput style={styles.input} {...priceInputState} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Product description</Text>
        <TextInput style={styles.input} {...descriptionInputState} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title={productId ? 'Update product' : 'Create Product'} onPress={handleSubmit} />
      </View>
      {productId && (
        <View style={{ marginTop: 20 }}>
          <Button
            title='Delete'
            onPress={() => {
              dispatch(deleteProduct(productId))
              navigation.goBack()
            }}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  inputWrapper: {
    marginTop: 12,
  },
  input: {
    borderColor: Colors.softBlack,
    borderBottomWidth: 1,
    padding: 4,
    fontSize: 16,
  },
  label: {
    color: Colors.softBlack,
    marginBottom: 2,
  },
})

export default EditProductScreen
