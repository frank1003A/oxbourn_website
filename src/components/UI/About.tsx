import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { BiSolidCheckCircle } from "react-icons/bi";
import SectionTag from "../SectionTag";

const About = () => {
  return (
    <Container
      py={{ base: 5, sm: 20, md: 20, lg: 36 }}
      px={{ base: 5, sm: 10, md: 20, xl: 32, lg: 16 }}
      margin={0}
      width={"100%"}
      pos={"relative"}
      maxW={"none"}
      id="#about"
    >
      <Flex
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        gap={"2rem"}
      >
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
          h={"100%"}
          display={{ base: "block", sm: "block", md: "block", lg: "block" }}
          pos={"relative"}
          data-aos="zoom-in-up"
        >
          <Center>
            <Image
              src="/assets/sd2.png"
              alt="about-image"
              height={450}
              width={450}
            />
            <Box zIndex="1" width="80%" position="absolute" height="80%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(brand.primary 1px, transparent 1px)",
                  "radial(brand.primary 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Center>
        </Box>
        <Stack
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
          h="100%"
          align={"flex-start"}
          height={"auto"}
          pos={"relative"}
        >
          <SectionTag title="about us" />
          <Heading
            color={"brand.heading"}
            as="h3"
            fontSize={{ base: 30, sm: 30, md: 36 }}
            lineHeight={"1.2"}
            fontFamily={"inherit"}
            data-aos="fade-down"
            w={"100%"}
          >
            10+ Years Of Experiences In{" "}
          </Heading>
          <Heading
            color={"brand.heading"}
            fontFamily={"inherit"}
            as="h2"
            fontSize={{ base: 30, sm: 30, md: 36 }}
            data-aos="fade-down"
          >
            Business Development.
          </Heading>
          <Text
            fontFamily={"inherit"}
            margin={"25px 0 0 0"}
            fontSize={"16px"}
            color={"brand.text"}
          >
            Our track record speaks volumes, and we are dedicated to delivering
            the same high level of service that our clients have come to trust.
          </Text>
          <Stack
            fontSize={"16px"}
            mt={5}
            fontFamily={"inherit"}
            color={"brand.text"}
            gap={"1.2rem"}
          >
            <Flex
              align={"center"}
              gap={"10px"}
              data-aos="fade-right"
              data-aos-delay="0"
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
              data-aos-delay="1"
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
              data-aos-delay="2"
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
            mt={"25px"}
            height={"auto"}
            fontWeight={500}
            bottom={"0px"}
          >
            About us
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default About;
