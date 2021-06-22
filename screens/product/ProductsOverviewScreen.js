import React from 'react'
import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductPreview from '../../components/ProductPreview'

function ProductsOverviewScreen({ navigation }) {
  const avalableProducts = useSelector((state) => state.product.avalableProducts)

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={avalableProducts}
        renderItem={(itemData) => (
          <View style={{ marginBottom: 12 }}>
            <ProductPreview
              product={itemData.item}
              onPress={() =>
                navigation.navigate('ProductsDetails', { productId: itemData.item.id })
              }
            />
          </View>
        )}
      />
    </View>
  )
}

export default ProductsOverviewScreen
