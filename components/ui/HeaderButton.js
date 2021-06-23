import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text } from 'react-native'
import {
    HeaderButton, HeaderButtons, Item
} from 'react-navigation-header-buttons'

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
)



export function UsageWithIcons({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // in your app, you can extract the arrow function into a separate component
      // to avoid creating a new one every time you update the options
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title='search' iconName='ios-search' onPress={() => alert('search')} />
        </HeaderButtons>
      ),
    })
  }, [navigation])

  return <Text style={{ flex: 1, margin: 20 }}>demo!</Text>
}
