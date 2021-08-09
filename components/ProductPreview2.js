import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Heading, HStack, Image, Stack } from 'native-base'

function ProductPreview2({ title, imageUrl, price, onSelect, children, ...props }) {
  return (
    <Box {...props}>
      <HStack alignItems='center'>
        <TouchableOpacity onPress={onSelect}>
          <Box
            borderColor='muted.200'
            borderWidth={1}
            bg='white'
            rounded='lg'
            overflow='hidden'
            height={90}
            width={90}
          >
            <Image height='100%' width='100%' resizeMode='contain' alt={title} source={{ uri: imageUrl }} />
          </Box>
        </TouchableOpacity>

        <Stack space={1} ml={4} py={1} flex={1} >
          <TouchableOpacity onPress={onSelect}>
            <Heading color='gray.700' noOfLines={2} size='sm' fontWeight='normal'>
              {title}
            </Heading>
            <Heading color='gray.700' size='sm' fontWeight='bold'>
              USD {price.toFixed(2)}
            </Heading>
          </TouchableOpacity>

          <Box>
            {children}
          </Box>
        </Stack>
      </HStack>
    </Box>
  )
}

export default ProductPreview2
