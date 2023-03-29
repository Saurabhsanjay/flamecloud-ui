import { Box, Button, Divider, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/svg/logo.svg'
import discord from "../assets/svg/discord.svg";
const Footer = () => {
  return (
    <>
      <Divider
        pt="120px"
        width={"1192px"}
        height="0px"
        border={"1px solid #D9D8D6"}
      />

      <Flex mt="34px" flexDir={{base:"column",lg:"row"}} >
        <Box mr={"100px"} ml={{base:"30px",sm:"30px",md:"130px"}} >
          <Box display={"flex"} >
            <Image src={logo} />
            <Text
              color="#111822"
              width={{ base: "350px", md: "180px" }}
              height={{ base: "25px", md: "31px" }}
              fontFamily="Figtree"
              fontWeight={"600"}
              fontSize={{ base: "16px", md: "26px" }}
              lineHeight={"31px"}
              letterSpacing="-0.02em"
            >
              CreativeProxies
            </Text>
          </Box>
          <Box mt={"8px"}>
            <Text
              color="#111822"
              width={{ base: "350px", md: "180px" }}
              height={{ base: "25px", md: "31px" }}
              fontFamily="Figtree"
              fontWeight={"400"}
              fontSize={{ base: "16px", md: "14px" }}
              lineHeight={"17px"}
              letterSpacing="-0.02em"
              opacity={"0.5"}
            >
              Copyright © 2023 Creative Proxies. All rights reserved.
            </Text>
          </Box>
          <Button
            mt="31px"
            _hover={{ backround: "#077BFF" }}
            color={"#5865F2"}
            background={" rgba(88, 101, 242, 0.1)"}
            display="flex"
            flexDirection={"row"}
            justifyContent="center"
            alignItems={"center"}
            padding="10px"
            gap={"10px"}
            width={"221px"}
            height="44px"
            borderRadius={"10px"}
            border="1px solid #5865F2"
          >
            <Image src={discord} /> Join Our Discord{" "}
          </Button>
        </Box>
        <Box>
          <SimpleGrid columns={{ base: 3, md: 3 }}>
            <Box
              color="#111822"
              width={{ base: "350px", md: "465px" }}
              height={{ base: "25px", md: "44px" }}
              fontFamily="Figtree"
              fontWeight={"500"}
              fontSize={{ base: "16px", md: "19px" }}
              lineHeight={"22px"}
              letterSpacing="-0.02em"
            >
              <Text
                color="#111822"
                width={{ base: "30px", md: "47px" }}
                height={{ base: "12px", md: "17px" }}
                fontFamily="Figtree"
                fontWeight={"600"}
                fontSize={{ base: "14px", md: "14px" }}
                lineHeight={"17px"}
                letterSpacing="-0.02em"
                opacity="0.5"
              >
                {" "}
                Explore{" "}
              </Text>
              <Text opacity={"0.75"}  mt={"13px"}>Proxy Location Checker </Text>
              <Text  opacity={"0.75"} mt={"13px"}> IPv6 Comptability</Text>
              <Text opacity={"0.75"}  mt={"13px"}>Blogs </Text>
            </Box>
            <Box
              color="#111822"
              width={{ base: "350px", md: "465px" }}
              height={{ base: "25px", md: "44px" }}
              fontFamily="Figtree"
              fontWeight={"500"}
              fontSize={{ base: "16px", md: "19px" }}
              lineHeight={"22px"}
              letterSpacing="-0.02em"
            >
              <Text
                color="#111822"
                fontFamily="Figtree"
                fontWeight={"600"}
                fontSize={{ base: "14px", md: "14px" }}
                lineHeight={"17px"}
                letterSpacing="-0.02em"
                opacity="0.5"
              >
                {" "}
                Resources{" "}
              </Text>
              <Text opacity={"0.75"} mt={"13px"}>
                FAQs{" "}
              </Text>
              <Text opacity={"0.75"} mt={"13px"}>
                {" "}
                Branding
              </Text>
              <Text opacity={"0.75"} mt={"13px"}>
                Network Information
              </Text>
              <Text opacity={"0.75"} mt={"13px"}>
                Imprint
              </Text>
            </Box>{" "}
            <Box
              color="#111822"
              fontFamily="Figtree"
              fontWeight={"500"}
              fontSize={{ base: "16px", md: "19px" }}
              lineHeight={"22px"}
              letterSpacing="-0.02em"
            >
              <Text
                color="#111822"
                fontFamily="Figtree"
                fontWeight={"600"}
                fontSize={{ base: "14px", md: "14px" }}
                lineHeight={"17px"}
                letterSpacing="-0.02em"
                opacity="0.5"
              >
                {" "}
                Support{" "}
              </Text>
              <Text opacity={"0.75"} mt={"13px"}>
                Status{" "}
              </Text>
              <Text opacity={"0.75"} mt={"13px"}>
                {" "}
                Terms of Service
              </Text>
              <Text opacity={"0.75"} mt={"13px"}>
                Privacy Policy{" "}
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}

export default Footer
