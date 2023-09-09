import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY : "20px"
        }}

        transition={{
          duration:"2",
          repeat: "infinity",
          repeatType : "reverse",
          ease: "easeInOut"
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={
            "https://github.com/meabhisingh/react-crypto-app/blob/master/src/assets/btc.png?raw=true"
          }
          filter={"grayscale(1)"}
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        XCrypto
      </Text>
    </Box>
  );
};

export default Home;
