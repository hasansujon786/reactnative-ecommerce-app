import { Ionicons } from '@expo/vector-icons'
import { Icon } from 'native-base'
import React from 'react'

export default function ({ name = 'heart', size = 'md', ...props }) {
  return <Icon size={size} {...props} as={<Ionicons name={name} {...props} />} />
}

