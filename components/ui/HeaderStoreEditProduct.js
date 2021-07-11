import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../store/actions/product'
import HeaderButtons from './HeaderButtons'

function HeaderStoreEditProduct() {
  const route = useRoute()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { productId } = route.params

  return (
    <HeaderButtons>
      <Item
        title='Delete product'
        iconName='trash-outline'
        onPress={() => {
          dispatch(deleteProduct(productId))
          navigation.goBack()
        }}
      />
    </HeaderButtons>
  )
}

export default HeaderStoreEditProduct
