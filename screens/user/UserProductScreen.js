import React from 'react'
import { Button, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductPreview from '../../components/ProductPreview'
import { addToCart } from '../../store/actions/cart'

function UserProductScreen({ navigation }) {
  const dispatch = useDispatch()
  const avalableProducts = useSelector((state) => state.product.avalableProducts)

  return (
    <View style={{ paddingBottom: 0 }}>
      <FlatList
        style={{ paddingHorizontal: 12 }}
        data={avalableProducts}
        renderItem={(itemData) => (
          <View style={{ marginTop: 12 }}>
            <ProductPreview
              product={itemData.item}
              onPress={() =>
                navigation.navigate('AP-ProductsEdit', { productId: itemData.item.id })
              }
            >
              <Button title='edit' onPress={() => dispatch(addToCart(itemData.item))} />
            </ProductPreview>
          </View>
        )}
      />
    </View>
  )
}

export default UserProductScreen
