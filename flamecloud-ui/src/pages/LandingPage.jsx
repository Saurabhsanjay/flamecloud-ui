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
          <Box
            mt={"26px"}
            mb="26px"
            mr="16px"
            borderRadius={"8px"}
            background={" linear-gradient(135deg, #3BC9FB 0%, #42A6FB 100%)"}
            width={"40px"}
            height="40px"
          ></Box>
          <Text
            width="148px"
            fontStyle={"normal"}
            height={"44px"}
            fontFamily="Figtree"
            fontWeight={"400"}
            fontSize="18px"
            lineHeight={"22px"}
            letterSpacing="-0.02em"
            color={"#111822"}
          >
            Lorem Ipsum Dolor Sit Amet Top
          </Text>
        </HStack>
        
      </SimpleGrid>

      <Stack
        alignItems={"center"}
        width={"full"}
        height="703px"
        background={"#0566D4"}
        textAlign={"center"}
      >
        <Text
          mt={"115px"}
          color="#FFFFFF"
          width="578px"
          height="43px"
          fontFamily="Figtree"
          fontWeight={"600"}
          fontSize="36px"
          lineHeight={"43px"}
          letterSpacing="-0.02em"
          textAlign={"center"}
        >
          Why we are the Best Proxy Providers
        </Text>

        <Text
          mt={"115px"}
          color="#FFFFFF"
          width="465px"
          height="44px"
          fontFamily="Figtree"
          fontWeight={"500"}
          fontSize="18px"
          lineHeight={"22px"}
          letterSpacing="-0.02em"
          textAlign={"center"}
          opacity="0.5"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
        <SimpleGrid columns={4}>
          <Box
            boxSizing="border-box"
            display={"flex"}
            flexDirection="column"
            border=" 1px solid rgba(255, 255, 255, 0.25)"
            background={"rgba(255, 255, 255, 0.03)"}
            borderRadius="5px"
            width="286px"
            height={"160px"}
            mr="16px"
            justifyContent="flex-start"
            alignItems={"start"}
          >
            {" "}
            <Box ml={"25px"} mt="32px">
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
                Feature No 1
              </Text>
            </Box>
            <Box ml={"25px"}>
              <Text
                textAlign={"start"}
                color="#FFFFFF"
                width="236px"
                height="51px"
                fontFamily="Figtree"
                fontWeight={"400"}
                fontSize="14px"
                lineHeight={"17px"}
                letterSpacing="-0.02em"
                opacity="0.5"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultricies interdum eros non suscipit.
              </Text>
            </Box>
          </Box>
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
          width="465px"
          height="44px"
          fontFamily="Figtree"
          fontWeight={"500"}
          fontSize="18px"
          lineHeight={"22px"}
          letterSpacing="-0.02em"
          opacity={"0.5"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
      </VStack>
      <SimpleGrid pt={"99px"} columns="2" gap={"20px"}>
        <VStack
          borderRadius="5px"
          height={"447px"}
          width={"344px"}
          border={" 1px solid rgba(30, 30, 30, 0.1)"}
          pb="20px"
          background={"rgba(30, 30, 30, 0.01)"}
        >
          <HStack w="full" justifyContent={"space-between"}>
            <Box>
              <Box ml="28px">
                <Box
                  mt={"26px"}
                  borderRadius={"8px"}
                  background={
                    " linear-gradient(135deg, #2E73E8 0%, #215FDA 100%)"
                  }
                  width={"40px"}
                  height="40px"
                ></Box>
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
              <Text w="full" pt={"10px"}>
                {" "}
                100 Threads
              </Text>
              <Text pt="8px">Dedicated IP Pool</Text>
              <Text pt="8px">Residential Proxy</Text>
              <Text pt="8px">Unlimited Bandwidth</Text>
              <Text pt="8px">Worldwide Locations </Text>
              <Text pt="8px">40 GBps</Text>
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
              View Pricing
            </Button>
          </HStack>
        </VStack>
        <VStack
          pb="20px"
          width={"344px"}
          height="495px"
          border={" 1px solid #16D113"}
          background={"rgba(22, 209, 19, 0.1)"}
          borderRadius="5px"
        >
          <HStack w="full" justifyContent={"space-between"}>
            <Box>
              <Box ml="28px">
                <Box
                  mt={"26px"}
                  borderRadius={"8px"}
                  background={
                    " linear-gradient(135deg, #25CD08 0%, #09B32B 100%)"
                  }
                  width={"40px"}
                  height="40px"
                ></Box>
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
              <Text w="full" pt={"10px"}>
                {" "}
                100 Threads
              </Text>
              <Text pt="8px">Dedicated IP Pool</Text>
              <Text pt="8px">Residential Proxy</Text>
              <Text pt="8px">Worldwide Locations </Text>
              <Text pt="8px">Dedicated Subnets </Text>
              <Text pt="8px">Octilion IPS </Text>
              <Text pt="8px">Septiltion per Location</Text>
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
              View Pricing
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
                <Box
                  mt={"26px"}
                  borderRadius={"8px"}
                  background={
                    " linear-gradient(135deg, #FFDE2E 0%, #E38B08 100%)"
                  }
                  width={"40px"}
                  height="40px"
                ></Box>
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
    </Stack>
  );
}

export default LandingPage
