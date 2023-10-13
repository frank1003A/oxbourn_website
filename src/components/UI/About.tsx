import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { BiSolidCheckCircle } from "react-icons/bi";
import PrimaryContainer from "../PrimaryContainer";
import SectionTag from "../SectionTag";

const About = () => {
  return (
    <PrimaryContainer id="#about">
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
            display={{ base: "block", sm: "block", md: "block", lg: "block" }}
            pos={"relative"}
            data-aos="zoom-in-up"
          >
            <Center>
              <Image
                src={"sd2_pxthqn.png"}
                alt="about-us-image"
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
            <Box data-aos="fade-down">
              <Heading
                color={"brand.heading"}
                as="h3"
                fontSize={{ base: 25, sm: 25, md: 36 }}
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
                fontSize={{ base: 25, sm: 25, md: 36 }}
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
