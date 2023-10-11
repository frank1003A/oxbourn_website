import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";
import CustomBtn from "../CustomBtn";
import PrimaryContainer from "../PrimaryContainer";
import SectionTag from "../SectionTag";

const Contact = () => {
  return (
    <PrimaryContainer
      //bgImage={"url('/assets/bg-bottom-hero.png')"}
      bgPos={"bottom"}
      bgSize={"contain"}
      bgRepeat={"no-repeat"}
      bgColor={"#ebeaf9"}
      id="#contact"
    >
      <Stack align={"center"}>
        <SectionTag title="contact" />
        <Flex
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          gap={"2rem"}
          alignItems={"center"}
        >
          <Box
            w={{ base: "100%", md: "100%", lg: "50%" }}
            h={"100%"}
            data-aos="zoom-in-up"
          >
            <Heading
              color={"brand.heading"}
              as="h3"
              fontSize={{ base: 30, sm: 30, md: 36 }}
              mb={5}
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
              Consult with us about your buisness needs.
            </Heading>
            <Center>
              <Image
                src="/assets/mes.svg"
                alt="about-image"
                height={500}
                width={500}
              />
            </Center>
          </Box>
          <Stack w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}>
            <Stack
              h={"100%"}
              gap={"1rem"}
              bgColor={"white"}
              borderRadius={5}
              py={10}
              px={10}
              rowGap={5}
            >
              <Stack
                direction={{
                  base: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
              >
                <FormControl>
                  <FormLabel htmlFor="">name</FormLabel>
                  <Input placeholder="name" />
                </FormControl>
                <FormControl>
                  <FormLabel>surname</FormLabel>
                  <Input placeholder="surname" />
                </FormControl>
              </Stack>
              <Box>
                <FormControl>
                  <FormLabel>email</FormLabel>
                  <Input aria-label="" placeholder="surname" />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>message</FormLabel>
                  <Textarea
                    placeholder="your message"
                    size="sm"
                    maxBlockSize={5}
                  />
                </FormControl>
              </Box>
              <Box>
                <CustomBtn>send message</CustomBtn>
              </Box>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </PrimaryContainer>
  );
};

export default Contact;
