import React from 'react'
import { FormControl, Input } from 'native-base'

function FormInput({ label, children, ...otherProps }) {
  return (
    <FormControl>
      <FormControl.Label
        _text={{ color: 'muted.700', textTransform: 'capitalize', fontSize: 'sm', fontWeight: 600 }}
      >
        {label}
      </FormControl.Label>
      <Input style={{ height: 46, boxShadow: 'none' }}
        borderRadius={10}
        borderColor='muted.300'
        size='lg'
        borderWidth={1}
        _focus={{ borderColor: 'muted.500', style: { boxShadow: 'none' } }}
        {...otherProps}
      />
      {children}
    </FormControl>
  )
}

export default FormInput
