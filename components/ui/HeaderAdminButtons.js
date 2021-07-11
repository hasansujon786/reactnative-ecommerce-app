import { useNavigation } from '@react-navigation/native'
import React from 'react'
import HeaderButtons from './HeaderButtons'
import { Item } from 'react-navigation-header-buttons'

export default function HeaderAdminButtons() {
  const navigation = useNavigation()
  return (
    <HeaderButtons >
      <Item
        title='Create Product'
        iconName='create-outline'
        onPress={() => navigation.navigate('StoreEditProduct', {productId: null})}
      />
    </HeaderButtons>
  )
}
