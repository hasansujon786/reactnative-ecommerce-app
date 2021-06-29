import { Box, Button, Heading, HStack, Image, Stack, Text } from 'native-base'
import React from 'react'
import { ScrollView, useWindowDimensions, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/ui/Icon'
import IconButton from '../../components/ui/IconButton'
import { addToCart } from '../../store/actions/cart'

export function CustomHeader({ navigation }) {
  return (
    <Box zIndex={2} height='16' position='absolute' top={0} left={0} right={0}>
      <HStack alignItems='center' justifyContent='space-between' px='4' py='2'>
        <IconButton
          bg='white'
          onPress={navigation.goBack}
          icon={<Icon size='sm' name='chevron-back' />}
        />
        {/* <IconButton bg='white' icon={<Icon size='sm' name='ellipsis-vertical' />} /> */}
        <IconButton bg='white' icon={<Icon size='sm' name='cart-outline' />} />
      </HStack>
    </Box>
  )
}

function ProductsDetails({ navigation, route }) {
  const dispatch = useDispatch()
  const window = useWindowDimensions()

  const product = useSelector((state) =>
    state.product.avalableProducts.find((prod) => prod.id == route.params.productId)
  )
  // useEffect(() => {
  //   navigation.setOptions({ title: product.title })
  // }, [navigation, product])
  //

  return (
    <View style={{ overflow: 'hidden', height: window.height }}>
      <CustomHeader navigation={navigation} />
      <ScrollView>
        <Box shadow={2} roundedBottom={22} overflow='hidden'>
          <Image
            alt='something something'
            height={window.height / 2}
            source={{
              uri: product.imageUrl,
            }}
          />
        </Box>

        <Stack mt={3} px={4}>
          <HStack justifyContent='space-between' alignItems='center'>
            <Stack>
              <Heading noOfLines={2} color='accent'>
                ${product.price.toFixed(2)}
              </Heading>
              <HStack>
                <Text fontSize='lg' color='blueGray.500' strikeThrough>
                  $342
                </Text>
                <Text fontSize='lg' color='blueGray.900'>
                  {' '}
                  -30%
                </Text>
              </HStack>
            </Stack>
            <HStack space={2}>
              <IconButton bg='white' icon={<Icon color='red.500' size='sm' name='heart' />} />
              <IconButton bg='white' icon={<Icon color='red.500' size='sm' name='share' />} />
            </HStack>
          </HStack>

          <Heading size='md' color='blueGray.700'>
            {product.title}
          </Heading>
        </Stack>

        {/* Descrition */}
        <Stack space={2} mt={3} px={4}>
          <Text color='blueGray.600' fontSize='lg'>
            {product.description}
          </Text>

          <Text color='blueGray.600' fontSize='lg'>
            2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
            voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
            optio possimus delectus quae minus?
          </Text>

          <Text color='blueGray.600' fontSize='lg'>
            3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
            voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
            optio possimus delectus quae minus?
          </Text>

          <Text color='blueGray.600' fontSize='lg'>
            4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
            voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
            optio possimus delectus quae minus?
          </Text>

          <Text color='blueGray.600' fontSize='lg'>
            5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
            voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
            optio possimus delectus quae minus?
          </Text>

          <Text color='blueGray.600' fontSize='lg'>
            6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
            voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
            optio possimus delectus quae minus?
          </Text>
          <Text color='blueGray.600' fontSize='lg'>
            7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
            voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
            optio possimus delectus quae minus?
          </Text>
          <Text color='blueGray.600' fontSize='lg'>
            8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
            voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
            optio possimus delectus quae minus?
          </Text>
          <Text color='blueGray.600' fontSize='lg'>
            9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
            voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
            optio possimus delectus quae minus?
          </Text>
        </Stack>
        <Box height={24} />
      </ScrollView>

      <Box
        bg='white'
        shadow={5}
        borderTopWidth={1}
        borderColor='gray.300'
        height={20}
        bottom={0}
        right={0}
        left={0}
        position='absolute'
      >
        <HStack flex={1} px={4} alignItems='center' justifyContent='space-around'>
          <Button
            onPress={() => dispatch(addToCart(product))}
            colorScheme='green'
            py='5'
            px='6'
            borderRadius='pill'
            variant='ghost'
          >
            <Icon name='cart' color='accent' />
          </Button>
          <Button
            onPress={() => dispatch(addToCart(product))}
            colorScheme='green'
            color='white'
            width='70%'
            rounded='pill'
            py={5}
          >
            Buy Now
          </Button>
        </HStack>
      </Box>
    </View>
  )
}

export default ProductsDetails
