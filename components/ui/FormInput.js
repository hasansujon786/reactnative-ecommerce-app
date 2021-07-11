import React from 'react'
import { FormControl, Input } from 'native-base'

function FormInput({ label, ...otherProps }) {
  return (
    <FormControl>
      <FormControl.Label _text={{ color: 'muted.700', textTransform: 'capitalize', fontSize: 'sm', fontWeight: 600 }}>
        {label}
      </FormControl.Label>
      <Input {...otherProps} _focus={{ borderColor: 'accent' }} />
    </FormControl>
  )
}

export default FormInput
