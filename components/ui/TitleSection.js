import React from 'react'
import { Heading, HStack } from 'native-base'

const TitleSection = ({ title = 'Section title' }) => {
  return (
    <HStack justifyContent='space-between' mt={6} mb={4} >
      <Heading color='gray.800' size='sm'>{title}</Heading>
    </HStack>
  )
}

export default TitleSection
