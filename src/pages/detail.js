import Header from '@/components/Header'
import React from 'react'
import { Flex, Button, Box, Text } from "@chakra-ui/react";

function detail() {
  return (
    <>
      <Header />
      <Box style={{ height: "100vh", width: "100%" }}>
        <Text
          fontFamily="游ゴシック, YuGothic, sans-serif"
          fontSize={"25px"}
          fontWeight={"bold"}
          textAlign={"center"}>
          店舗詳細
        </Text>
        
      </Box>

      <Flex
        justifyContent="center"
        alignItems="center"
        bg="#F7FAFC"
        padding="20px"
      >
        <Button
          onClick={() => router.push("/result")}
          fontWeight="bold"
          borderRadius="50px"
          px={20}
          py={10}
          bg="#38B6FF"
          color="white"
          mt="40px"
          fontFamily="游ゴシック, YuGothic, sans-serif"
          cursor="pointer"
          _hover={{ cursor: "pointer" }}
          width="200px"
        >
          戻る
        </Button>
      </Flex>
    </>
  )
}

export default detail