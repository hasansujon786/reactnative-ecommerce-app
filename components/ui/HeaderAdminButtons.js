import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
)

export default function HeaderAdminButtons() {
  const navigation = useNavigation()
  return (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title='Create Product'
        iconName='create-outline'
        onPress={() => navigation.navigate('AP-ProductsEdit', {productId: null})}
      />
    </HeaderButtons>
  )
}
