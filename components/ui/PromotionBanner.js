import { Box, Text, Image } from 'native-base'
import React from 'react'

function PromotionBanner(props) {
  return (
    <Box bg='#F8E5C8' rounded='xl' h='32' position='relative' overflow='hidden' {...props}>
      <Box position='absolute' right={5} bottom={5} zIndex={1}>
        <Text color='secondary' fontSize='2xl'>
          Free Shipping
        </Text>
        <Text color='secondary' fontSize='2xl'>
          Durning Covid-19
        </Text>
      </Box>
      <Image
        alt='banner add'
        style={{ width: 300, height: 165, resizeMode: 'cover' }}
        source={require('../../assets/rocket.png')}
      />
    </Box>
  )
}

export default PromotionBanner
