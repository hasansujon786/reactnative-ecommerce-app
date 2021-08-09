import React, { useEffect } from 'react'
import { Heading, HStack, Text, Box } from 'native-base'
import { FlatList, ScrollView, View } from 'react-native'
// components
import PromotionBanner from '../../components/ui/PromotionBanner'
import ProductPreview from '../../components/ProductPreview'
import Pill from '../../components/ui/Pill'
// hooks
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../store/actions/product'

const PILLS = [
  'Headphone',
  'Headband',
  'Earpad',
  'Wire less',
  'Chargers'
]

function ProductsOverviewScreen({ navigation }) {
  const dispatch = useDispatch()
  const avalableProducts = useSelector((state) => state.product.avalableProducts)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <PromotionBanner mx={4} mt={8} />
        <Box pt={10} flexDirection='row'>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {PILLS.map((pill, idx) =>
              <Pill ml={idx == 0?4:0} mr={2} key={pill} isActive={idx == 0} title={pill}/>
            )}
          </ScrollView>
        </Box>
        <HStack justifyContent='space-between' px={4} mt={4}>
          <Heading color='gray.800' size='sm'>Featured Products</Heading>
          <Text fontSize='sm' color='gray.400'>See All</Text>
        </HStack>
        <FlatList
          contentContainerStyle={{ paddingHorizontal: 12, marginTop: 8 }}
          data={avalableProducts}
          numColumns={2}
          renderItem={(itemData) => (
            <View
              style={{
                // marginTop: itemData.index % 2 == 0 ? 0 : 30,
                marginBottom: 12,
                paddingHorizontal: 6,
                width: '50%',
              }}
            >
              <ProductPreview
                product={itemData.item}
                width='100%'
                // onIconPress={() => dispatch(addToCart(itemData.item))}
                onPress={() =>
                  navigation.navigate('ProductsDetails', { productId: itemData.item.id })
                }
              ></ProductPreview>
            </View>
          )}
        />
      </ScrollView>
    </View>
  )
}

export default ProductsOverviewScreen
