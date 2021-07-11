import { Box, Button } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import FormInput from '../../components/ui/FormInput'
import { useInputState } from '../../hooks'
import { createProduct, updateProdcut } from '../../store/actions/product'

function EditProductScreen({ navigation, route }) {
  const dispatch = useDispatch()
  const uid = useSelector((state) => state.auth.uid)

  const { productId } = route.params
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
      uid: uid,
      title: titleInputState.value,
      imageUrl: imageUrlInputState.value,
      description: descriptionInputState.value,
      price: +priceInputState.value,
    }
    productId ? dispatch(updateProdcut(productId, product)) : dispatch(createProduct(product))
    navigation.goBack()
  }

  return (
    <Box px={4} pt={4}>
      <FormInput label='Product Title' {...titleInputState} />
      <FormInput label='Product Image URL' {...imageUrlInputState} />
      <FormInput label='Product Price' {...priceInputState} />
      <FormInput label='Product Description' {...descriptionInputState} />
      <View style={{ marginTop: 20 }}>
        <Button colorScheme='green' onPress={handleSubmit}>
          {productId ? 'Update Product' : 'Create Product'}
        </Button>
      </View>
    </Box>
  )
}

export default EditProductScreen
