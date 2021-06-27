import React from 'react'
import { Button, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductPreview from '../../components/ProductPreview'
import { addToCart } from '../../store/actions/cart'

function UserProductScreen({ navigation }) {
  const dispatch = useDispatch()
  const uid = useSelector((state) => state.auth.uid)
  const currentUserProducts = useSelector((state) => state.product.avalableProducts.filter((prod) => prod.uid === uid))

  return (
    <View style={{ paddingBottom: 0 }}>
      <FlatList
        style={{ paddingHorizontal: 12 }}
        data={currentUserProducts}
        renderItem={(itemData) => (
          <View style={{ marginTop: 12 }}>
            <ProductPreview
              product={itemData.item}
              onPress={() =>
                navigation.navigate('AdminEditProduct', { productId: itemData.item.id })
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
