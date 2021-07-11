import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import {HeaderButton, HeaderButtons} from 'react-navigation-header-buttons'

const IconComponent = (props) => <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />


export default function ({children}) {
  return (
    <HeaderButtons HeaderButtonComponent={IconComponent}>
      {children}
    </HeaderButtons>
  )
}

