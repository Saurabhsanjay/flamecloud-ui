import { Box, Button, Divider, Flex, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const LandingPage = () => {
  return (
    <Stack
      height="full"
      width={"100%"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Text
        marginTop={"154px"}
        color={"#111822"}
        as={"p"}
        fontSize={"16px"}
        fontFamily="Figtree"
        fontWeight="600"
        lineHeight={"19px"}
        letterSpacing="-0.02em"
        textAlign={"center"}
        opacity="0.5"
      >
        WELCOME TO CREATIVE PROXIES
      </Text>

      <Text
        width="824px"
        height={"134px"}
        top="176px"
        fontFamily="Figtree"
        fontStyle={"normal"}
        fontWeight="500"
        fontSize={"56px"}
        lineHeight="67px"
        textAlign={"center"}
        letterSpacing="-0.02em"
        color={" #111822"}
      >
        We are the <span style={{ color: "#077BFF" }}>Fastest</span> and the
        Most Reliable Proxy Service since 2020
      </Text>
      <Text
        width="509px"
        height={"52px"}
        marginTop={"154px"}
        color={"#111822"}
        as={"p"}
        fontSize={"22px"}
        fontFamily="Figtree"
        fontWeight="500"
        lineHeight={"26px"}
        letterSpacing="-0.02em"
        textAlign={"center"}
        opacity="0.5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
      <Button
        _hover={{ backround: "#077BFF" }}
        color={"#FFFFFF"}
        background={"#077BFF"}
        display="flex"
        flexDirection={"row"}
        justifyContent="center"
        alignItems={"center"}
        padding="10px"
        gap={"5px"}
        width={"222px"}
        height="47px"
        borderRadius={"10px"}
        border="none"
      >
        Get Started
      </Button>
      <VStack
        m="auto"
        justifyContent={"center"}
        alignItems="center"
        width="222px"
        height="90px"
        background="rgba(0, 182, 122, 0.1)"
        borderRadius="10px"
      >
        <HStack>
          <Box width={"28.31px"} height="28.31px" background={"#00B67A"}>
            S
          </Box>
          <Box
            width={"28.31px"}
            height="28.31px"
            background={"#00B67A"}
            mt="16px"
          >
            S
          </Box>
          <Box
            width={"28.31px"}
            height="28.31px"
            background={"#00B67A"}
            mt="16px"
          >
            S
          </Box>
          <Box
            width={"28.31px"}
            height="28.31px"
            background={"#00B67A"}
            mt="16px"
          >
            S
          </Box>
        </HStack>
        <Text
          fontFamily={"Figtree"}
          fontStyle="normal"
          fontWeight={"600"}
          fontSize="16px"
          lineHeight={"19px"}
          letterSpacing="-0.02em"
          color="#111822"
        >
          Rated 4.5 on TrustPilot
        </Text>
      </VStack>
      <Divider
        width={"588px"}
        height="0px"
        top="623px"
        border={"1px solid #D9D8D6"}
      />
      <SimpleGrid columns={4}>
        <HStack
          background={"#EEFEFD"}
          border={"1px"}
          width="285.54px"
          height={"95.28px"}
          mr="16px"
          justifyContent="center"
          alignItems={"center"}
        >
          <Image src="" />
          <Text
            width="148px"
            height={"44px"}
            fontFamily="Figtree"
            fontWeight={"400"}
            fontSize="18px"
            lineHeight={"22px"}
            letterSpacing="-0.02em"
          >
            Lorem Ipsum Dolor Sit Amet Top
          </Text>
        </HStack>
        <Box border={"1px"} mr="16px" width="285.54px" height={"95.28px"}>
          2
        </Box>
        <Box border={"1px"} mr="16px" width="285.54px" height={"95.28px"}>
          3
        </Box>
        <Box border={"1px"} mr="16px" width="285.54px" height={"95.28px"}>
          4
        </Box>
      </SimpleGrid>
    </Stack>
  );
}

export default LandingPage
