import { Box, Button, Divider, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/svg/logo.svg";
import discord from "../assets/svg/discord.svg";
import humber from "../assets/svg/humber.svg";
const Navbar = () => {
  return (
    <>
      <HStack w="100%" pt={"10px"} px={"20px"}>
        <Box display={"flex"} mt={"14px"}>
          <Image src={logo} />
          <Text
            color="#111822"
            width={{ base: "120px", md: "180px" }}
            height={{ base: "20px", md: "31px" }}
            fontFamily="Figtree"
            fontWeight={"600"}
            fontSize={{ base: "16px", md: "26px" }}
            lineHeight={"31px"}
            letterSpacing="-0.02em"
          >
            CreativeProxies
          </Text>
        </Box>
        <Box
          pl={{ base: "5px", md: "30px" }}
          display={{ base: "none", md: "flex" }}
        >
          <Text
            color="#111822"
            width={{ base: "20px", md: "48px" }}
            height={{ base: "15px", md: "19px" }}
            fontFamily="Figtree"
            fontWeight={"400"}
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight={"31px"}
            letterSpacing="-0.02em"
          >
            Pricing
          </Text>
        </Box>
        <Box pl={"30px"} display={{ base: "none", md: "flex" }}>
          {" "}
          <Text
            color="#111822"
            width={{ base: "350px", md: "91px" }}
            height={{ base: "25px", md: "19px" }}
            fontFamily="Figtree"
            fontWeight={"400"}
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight={"31px"}
            letterSpacing="-0.02em"
          >
            Explore Tools
          </Text>
        </Box>
        <Box pl={"30px"} display={{ base: "none", md: "flex" }}>
          {" "}
          <Text
            color="#111822"
            width={{ base: "350px", md: "73px" }}
            height={{ base: "25px", md: "19px" }}
            fontFamily="Figtree"
            fontWeight={"400"}
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight={"31px"}
            letterSpacing="-0.02em"
          >
            Resources
          </Text>
        </Box>
        <Box pl={"30px"} display={{ base: "none", md: "flex" }}>
          {" "}
          <Text
            color="#111822"
            width={{ base: "350px", md: "39px" }}
            height={{ base: "25px", md: "18px" }}
            fontFamily="Figtree"
            fontWeight={"400"}
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight={"31px"}
            letterSpacing="-0.02em"
          >
            FAQs
          </Text>
        </Box>
        <Box pl={"30px"} display={{ base: "none", md: "flex" }}>
          {" "}
          <Text
            color="#111822"
            width={{ base: "350px", md: "39px" }}
            height={{ base: "25px", md: "18px" }}
            fontFamily="Figtree"
            fontWeight={"400"}
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight={"31px"}
            letterSpacing="-0.02em"
          >
            Blogs
          </Text>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "flex" }} mt={"14px"}>
          <Image src={discord} />
          <Text
            color="#5865F2"
            width={{ base: "350px", md: "87px" }}
            height={{ base: "25px", md: "19px" }}
            fontFamily="Figtree"
            fontWeight={"500"}
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight={"19px"}
            letterSpacing="-0.02em"
          >
            Discord
          </Text>
        </Box>
        <Box>
          {" "}
          <Text
            display={{ base: "none", md: "flex" }}
            color="#111822"
            width={{ base: "350px", md: "42px" }}
            height={{ base: "25px", md: "19px" }}
            fontFamily="Figtree"
            fontWeight={"400"}
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight={"19px"}
            letterSpacing="-0.02em"
          >
            Login
          </Text>
        </Box>
        <Box display={'flex'}>
          {" "}
          <Button mt={'5px'}
            _hover={{ backround: "#077BFF" }}
            color={"#FFFFFF"}
            background={"#077BFF"}
            display="flex"
            flexDirection={"row"}
            justifyContent="center"
            alignItems={"center"}
            fontWeight="600"
            padding="10px"
            gap={"10px"}
            width={"127px"}
            height="39px"
            borderRadius={"5px"}
            border="none"
            fontSize={"16px"}
          >
            Get Started
          </Button>
          <Button ml={'5px'}
            _hover={{ backround: " rgba(7, 123, 255, 0.25)" }}
            color={"#FFFFFF"}
            background={" rgba(7, 123, 255, 0.25)"}
            display={{ base: "flex", md: "none" }}
            flexDirection={"row"}
            justifyContent="center"
            alignItems={"center"}
            fontWeight="600"
            
            width={"50px"}
            height="50px"
            borderRadius={"8.25px"}
            border="none"
            fontSize={"1px"}
          >
            <Image src={humber} />
          </Button>
        </Box>
      </HStack>
      <Box display={"flex"} justifyContent={"center"} alignItems="center">
        <Divider width={"1192px"} border="1px solid #D9D8D6" mt={"20px"} />
      </Box>
    </>
  );
}

export default Navbar
