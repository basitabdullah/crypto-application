import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import image from "../assets/WhatsApp Image 2023-09-09 at 15.25.35.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            color={"whiteAlpha.700"}
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            maxW={"80"}
          >
            XCrypto offers decentralization, security, transparency, global
            accessibility, low fees, financial inclusion, innovation, and
            potential for high returns, revolutionizing traditional finance.
          </Text>
        </VStack>
        <VStack>
          <Avatar src={image} boxSize={"28"} mt={["4", "0"]} />
          <Text>OUR FOUNDER</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
