import { Box, Text, Heading, HStack, Image, Stack } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from './ui/Icon'
import IconButton from './ui/IconButton'

function ProductPreview({ product, children, onIconPress, width = 200, height = 180, iconName = 'heart', ...props }) {
  return (
    <TouchableOpacity useForeground {...props}>
      <Box p={2} width={width} maxWidth={400} bg='white' rounded='lg' borderWidth={1} borderColor='muted.200'>
        <Box height={height}>
          <Image
            source={{
              uri: product.imageUrl,
            }}
            resizeMode='contain'
            alt={product.title}
            width='100%'
            height='100%'
            rounded='lg'
          />
        </Box>
        <Stack mt={2}>
          <Heading color='gray.700' noOfLines={2} size='sm' fontWeight='normal'>
            {product.title}
          </Heading>
          <Heading color='gray.700' size='sm' fontWeight='bold'>
            USD {product.price.toFixed(2)}
          </Heading>
          <HStack mt={1} justifyContent='space-between'>
            <HStack>
              <Icon mr={1} size='xs' name='star' color='orange.500' />
              <Text fontSize='sm' color='gray.700'>4.3</Text>
            </HStack>
            <Text fontSize='sm' color='gray.700'>45 Reviews</Text>
          </HStack>
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
