import React from 'react'
import { Center, Spinner } from 'native-base'

function FullPageSpinner() {
  return (
    <Center flex={1}>
      <Spinner color='green.500' accessibilityLabel='lodign contents' />
    </Center>
  )
}

export default FullPageSpinner
