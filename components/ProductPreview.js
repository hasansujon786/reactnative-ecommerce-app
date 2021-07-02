import { Box, Heading, Image, Stack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from './ui/Icon'
import IconButton from './ui/IconButton'

function ProductPreview({ product, children, onIconPress, iconName = 'heart', ...props }) {
  return (
    <TouchableOpacity useForeground {...props}>
      <Box maxWidth='100%'>
        <Box shadow={1} rounded='lg'>
          <Image
            source={{
              uri: product.imageUrl,
            }}
            alt={product.title}
            width={'100%'}
            height={220}
            rounded='lg'
          />
        </Box>
        <Stack mt={2}>
          <Heading size='sm' noOfLines={2} color='blueGray.700'>
            {product.title}
          </Heading>
          <Heading size='md' mt={0} noOfLines={2} color='accent'>
            ${product.price.toFixed(2)}
          </Heading>
        </Stack>
        {onIconPress && (
          <IconButton
            position='absolute'
            top={1}
            right={1.5}
            onPress={onIconPress}
            bg='white'
            icon={<Icon size='sm' name={iconName} color='red.500' />}
          />
        )}
      </Box>
    </TouchableOpacity>
  )
}

export default ProductPreview
