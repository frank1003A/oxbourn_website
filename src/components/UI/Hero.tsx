"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import CustomBtn from "../CustomBtn";

export default function Hero() {
  return (
    <>
      <Container
        as={"section"}
        marginInline={"0px"}
        paddingInline={"0px"}
        maxW={"none"}
        w={"100%"}
        //bgColor={"#eee"}
        bgImage={"url('/assets/bgwp.png')"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        pos={"relative"}
      >
        {/** hero img */}
        <Box
          pos={"absolute"}
          width={"50%"}
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
          top={0}
          right={0}
          bottom={"7%"}
          bgImage={"url('/assets/twopepo.png')"}
          bgPosition={"bottom"}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          bgSize={"contain"}
          zIndex={2}
          data-aos="zoom-in-up"
        >
          <Box pos={"relative"} w={"100%"} height={"100%"}>
            <motion.div
              style={{
                position: "absolute",
                top: "50px",
                right: "20px",
              }}
              initial={{ y: 50 }}
              animate={{
                y: [-10, 10, -10],
                transition: { duration: 5, repeat: Infinity },
              }}
            >
              <Box
                h={100}
                w={200}
                bgImage={"/assets/banner-shape.png"}
                bgRepeat={"no-repeat"}
                bgPos={"center"}
                bgSize={"contain"}
              />
            </motion.div>
            <motion.div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "-10px",
              }}
              initial={{ y: 800 }}
              animate={{
                y: [-10, 10, -10],
                transition: { duration: 5, repeat: Infinity },
              }}
            >
              <Box
                h={300}
                w={300}
                bgImage={"/assets/banner-offer.png"}
                bgRepeat={"no-repeat"}
                bgPos={"center"}
                bgSize={"contain"}
              />
            </motion.div>
          </Box>
        </Box>
        {/** text wrap */}
        <Stack
          textAlign={{ base: "left", sm: "center", md: "center", lg: "left" }}
          align={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
          paddingRight={"auto"}
          pos={"relative"}
          margin={0}
          width={"100%"}
          spacing={{ base: 8, sm: 8, md: 5 }}
          py={{ base: 5, sm: 10, md: 20, lg: 32 }}
          px={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
          zIndex={10}
        >
          <Flex
            as={"div"}
            bg={"brand.primary"}
            color={"white"}
            borderRadius={"md"}
            p={"2px 5px"}
            data-aos="fade-up"
          >
            <Text alignSelf={"flex-start"}>Welcome to Oxbourn Consulting</Text>
          </Flex>
          <Heading
            fontFamily={"inherit"}
            fontWeight={600}
            fontSize={{ base: 50, sm: 50, md: 60 }}
            lineHeight={"110%"}
            color={"brand.heading"}
            noOfLines={50}
            maxW={{ base: "none", sm: "none", md: "none", lg: "58%" }}
            textTransform={"capitalize"}
            data-aos="fade-up"
          >
            Unlock your potential, Elevate
            <br />
            <Text as={"span"} color={"brand.primary"}>
              your business
            </Text>
          </Heading>
          <Text
            color={"gray.500"}
            noOfLines={50}
            maxW={{ base: "none", sm: "none", md: "none", lg: "50%" }}
            lineHeight={"1.7"}
            mb={35}
          >
            Our unwavering commitment to excellence makes us your trusted
            partners in navigating complexity, crafting innovative solutions,
            and driving business success.
          </Text>
          <Stack
            direction={"row"}
            spacing={3}
            align={"flex-start"}
            justify={{
              base: "flex-start",
              sm: "flex-start",
              md: "center",
              lg: "flex-start",
            }}
            alignSelf={"flex-start"}
            w={"100%"}
            position={"relative"}
          >
            <CustomBtn
              bg={"brand.primary"}
              rounded={"md"}
              padding={"16px 34px 16px 28px"}
              marginRight={"10px"}
              height={"auto"}
              fontWeight={500}
              rightIcon={<FaArrowRight />}
            >
              Get Started
            </CustomBtn>
            <Button
              variant={"solid"}
              colorScheme="orange"
              bg={"brand.primary"}
              padding={"16px"}
              height={"auto"}
              fontWeight={500}
              rounded={"full"}
            >
              <Center>
                <FaPlay />
              </Center>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
