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
      py={{ base: 5, sm: 10, md: 20, lg: 36 }}
      px={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
      margin={0}
      width={"100%"}
      pos={"relative"}
      maxW={"none"}
      id="#about"
    >
      <Flex
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        gap={"2rem"}
        h={"100%"}
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
              src={"/assets/sd2.png"}
              alt="about-image"
              height={450}
              width={450}
            />
          </Center>
          <Box
            zIndex="-1"
            position="absolute"
            left={0}
            right={0}
            top={0}
            bottom={0}
          >
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
        </Box>
        <Stack
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
          h="100%"
          align={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
          }}
          height={"auto"}
          pos={"relative"}
        >
          <SectionTag title="about us" />
          <Box data-aos="fade-down">
            <Heading
              color={"brand.heading"}
              as="h3"
              fontSize={{ base: 30, sm: 30, md: 36 }}
              lineHeight={"1.2"}
              fontFamily={"inherit"}
              w={"100%"}
              textAlign={{ base: "center", sm: "center" }}
            >
              10+ Years Of Experiences In
            </Heading>
          </Box>
          <Box data-aos="fade-down">
            <Heading
              color={"brand.heading"}
              fontFamily={"inherit"}
              as="h2"
              fontSize={{ base: 30, sm: 30, md: 36 }}
              textAlign={{ base: "center", sm: "center" }}
            >
              Business Development.
            </Heading>
          </Box>
          <Box data-aos="fade-right" data-aos-delay="0">
            <Text
              fontFamily={"inherit"}
              margin={"25px 0 0 0"}
              fontSize={"16px"}
              color={"brand.text"}
              textAlign={{
                base: "center",
                sm: "center",
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
