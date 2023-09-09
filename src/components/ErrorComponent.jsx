import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = (prop) => {
  return (
   <Alert status="error" position={"fixed"} bottom={"4"} left={"50%"} transform={"translateX(-50%)"} w={"container.lg"}>
    <AlertIcon />
    {prop.message}
   </Alert>
  )
}

export default ErrorComponent