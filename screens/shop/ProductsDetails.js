import { Box, Center, Button, Heading, HStack, Image, Stack, Text } from 'native-base'
import React, { useState } from 'react'
import { ScrollView, useWindowDimensions, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../components/ui/Icon'
import IconButton from '../../components/ui/IconButton'
import { addToCart } from '../../store/actions/cart'

export function CustomHeader({ navigation }) {
  return (
    <Box zIndex={2} height='16' position='absolute' top={0} left={0} right={0}>
      <HStack alignItems='center' justifyContent='space-between' px='2' py='2'>
        <IconButton
          bg='blueGray.300'
          onPress={navigation.goBack}
          icon={<Icon size='sm' name='arrow-back-outline' />}
        />

        <HStack space={2}>
          <IconButton
            onPress={() => navigation.navigate('Cart')}
            bg='blueGray.300'
            icon={<Icon size='sm' name='cart-outline' />}
          />
          <IconButton bg='blueGray.300' icon={<Icon size='sm' name='ellipsis-vertical' />} />
        </HStack>
      </HStack>
    </Box>
  )
}

const TABS = ['Overview', 'Specification', 'Reviews']
const Tab = ({ title, onPress, isActive, ...props }) => {
  return (
    <TouchableOpacity useForeground onPress={onPress}>
      <Box
        justifyContent='center'
        alignItems='center'
        {...props}
      >
        <Text fontSize='md' color='gray.800'>{title}</Text>
        <Box opacity={isActive ? 1 : 0} mt={1} width={6} borderBottomWidth={4} borderColor='accent' />
      </Box>
    </TouchableOpacity>
  )
}

const Overview = () => {
  return (
    <Stack space={2} mt={3} px={4}>
      <Text color='gray.600' fontSize='lg'>
      </Text>

      <Text color='gray.600' fontSize='lg'>
        2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
        voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
        optio possimus delectus quae minus?
      </Text>

      <Text color='gray.600' fontSize='lg'>
        3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
        voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
        optio possimus delectus quae minus?
      </Text>

      <Text color='gray.600' fontSize='lg'>
        4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
        voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
        optio possimus delectus quae minus?
      </Text>

      <Text color='gray.600' fontSize='lg'>
        5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
        voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
        optio possimus delectus quae minus?
      </Text>

      <Text color='gray.600' fontSize='lg'>
        6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
        voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
        optio possimus delectus quae minus?
      </Text>
      <Text color='gray.600' fontSize='lg'>
        7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
        voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
        optio possimus delectus quae minus?
      </Text>
      <Text color='gray.600' fontSize='lg'>
        8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
        voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
        optio possimus delectus quae minus?
      </Text>
      <Text color='gray.600' fontSize='lg'>
        9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quia magnam reiciendis
        voluptatem aliquam quos laborum, suscipit ducimus a, dicta ab sed iure obcaecati ut
        optio possimus delectus quae minus?
      </Text>
    </Stack>
  )
}
const Specification = () => {
  return (
    <Box>Specification</Box>
  )
}
const Reviews = () => {
  return (
    <Box>Reviews</Box>
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

  const [selectedTab, setSelectedTab] = useState(0)
  const hanldeSelectedTab = (tabNm) => {
    setSelectedTab(tabNm)
  }

  return (
    <View style={{ overflow: 'hidden', height: window.height }}>
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
        <Stack mt={4} px={4} space={1}>
          <Heading size='lg' noOfLines={1} color='accent'>
            USD {product.price.toFixed(2)}
          </Heading>
          <Heading size='md' color='gray.800'>
            {product.title}
          </Heading>
        </Stack>

        <HStack my={4} pl={4} space={5}>
          {TABS.map((tab, idx) => <Tab onPress={() => hanldeSelectedTab(idx)} isActive={idx == selectedTab} key={idx} title={tab} />)}
        </HStack>
        {selectedTab == 0 && <Overview />}
        {selectedTab == 1 && <Specification />}
        {selectedTab == 2 && <Reviews />}

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
        <HStack space={1} flex={1} px={4} alignItems='center' justifyContent='space-around'>
          <Button
            onPress={() => dispatch(addToCart(product))}
            colorScheme='green'
            borderRadius='pill'
            variant='ghost'
          >
            <Center>
              <Icon name='cart' size='sm' color='accent' />
              <Text fontSize='sm' color='accent'>
                Add to Cart
              </Text>
            </Center>
          </Button>

          <Button
            onPress={() => dispatch(addToCart(product))}
            colorScheme='green'
            color='white'
            flex={1}
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
