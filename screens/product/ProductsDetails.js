import React from 'react'
import { Text, View } from 'react-native'

function ProductsDetails({ navigation, route }) {
  // const dispatch = useDispatch()
  // dispatch(createProduct(itemData.item))
  console.log(route.params)
  return (
    <View style={{ padding: 16 }}>
      <Text>Product details</Text>
    </View>
  )
}

export default ProductsDetails
