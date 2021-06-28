import React, { useEffect } from 'react'
import { Button, FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductPreview from '../../components/ProductPreview'
import { Colors } from '../../constans/color'
import { addToCart } from '../../store/actions/cart'
import { fetchProduct } from '../../store/actions/product'

function ProductsOverviewScreen({ navigation }) {
  const dispatch = useDispatch()
  const avalableProducts = useSelector((state) => state.product.avalableProducts)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  return (
    <View style={{ paddingBottom: 0 }}>
      <FlatList
        style={{ paddingHorizontal: 12 }}
        data={avalableProducts}
        numColumns={2}
        renderItem={(itemData) => (
          <View
            style={{
              marginTop: itemData.index % 2 == 0 ? 12 : 40,
              paddingHorizontal: 6,
              width: '50%',
            }}
          >
            <ProductPreview
              product={itemData.item}
              onIconPress={() => dispatch(addToCart(itemData.item))}
              onPress={() =>
                navigation.navigate('ProductsDetails', { productId: itemData.item.id })
              }
            ></ProductPreview>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsOverviewScreen
