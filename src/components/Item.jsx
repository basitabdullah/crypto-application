import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Item = ({title,value}) => {
  return (
    <HStack justifyContent={"space-between"} w={"full"} marginY={"4"}>
        <Text fontFamily={"monospace"} fontSize={"xl"}>{title}</Text>
        <Text>{value}</Text>
    </HStack>
  )
}

export default Item