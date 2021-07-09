import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={28} {...props} />
)

export default function HeaderSingInButtons() {
  const navigation = useNavigation()
  return (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title='exit sign'
        iconName='close-outline'
        onPress={() => navigation.goBack()}
      />
    </HeaderButtons>
  )
}
