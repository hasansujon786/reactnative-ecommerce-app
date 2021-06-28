import { AspectRatio, Box, Heading, Image, Stack } from 'native-base'
import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

function ProductPreview({ product, children, ...props }) {
  const NativeFeadback = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
  return (
    <NativeFeadback useForeground {...props}>
      <Box maxWidth='100%'>
        <AspectRatio ratio={3 / 4}>
          <Image
            source={{
              uri: product.imageUrl,
            }}
            alt={product.title}
            width={'100%'}
            height={'100%'}
            rounded='lg'
          />
        </AspectRatio>
        <Stack mt={2}>
          <Heading size='sm' noOfLines={2} color='blueGray.700'>
            {product.title}
          </Heading>
          <Heading size='md' mt={0} noOfLines={2} color='accent'>
            ${product.price.toFixed(2)}
          </Heading>
        </Stack>
      </Box>
    </NativeFeadback>
  )
}

export default ProductPreview
