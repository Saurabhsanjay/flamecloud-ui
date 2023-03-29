import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  CustomerLoveOurPRoxies,
  Blogs,
  ProxyProvider,
  loremipsum,
} from "../data/db";
import v4 from '../assets/svg/features/V4.svg'
import v6 from '../assets/svg/features/V6.svg'
import crown from '../assets/svg/crown.svg'
import icon from '../assets/svg/Icon.svg'
import tick from '../assets/svg/tick.svg'
import avatar from "../assets/svg/Ellipse1.svg";
import star from "../assets/svg/Star1.svg";
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
        width={{ base: 400, md: "824px" }}
        height={{ base: "150", md: "134px" }}
        fontFamily="Figtree"
        fontStyle={"normal"}
        fontWeight="500"
        fontSize={{ base: "32px", sm: "56px" }}
        lineHeight={{ base: "45px", md: "67px" }}
        textAlign={"center"}
        letterSpacing="-0.02em"
        color={" #111822"}
      >
        We are the{" "}
        <Text as="span" style={{ color: "#077BFF" }}>
          Fastest
        </Text>{" "}
        and the
        <Text as="span" style={{ color: "#16D113" }}>
          {" "}
          Most Reliable{" "}
        </Text>
        Proxy Service since 2020
      </Text>
      <Text
        pt={"17px"}
        width={{ base: "380px", md: "509px" }}
        height={{ base: "70px", md: "52px" }}
        marginTop={"154px"}
        color={"#111822"}
        as={"p"}
        fontSize={{ base: "17px", sm: "22px" }}
        fontFamily="Figtree"
        fontWeight="500"
        lineHeight={{ base: "21px", sm: "26px" }}
        letterSpacing="-0.02em"
        textAlign={"center"}
        opacity="0.5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
      <Box pt={{ base: "20px", sm: "26px" }} pb="26px">
        {" "}
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
          Get Started <Image ml={"5px"} src={icon} />
        </Button>
      </Box>

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
        <Box
          w="full"
          display={"flex"}
          textAlign="center"
          justifyContent={"center"}
          alignItems="center"
        >
          <Text
            fontFamily={"Figtree"}
            fontStyle="normal"
            fontWeight={"600"}
            fontSize="16px"
            lineHeight={"19px"}
            letterSpacing="-0.02em"
            color="#111822"
          >
            Rated 4.5 on
          </Text>
          <Image ml={"2px"} mr={"2px"} src={star} />
          <Text> TrustPilot</Text>
        </Box>
      </VStack>
      <Box pt={"54px"}>
        <Divider width={"588px"} height="0px" border={"1px solid #D9D8D6"} />
      </Box>

      <Box pt={"26.26px"} pb={{ base: "60px", md: "138.36px" }}>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 4 }}
          gap={{ base: "10px", sm: "16.16px" }}
        >
          {loremipsum?.map((el) => (
            <HStack
              background={el.backgroundColor}
              border={"1px solid #D4EAE8"}
              borderRadius="5px"
              width={{ base: "160px", sm: "285.54px" }}
              height={"95.28px"}
              mr="16px"
              justifyContent="center"
              alignItems={"center"}
            >
              <HStack
                justifyContent={"center"}
                alignItems="center"
                mt={"26px"}
                mb="26px"
                mr="16px"
                ml={{ base: "10px" }}
                borderRadius={"8px"}
                background={el.background}
                width={"40px"}
                height="40px"
              >
                <Image src={el.svg} />
              </HStack>
              <Text
                width="148px"
                fontStyle={"normal"}
                height={"44px"}
                fontFamily="Figtree"
                fontWeight={"400"}
                fontSize={{ base: "12px", sm: "18px" }}
                lineHeight={{ base: "17px", sm: "22px" }}
                letterSpacing="-0.02em"
                color={"#111822"}
              >
                {el.text}
              </Text>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
      <Stack
        alignItems={"center"}
        width={"full"}
        height={{ base: "full", md: "703px" }}
        background={"#0566D4"}
        textAlign={"center"}
        pb={{ base: "50px", md: "" }}
      >
        <Text
          mt={"115px"}
          color="#FFFFFF"
          width={{ base: "420px", md: "578px" }}
          height={{ base: "20px", md: "43px" }}
          fontFamily="Figtree"
          fontWeight={"600"}
          fontSize={{ base: "22px", md: "36px" }}
          lineHeight={{ base: "30px", md: "43px" }}
          letterSpacing="-0.02em"
          textAlign={"center"}
        >
          Why we are the Best Proxy Providers
        </Text>

        <Text
          mt={"115px"}
          color="#FFFFFF"
          width={{ base: "350px", md: "465px" }}
          height={{ base: "25px", md: "44px" }}
          fontFamily="Figtree"
          fontWeight={"500"}
          fontSize={{ base: "14px", md: "18px" }}
          lineHeight={"22px"}
          letterSpacing="-0.02em"
          textAlign={"center"}
          opacity="0.5"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 4 }}
          spacing={{ base: "10px", md: "27px" }}
        >
          {ProxyProvider?.map((el) => (
            <Box
              mt={"32px"}
              boxSizing="border-box"
              display={"flex"}
              flexDirection="column"
              border=" 1px solid rgba(255, 255, 255, 0.25)"
              background={"rgba(255, 255, 255, 0.03)"}
              borderRadius="5px"
              width={{ base: "170px", md: "286px" }}
              height={{ base: "200px", md: "160px" }}
              mr="16px"
              justifyContent="flex-start"
              alignItems={"start"}
            >
              {" "}
              <Box ml={"25px"} mt="32px">
                <Image w="16.89px" h={"20.1px"} src={el.svg} mb="10px" />
                <Text
                  textAlign={"start"}
                  color="#FFFFFF"
                  width="111px"
                  height="24px"
                  fontFamily="Figtree"
                  fontWeight={"600"}
                  fontSize="14px"
                  lineHeight={"24px"}
                  letterSpacing="-0.02em"
                >
                  {el.featureNo}
                </Text>
              </Box>
              <Box ml={"25px"}>
                <Text
                  textAlign={"start"}
                  color="#FFFFFF"
                  width={{ base: "150px", md: "236px" }}
                  height="51px"
                  fontFamily="Figtree"
                  fontWeight={"400"}
                  fontSize="14px"
                  lineHeight={"17px"}
                  letterSpacing="-0.02em"
                  opacity="0.5"
                >
                  {el.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>

      <VStack pt="177px">
        <Text
          textAlign={"center"}
          color="#111822"
          width="373px"
          height="43px"
          fontFamily="Figtree"
          fontWeight={"600"}
          fontSize="36px"
          lineHeight={"43px"}
          letterSpacing="-0.02em"
        >
          You choose,{" "}
          <Text as={"span"} color={"#077BFF"}>
            we Deliver!
          </Text>
        </Text>
        <Text
          textAlign={"center"}
          color="#111822"
          width={{ base: "350px", md: "465px" }}
          height={{ base: "25px", md: "44px" }}
          fontFamily="Figtree"
          fontWeight={"500"}
          fontSize={{ base: "14px", md: "18px" }}
          lineHeight={"22px"}
          letterSpacing="-0.02em"
          opacity={"0.5"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
      </VStack>
      <SimpleGrid pt={"99px"} columns={{ base: 1, md: 2 }} gap={"20px"}>
        <VStack
          borderRadius="5px"
          height={"470px"}
          width={"344px"}
          border={" 1px solid rgba(30, 30, 30, 0.1)"}
          pb="20px"
          background={"rgba(30, 30, 30, 0.01)"}
        >
          <HStack w="full" justifyContent={"space-between"}>
            <Box>
              <Box ml="28px">
                <HStack
                  justifyContent={"center"}
                  alignItems="center"
                  mt={"26px"}
                  borderRadius={"8px"}
                  background={
                    " linear-gradient(135deg, #2E73E8 0%, #215FDA 100%)"
                  }
                  width={"40px"}
                  height="40px"
                >
                  <Image src={v4} />
                </HStack>
                <Text
                  textAlign={"center"}
                  color="#111822"
                  width="108px"
                  height="24px"
                  fontFamily="Figtree"
                  fontWeight={"600"}
                  fontSize="20px"
                  lineHeight={"24px"}
                  letterSpacing="-0.02em"
                  mt="8px"
                >
                  {" "}
                  IPv4 Proxies
                </Text>
                <Text
                  textAlign={"center"}
                  color="#111822"
                  width="108px"
                  height="24px"
                  fontFamily="Figtree"
                  fontWeight={"400"}
                  fontSize="16px"
                  lineHeight={"19px"}
                  letterSpacing="-0.02em"
                  mt="8px"
                  opacity={"0.5"}
                >
                  Static/Rotating
                </Text>
              </Box>
            </Box>
            <Box>
              <Box w="full">
                <Text
                  mr="87px"
                  textAlign={"start"}
                  color="#111822"
                  width="34px"
                  height="14px"
                  fontFamily="Figtree"
                  fontWeight={"600"}
                  fontSize="12px"
                  lineHeight={"14px"}
                  letterSpacing="-0.02em"
                >
                  FROM
                </Text>
                <Box display={"flex"}>
                  <Text
                    mr="40px"
                    textAlign={"start"}
                    color="#077BFF"
                    width="81px"
                    height="24px"
                    fontFamily="Figtree"
                    fontWeight={"600"}
                    fontSize="20px"
                    lineHeight={"24px"}
                    letterSpacing="-0.02em"
                  >
                    {" "}
                    $4.75
                    <span style={{ fontSize: "12px", color: "#111822" }}>
                      /day
                    </span>
                  </Text>
                </Box>
              </Box>
              <Box mt="4px" w="full">
                <Text
                  mr="87px"
                  textAlign={"start"}
                  color="#111822"
                  width="34px"
                  height="14px"
                  fontFamily="Figtree"
                  fontWeight={"600"}
                  fontSize="12px"
                  lineHeight={"14px"}
                  letterSpacing="-0.02em"
                >
                  OR
                </Text>
                <Box display={"flex"}>
                  <Text
                    mr="27px"
                    textAlign={"start"}
                    color="#077BFF"
                    width="81px"
                    height="24px"
                    fontFamily="Figtree"
                    fontWeight={"600"}
                    fontSize="20px"
                    lineHeight={"24px"}
                    letterSpacing="-0.02em"
                  >
                    {" "}
                    $116.75
                    <span style={{ fontSize: "12px", color: "#111822" }}>
                      /m
                    </span>
                  </Text>
                </Box>
              </Box>
            </Box>
          </HStack>
          <Divider
            width={"295px"}
            height="0"
            opacity={"0.5"}
            border="1px solid #D9D8D6"
          />
          <Box pl={"25px"} w="100%" pt={"14px"}>
            <Text
              fontFamily="Figtree"
              fontWeight={"400"}
              fontSize="16px"
              lineHeight={"19px"}
              letterSpacing="-0.02em"
              opacity={"0.5"}
              w="98px"
              height={"19px"}
            >
              Plan Includes:
            </Text>
            <Box
              color={"#111822"}
              fontFamily="Figtree"
              fontWeight={"400"}
              fontSize="16px"
              lineHeight={"19px"}
              letterSpacing="-0.02em"
              opacity={"0.8"}
            >
              {" "}
              <Box pt={"10px"} display={"flex"}>
                <Image src={tick} mr={"8px"} />
                <Text w="full">100 Threads</Text>
              </Box>
              <Box pt="8px" display={"flex"}>
                {" "}
                <Image src={tick} mr={"8px"} />
                <Text> Dedicated IP Pool</Text>
              </Box>
              <Box pt="8px" display={"flex"}>
                <Image src={tick} mr={"8px"} />
                <Text>Residential Proxy</Text>
              </Box>
              <Box pt="8px" display={"flex"}>
                <Image src={tick} mr={"8px"} />
                <Text>Unlimited Bandwidth</Text>
              </Box>
              <Box pt="8px" display={"flex"}>
                <Image src={tick} mr={"8px"} />
                <Text> Worldwide Locations </Text>
              </Box>
              <Box pt="8px" display={"flex"}>
                <Image src={tick} mr={"8px"} />
                <Text>40 GBps</Text>
              </Box>
            </Box>
          </Box>
          <Box pt={"21px"}>
            <Divider
              width={"295px"}
              height="0"
              opacity={"0.5"}
              border=" 1px solid #D9D8D6"
            />
          </Box>
          <HStack pt={"16px"}>
            <Button
              _hover={{ backround: "#077BFF" }}
              color={"#FFFFFF"}
              background="#077BFF"
              display={"flex"}
              flexDirection="row"
              alignItems={"center"}
              justifyContent="center"
              padding={"10px"}
              gap="5px"
              width={"295px"}
              height="47px"
              fontWeight={"600"}
              fontSize="18px"
              lineHeight={"22px"}
              fontFamily="Figtree"
            >
              View Pricing <Image src={icon} ml={"5px"} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          pb="20px"
          width={"344px"}
          height="494px"
          border={" 1px solid #16D113"}
          background={"rgba(22, 209, 19, 0.1)"}
          borderRadius="5px"
        >
          <HStack w="full" justifyContent={"space-between"}>
            <Box>
              <Box ml="28px">
                <HStack
                  justifyContent={"center"}
                  alignItems="center"
                  mt={"26px"}
                  borderRadius={"8px"}
                  background={
                    " linear-gradient(135deg, #25CD08 0%, #09B32B 100%)"
                  }
                  width={"40px"}
                  height="40px"
                >
                  <Image src={v6} />
                </HStack>
                <Text
                  textAlign={"center"}
                  color="#111822"
                  width="108px"
                  height="24px"
                  fontFamily="Figtree"
                  fontWeight={"600"}
                  fontSize="20px"
                  lineHeight={"24px"}
                  letterSpacing="-0.02em"
                  mt="8px"
                >
                  {" "}
                  IPv6 Proxies
                </Text>
                <Text
                  textAlign={"center"}
                  color="#111822"
                  width="108px"
                  height="24px"
                  fontFamily="Figtree"
                  fontWeight={"400"}
                  fontSize="16px"
                  lineHeight={"19px"}
                  letterSpacing="-0.02em"
                  mt="8px"
                  opacity={"0.5"}
                >
                  Static/Rotating
                </Text>
              </Box>
            </Box>
            <Box>
              <Box w="full">
                <Text
                  mr="87px"
                  textAlign={"start"}
                  color="#111822"
                  width="34px"
                  height="14px"
                  fontFamily="Figtree"
                  fontWeight={"600"}
                  fontSize="12px"
                  lineHeight={"14px"}
                  letterSpacing="-0.02em"
                >
                  FROM
                </Text>
                <Box display={"flex"}>
                  <Text
                    mr="40px"
                    textAlign={"start"}
                    color="#16D113"
                    width="81px"
                    height="24px"
                    fontFamily="Figtree"
                    fontWeight={"600"}
                    fontSize="20px"
                    lineHeight={"24px"}
                    letterSpacing="-0.02em"
                  >
                    {" "}
                    $4.75
                    <span style={{ fontSize: "12px", color: "#111822" }}>
                      /day
                    </span>
                  </Text>
                </Box>
              </Box>
              <Box mt="4px" w="full">
                <Text
                  mr="87px"
                  textAlign={"start"}
                  color="#111822"
                  width="34px"
                  height="14px"
                  fontFamily="Figtree"
                  fontWeight={"600"}
                  fontSize="12px"
                  lineHeight={"14px"}
                  letterSpacing="-0.02em"
                >
                  OR
                </Text>
                <Box display={"flex"}>
                  <Text
                    mr="27px"
                    textAlign={"start"}
                    color="#16D113"
                    width="81px"
                    height="24px"
                    fontFamily="Figtree"
                    fontWeight={"600"}
                    fontSize="20px"
                    lineHeight={"24px"}
                    letterSpacing="-0.02em"
                  >
                    {" "}
                    $116.75
                    <span style={{ fontSize: "12px", color: "#111822" }}>
                      /m
                    </span>
                  </Text>
                </Box>
              </Box>
            </Box>
          </HStack>
          <Divider
            width={"295px"}
            height="0"
            opacity={"0.5"}
            border="1px solid #D9D8D6"
          />
          <Box pl={"25px"} w="100%" pt={"14px"}>
            <Text
              fontFamily="Figtree"
              fontWeight={"400"}
              fontSize="16px"
              lineHeight={"19px"}
              letterSpacing="-0.02em"
              opacity={"0.5"}
              w="98px"
              height={"19px"}
            >
              Plan Includes:
            </Text>
            <Box
              color={"#111822"}
              fontFamily="Figtree"
              fontWeight={"400"}
              fontSize="16px"
              lineHeight={"19px"}
              letterSpacing="-0.02em"
              opacity={"0.8"}
            >
              {" "}
              <Box pt={"10px"} display="flex">
                <Image src={tick} mr={"8px"} />
                <Text w="full"> 100 Threads</Text>
              </Box>
              <Box display={"flex"} pt="8px">
                <Image src={tick} mr={"8px"} />
                <Text>Dedicated IP Pool</Text>
              </Box>
              <Box display={"flex"} pt="8px">
                <Image src={tick} mr={"8px"} />
                <Text>Residential Proxy</Text>
              </Box>
              <Box display={"flex"} pt="8px">
                <Image src={tick} mr={"8px"} />
                <Text>Worldwide Locations </Text>
              </Box>
              <Box display={"flex"} pt="8px">
                <Image src={tick} mr={"8px"} />
                <Text>Dedicated Subnets </Text>
              </Box>
              <Box display={"flex"} pt="8px">
                <Image src={tick} mr={"8px"} />
                <Text>1 Octilion IPS </Text>
              </Box>
              <Box display={"flex"} pt="8px">
                <Image src={tick} mr={"8px"} />
                <Text>Septiltion per Location</Text>
              </Box>
            </Box>
          </Box>
          <Box pt={"21px"}>
            <Divider
              width={"295px"}
              height="0"
              opacity={"0.5"}
              border=" 1px solid #D9D8D6"
            />
          </Box>
          <HStack pt={"16px"} mb="20px">
            <Button
              _hover={{ backround: "#077BFF" }}
              color={"#FFFFFF"}
              background="#2CE617"
              display={"flex"}
              flexDirection="row"
              alignItems={"center"}
              justifyContent="center"
              padding={"10px"}
              gap="5px"
              width={"295px"}
              height="47px"
              fontWeight={"600"}
              fontSize="18px"
              lineHeight={"22px"}
              fontFamily="Figtree"
            >
              View Pricing <Image src={icon} ml={"5px"} />
            </Button>
          </HStack>
        </VStack>
      </SimpleGrid>

      <Box pt={"21px"}>
        <SimpleGrid
          gap={"34px"}
          columns={3}
          width="708px"
          height={"142px"}
          background="rgba(30, 30, 30, 0.01)"
          border={"1px solid rgba(30, 30, 30, 0.1)"}
          borderRadius="5px"
        >
          <Box>
            <Box>
              <Box ml="28px">
                <HStack
                  justifyContent={"center"}
                  alignItems="center"
                  mt={"26px"}
                  borderRadius={"8px"}
                  background={
                    " linear-gradient(135deg, #FFDE2E 0%, #E38B08 100%)"
                  }
                  width={"40px"}
                  height="40px"
                >
                  <Image src={crown} />
                </HStack>
                <Text
                  textAlign={"center"}
                  color="#111822"
                  width="161px"
                  height="24px"
                  fontFamily="Figtree"
                  fontWeight={"600"}
                  fontSize="20px"
                  lineHeight={"24px"}
                  letterSpacing="-0.02em"
                  mt="8px"
                >
                  {" "}
                  Become a Reseller
                </Text>
                <Text
                  textAlign={"center"}
                  color="#111822"
                  width="153px"
                  height="19px"
                  fontFamily="Figtree"
                  fontWeight={"400"}
                  fontSize="16px"
                  lineHeight={"19px"}
                  letterSpacing="-0.02em"
                  mt="8px"
                  opacity={"0.5"}
                >
                  200+ Happy Resellers
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box w="100%" pt={"20px"}>
              <Text
                fontFamily="Figtree"
                fontWeight={"400"}
                fontSize="16px"
                lineHeight={"19px"}
                letterSpacing="-0.02em"
                opacity={"0.5"}
                w="98px"
                height={"19px"}
              >
                Plan Includes:
              </Text>
              <Box
                color={"#111822"}
                fontFamily="Figtree"
                fontWeight={"400"}
                fontSize="16px"
                lineHeight={"19px"}
                letterSpacing="-0.02em"
                opacity={"0.8"}
              >
                <Text pt="10px">Whitelabel IP Pool </Text>
                <Text pt="8px">Whitelabel Subnets </Text>
                <Text pt="8px">Residential Proxy </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box w="100%" pt={"20px"}>
              <Text
                fontFamily="Figtree"
                fontWeight={"400"}
                fontSize="16px"
                lineHeight={"19px"}
                letterSpacing="-0.02em"
                opacity={"0.5"}
                w="98px"
                height={"19px"}
              ></Text>
              <Box
                color={"#111822"}
                fontFamily="Figtree"
                fontWeight={"400"}
                fontSize="16px"
                lineHeight={"19px"}
                letterSpacing="-0.02em"
                opacity={"0.8"}
              >
                <Text pt="10px">Custom Bandwidth </Text>
                <Text pt="8px">Priority Support </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box pt={"180px"} textAlign={"center"}>
        <Text
          fontFamily="Figtree"
          fontWeight={"600"}
          fontSize={{ base: "30px", md: "36px" }}
          lineHeight={"43px"}
          letterSpacing="-0.02em"
          w="440px"
          height={"43px"}
        >
          Customers <span style={{ color: "#16D113" }}>Love</span> our Proxies
        </Text>
        <Text
          pt={"10px"}
          textAlign={"center"}
          fontFamily="Figtree"
          fontWeight={"500"}
          fontSize={{ base: "16px", md: "18px" }}
          lineHeight={"22px"}
          letterSpacing="-0.02em"
          w={{ base: "440px", md: "465px" }}
          height={"44px"}
          opacity="0.5"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
      </Box>
      <Box pt={"34px"}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="17px">
          {CustomerLoveOurPRoxies?.map((el) => (
            <Box
              width={"386px"}
              height="248px"
              background={"rgba(30, 30, 30, 0.01)"}
              border="1px solid rgba(22, 209, 19, 0.5)"
              borderRadius={"5px"}
            >
              <Box display={"flex"} mt={"29px"} ml="25px">
                <Image src={el.star} />
                <Image src={el.star} />
                <Image src={el.star} />
                <Image src={el.star} />
                <Image src={el.star} />
              </Box>
              <Box>
                <Text
                  ml={"25px"}
                  mr="26px"
                  mt={"19px"}
                  textAlign={"start"}
                  fontFamily="Figtree"
                  fontWeight={"400"}
                  fontSize="18px"
                  lineHeight={"22px"}
                  letterSpacing="-0.02em"
                  w="335px"
                  height={"88px"}
                  opacity="0.8"
                >
                  {el.description}
                </Text>
              </Box>
              <Box display={"flex"}>
                <Avatar
                  ml={"25px"}
                  mt="12px"
                  width={"48px"}
                  height="48px"
                  src={avatar}
                />
                <Box>
                  <Text
                    ml={"10px"}
                    mt={"17px"}
                    textAlign={"start"}
                    fontFamily="Figtree"
                    fontWeight={"500"}
                    fontSize="18px"
                    lineHeight={"22px"}
                    letterSpacing="-0.02em"
                    w="102px"
                    height={"22px"}
                  >
                    {el.name}
                  </Text>
                  <Text
                    ml={"10px"}
                    textAlign={"start"}
                    fontFamily="Figtree"
                    fontWeight={"400"}
                    fontSize="16px"
                    lineHeight={"19px"}
                    letterSpacing="-0.02em"
                    w="211px"
                    height={"19px"}
                    opacity="0.5"
                  >
                    {" "}
                    {el.designation}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box pt={"250px"}>
        <VStack
          textAlign={"center"}
          width={"1192px"}
          height="859px"
          background={
            "linear-gradient(180deg, #F7FAFF 0%, rgba(255, 255, 255, 0) 100%)"
          }
          border=" 1px solid rgba(30, 30, 30, 0.1)"
          borderRadius={"5px"}
        >
          <Box
            pt={"65px"}
            textAlign={"center"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Text
              textAlign={"center"}
              fontFamily="Figtree"
              fontWeight={"600"}
              fontSize="36px"
              lineHeight={"43px"}
              letterSpacing="-0.02em"
              w="440px"
              height={"43px"}
            >
              Read our <span style={{ color: "#077BFF" }}>Exclusive</span> Blog
            </Text>
            <Text
              pt={"10px"}
              textAlign={"center"}
              fontFamily="Figtree"
              fontWeight={"500"}
              fontSize="18px"
              lineHeight={"22px"}
              letterSpacing="-0.02em"
              w="465px"
              height={"44px"}
              opacity="0.5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
              augue sit amet mollis molestie.
            </Text>
            <Box>
              <Text
                pt={"10px"}
                textAlign={"center"}
                fontFamily="Figtree"
                fontWeight={"500"}
                fontSize="18px"
                lineHeight={"22px"}
                letterSpacing="-0.02em"
                height={"22px"}
                color={"#077BFF"}
              >
                Read All Blogs
              </Text>
            </Box>
          </Box>
          <Box pt={"40px"}>
            <SimpleGrid
              columns={{ base: 2, md: 3, lg: 3 }}
              gap={{ base: "10px", md: "50px" }}
              spacing={{ base: "10px", md: "38px" }}
            >
              {Blogs?.map((el) => (
                <Box>
                  <Box
                    background={"rgba(7, 123, 255, 0.1)"}
                    borderRadius="5px"
                    border={"1px solid rgba(7, 123, 255, 0.5)"}
                    width={{ base: "180px", md: "354px" }}
                    height={{ base: "90px", md: "221px" }}
                  ></Box>
                  <Text
                    mt={"10px"}
                    fontFamily="Figtree"
                    fontWeight={"500"}
                    fontSize={{ base: "15px", md: "20px" }}
                    lineHeight={{ base: "15px", md: "24px" }}
                    letterSpacing="-0.02em"
                    w={{ base: "none", md: "189px" }}
                    height={"24px"}
                    color="#111822"
                  >
                    {el.blogTitle}
                  </Text>
                  <Text
                    mt={"1px"}
                    fontFamily="Figtree"
                    fontWeight={"400"}
                    fontSize={{ base: "13px", md: "16px" }}
                    lineHeight={{ base: "15px", md: "19px" }}
                    letterSpacing="-0.02em"
                    opacity={"0.5"}
                    w={{ base: "none", md: "142px" }}
                    height={"19px"}
                    color="#111822"
                  >
                    {el.blogCategory}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
    </Stack>
  );
};

export default LandingPage;
