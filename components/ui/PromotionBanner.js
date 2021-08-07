import { Box, Image } from 'native-base'
import React from 'react'

function PromotionBanner(props) {
  return (
    <Box height={154} bg='white' borderWidth={1} borderColor='muted.200' rounded='xl' overflow='hidden' {...props} >
      <Image
        alt='banner add'
        width='100%'
        height='100%'
        source={require('../../assets/Banner01.png')}
      />
    </Box>
  )
}

export default PromotionBanner
