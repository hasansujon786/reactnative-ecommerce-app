import { IconButton } from 'native-base'
import React from 'react'

export default function ({
  icon,
  variant = 'solid',
  borderRadius = 'pill',
  colorScheme = 'dark',
  ...props
}) {
  return (
    <IconButton
      borderRadius={borderRadius}
      variant={variant}
      colorScheme={colorScheme}
      {...props}
      icon={icon}
    />
  )
}
