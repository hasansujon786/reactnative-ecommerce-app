import React from 'react'
import { ScrollView } from 'react-native'
import { Box, Text, Center, Image, VStack } from 'native-base'
const data = [
  { title: 'Men', imagUrl: 'https://images.unsplash.com/photo-1527016021513-b09758b777bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80' },
  { title: 'Women', imagUrl: 'https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' },
  { title: 'Kids', imagUrl: 'https://images.unsplash.com/photo-1509924603848-aca5e5f276d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' },
  // { title: 'Women', imagUrl: 'https://images.unsplash.com/photo-1506760105842-74c56599ed06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80' },
]

function CategoryScreen() {
  return (
    <ScrollView>
      <Box p={4}>
        <VStack space={4}>
          {data.map(item => (
            <Box key={item.title} rounded='lg' overflow='hidden' bg='gray.200' h={40} >
              <Image
                height='100%'
                width='100%'
                resizeMode='cover'
                alt={item.title}
                source={{
                  uri: item.imagUrl,
                }}
              />
              <Center position='absolute' inset={0} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <Text color='white' fontSize='6xl'>{item.title}</Text>
              </Center>
            </Box>))}
        </VStack>
      </Box>
    </ScrollView>
  )
}

export default CategoryScreen
