import { Ionicons } from '@expo/vector-icons'
import { Box, Button, Heading, Icon, Image, Stack } from 'native-base'
import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'

function ProductPreview({
  product,
  children,
  onIconPress,
  iconName = 'ios-cart-outline',
  ...props
}) {
  const NativeFeadback = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
  return (
    <NativeFeadback useForeground {...props}>
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
          <Button
            width={10}
            height={10}
            position='absolute'
            top={1}
            right={1.5}
            borderRadius='pill'
            shadow={1}
            bg='white'
            colorScheme='dark'
            onPress={onIconPress}
          >
            <Icon color='blueGray.700' size='sm' as={<Ionicons name={iconName} />} />
          </Button>
        )}
      </Box>
    </NativeFeadback>
  )
}

export default ProductPreview
