import React from 'react'
import { ScrollView, Stack, HStack, Text } from 'native-base'
// components
import SearchBar from '../../components/SearchBar'
import ProductPreview2 from '../../components/ProductPreview2'
import TitleSection from '../../components/ui/TitleSection'
import Icon from '../../components/ui/Icon'

import { PRODUCTS } from '../../data/dummy'


const searchHistory = [
  { text: 'TMA2 Wireless' },
  { text: 'cable' },
]

const SearchScreen = () => {
  return (
    <ScrollView px={4} >
      <SearchBar mt={2} />

      <TitleSection title='Latest Search' />
      <Stack>
        {searchHistory.map((search, idx) => (
          <HStack key={idx} py={2}>
            <Text flex={1}>{search.text}</Text>
            <Icon color='muted.500' size='sm' name='close-outline' />
          </HStack>
        ))}
      </Stack>

      <TitleSection title='Popular Products' />
      <Stack>
        {PRODUCTS.map(pod => (
          <ProductPreview2
            mb={4}
            key={pod.id}
            title={pod.title}
            price={pod.price}
            imageUrl={pod.imageUrl}
            onSelect={() => console.log('sdfdf')}
          >
            <HStack mt={1} justifyContent='space-between'>
              <HStack>
                <Icon mr={1} size='xs' name='star' color='orange.500' />
                <Text fontSize='sm' color='gray.700'>4.3</Text>
              </HStack>
              <Text fontSize='sm' color='gray.700'>45 Reviews</Text>
            </HStack>
          </ProductPreview2>
        ))}
      </Stack>
    </ScrollView>
  )
}

export default SearchScreen
