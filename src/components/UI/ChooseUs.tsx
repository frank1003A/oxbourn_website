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
    >
      <Flex
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        gap={"2rem"}
      >
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={"100%"}
          data-aos="zoom-in-up"
        >
          <Center>
            <Image
              src="/assets/139.svg"
              alt="about-image"
              height={500}
              width={500}
            />
          </Center>
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
          <SectionTag title="why choose us" />
          <Heading
            color={"brand.heading"}
            as="h3"
            fontSize={{ base: 30, sm: 30, md: 36 }}
            textAlign={{
              base: "center",
              sm: "center",
              md: "start",
              lg: "start",
            }}
            lineHeight={"1.2"}
            fontFamily={"inherit"}
            data-aos="fade-down"
            w={"100%"}
          >
            We work with you to realize your next outstanding design
          </Heading>
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
              <Text>Adaptability and Agility.</Text>
            </Flex>
            <Flex
              align={"center"}
              gap={"10px"}
              data-aos="fade-right"
              data-aos-delay="1"
            >
              <Box as={"span"} fontSize={"2em"} color={"#FF6305"}>
                <BiSolidCheckCircle />
              </Box>
              <Text>Online strategy and consulting services.</Text>
            </Flex>
            <Flex
              align={"center"}
              gap={"10px"}
              data-aos="fade-right"
              data-aos-delay="2"
            >
              <Box as={"span"} fontSize={"2em"} color={"#E53F5D"}>
                <BiSolidCheckCircle />
              </Box>{" "}
              <Text>Our approach is designed to help the businesses.</Text>
            </Flex>
            <Flex
              align={"center"}
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
            rounded={"md"}
            mt={"25px"}
            padding={"16px 34px 16px 28px"}
            marginRight={"10px"}
            height={"auto"}
            fontWeight={500}
            bottom={"0px"}
          >
            Read More
          </Button>
        </Stack>
      </Flex>
    </PrimaryContainer>
  );
};

export default ChooseUs;
