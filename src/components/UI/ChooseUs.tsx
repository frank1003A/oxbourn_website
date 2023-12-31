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
import PrimaryContainer from "../PrimaryContainer";
import SectionTag from "../SectionTag";

const ChooseUs = () => {
  return (
    <PrimaryContainer
      /**py={{ base: 5, md: 20, lg: 36 }}
      px={{ base: 5, md: 20, xl: 32, lg: 16 }} */
      bgColor={"#ebeaf9"}
      id="#whyoxbourn"
      name="whychooseus"
    >
      <Stack align={"center"}>
        <Flex
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          gap={"2rem"}
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "50%" }}
            h={"100%"}
            data-aos="zoom-in-up"
            pos={"relative"}
          >
            <Center>
              <Image
                src="whyus_mi0ak2.png"
                alt="choose-us-image"
                height={500}
                width={500}
              />
            </Center>
          </Box>
          <Stack
            w={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
            h="100%"
            align={{
              base: "flex-start",
              sm: "flex-start",
              md: "flex-start",
              lg: "flex-start",
            }}
            height={"auto"}
            pos={"relative"}
          >
            <Box>
              <SectionTag title="Why Oxbourn" />
            </Box>
            <Heading
              color={"brand.heading"}
              as="h3"
              fontSize={{ base: 25, sm: 25, md: 36, lg: 36 }}
              fontStyle={"normal"}
              textAlign={{
                base: "start",
                sm: "start",
                md: "start",
                lg: "start",
              }}
              lineHeight={"1.2"}
              letterSpacing={"1.2"}
              fontFamily={"inherit"}
              data-aos="fade-down"
              w={"100%"}
              textTransform={"capitalize"}
            >
              We work with you to realize your business
            </Heading>
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
                Discover why organizations choose us for tailored solutions and
                unmatched expertise.
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
                justifyItems={"center"}
                gap={"10px"}
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <Box as={"span"} fontSize={"2em"} color={"brand.primary"}>
                  <BiSolidCheckCircle />
                </Box>{" "}
                <Text>Adaptability and Agility.</Text>
              </Flex>
              <Flex
                align={"center"}
                justifyItems={"center"}
                gap={"10px"}
                data-aos="fade-right"
                data-aos-delay="2"
              >
                <Box as={"span"} fontSize={"2em"} color={"#E53F5D"}>
                  <BiSolidCheckCircle />
                </Box>{" "}
                <Text>Designed to help the businesses.</Text>
              </Flex>
              <Flex
                align={"center"}
                justifyItems={"center"}
                gap={"10px"}
                data-aos="fade-right"
                data-aos-delay="2"
              >
                <Box as={"span"} fontSize={"2em"} color={"#31C5E7"}>
                  <BiSolidCheckCircle />
                </Box>{" "}
                <Text>Innovative Solutions.</Text>
              </Flex>
            </Stack>
            <Button
              colorScheme={"orange"}
              bg={"brand.primary"}
              rounded={"sm"}
              mt={{ base: "25px", sm: "25px", md: "35px", lg: "35px" }}
              padding={"16px 34px 16px 28px"}
              marginRight={"10px"}
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
              Read More
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </PrimaryContainer>
  );
};

export default ChooseUs;
