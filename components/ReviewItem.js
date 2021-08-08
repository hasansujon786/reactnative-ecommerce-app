import React from 'react'
import { Stack, HStack, Avatar, Text } from 'native-base'
import Icon from './ui/Icon'

const ReviewItem = () => {
  return (
    <HStack space={2}>
      <Avatar>nm</Avatar>
      <Stack flex={1} space={1}>
        <HStack justifyContent='space-between'>
          <Text fontSize='lg' color='gray.800'>User name</Text>
          <Text fontSize='sm' color='gray.500'>1 Month ago</Text>
        </HStack>
        <HStack space={1}>
          <Icon size='xs' name='star' color='orange.400' />
          <Icon size='xs' name='star' color='orange.400' />
          <Icon size='xs' name='star' color='orange.400' />
          <Icon size='xs' name='star' color='orange.400' />
          <Icon size='xs' name='star-outline' color='gray.400' />
        </HStack>
        <Text mt={1} color='gray.600'>Amet odio tempore sunt natus fuga, doloremque Sunt aperiam qui unde vero iure Fugit fuga asperiores mollitia nulla praesentium! Earum</Text>
      </Stack>
    </HStack>
  )
}

export default ReviewItem
