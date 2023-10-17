import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { BiSolidCheckCircle } from "react-icons/bi";
import CustomCarousel from "../CustomCarousel";
import PrimaryContainer from "../PrimaryContainer";
import SectionTag from "../SectionTag";

const About = () => {
  return (
    <PrimaryContainer
      id="#about"
      bgImage={"url('/assets/footer.png')"}
      bgRepeat={"no-repeat"}
      bgSize={"center"}
      pos={"relative"}
    >
      <Box
        pos={"absolute"}
        bgColor={"white"}
        top={"-50px"}
        h={"100px"}
        left={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
        right={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
        boxShadow={"md"}
        borderRadius={5}
        overflow={"hidden"}
        data-aos="fade-up"
      >
        <CustomCarousel />
      </Box>
      <Stack align={"center"}>
        <SectionTag title="about us" />
        <Flex
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          gap={"2rem"}
          h={"100%"}
        >
          <Box
            w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
            h={"100%"}
            maxW={"100%"}
            display={{ base: "block", sm: "block", md: "block", lg: "block" }}
            pos={"relative"}
            overflow={"hidden"}
            data-aos="zoom-in-up"
          >
            <Center>
              <Image
                src={"aup_gcmqkd.svg"}
                alt="about-us-image"
                height={450}
                width={450}
              />
            </Center>
          </Box>
          <Stack
            w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
            h="100%"
            align={{
              base: "flex-start",
              sm: "flex-start",
              md: "center",
              lg: "flex-start",
            }}
            height={"auto"}
            pos={"relative"}
          >
            <Box data-aos="fade-down">
              <Heading
                color={"brand.heading"}
                as="h3"
                fontSize={{ base: 25, sm: 25, md: 36 }}
                lineHeight={"1.2"}
                fontFamily={"inherit"}
                w={"100%"}
                textAlign={{ base: "start", sm: "start" }}
                fontStyle={"normal"}
                letterSpacing={"1.2"}
                wordBreak={"break-word"}
              >
                10+ Years Of Experiences In Business Development
              </Heading>
            </Box>
            <Box data-aos="fade-right" data-aos-delay="0">
              <Text
                fontFamily={"inherit"}
                margin={"16px 0 0 0"}
                fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px" }}
                color={"brand.text"}
                textAlign={{
                  base: "start",
                  sm: "start",
                  md: "start",
                  lg: "start",
                }}
              >
                Our track record speaks volumes, and we are dedicated to
                delivering the same high level of service that our clients have
                come to trust.
              </Text>
            </Box>
            <Stack
              fontSize={{ base: "14px", sm: "14px", md: "16px", lg: "16px" }}
              mt={5}
              fontFamily={"inherit"}
              color={"brand.text"}
              gap={"1.2rem"}
            >
              <Flex
                align={"center"}
                gap={"10px"}
                data-aos="fade-right"
                data-aos-delay="2"
              >
                <Box as={"span"} fontSize={"2em"} color={"brand.primary"}>
                  <BiSolidCheckCircle />
                </Box>{" "}
                <Text>Enhanced Operational Efficiency and Performance.</Text>
              </Flex>
              <Flex
                align={"center"}
                gap={"10px"}
                data-aos="fade-right"
                data-aos-delay="4"
              >
                <Box as={"span"} fontSize={"2em"} color={"#ff6305"}>
                  <BiSolidCheckCircle />
                </Box>
                <Text>Higher Customer Satisfaction</Text>
              </Flex>
              <Flex
                align={"center"}
                gap={"10px"}
                data-aos="fade-right"
                data-aos-delay="6"
              >
                <Box as={"span"} fontSize={"2em"} color={"#31c5e7"}>
                  <BiSolidCheckCircle />
                </Box>{" "}
                <Text>Strategic Clarity and Direction</Text>
              </Flex>
            </Stack>
            <Button
              colorScheme={"orange"}
              bg={"brand.primary"}
              rounded={"md"}
              padding={"16px 34px 16px 28px"}
              marginRight={"10px"}
              mt={{ base: "25px", sm: "25px", md: "auto", lg: "auto" }}
              height={"auto"}
              fontWeight={500}
              bottom={"0px"}
              transition=".3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2)",
              }}
              _focus={{
                outline: "none",
              }}
            >
              About us
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </PrimaryContainer>
  );
};

export default About;
