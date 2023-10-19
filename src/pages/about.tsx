import PrimaryContainer from "@/components/PrimaryContainer";
import Banner from "@/components/UI/Banner";
import Customlayout from "@/layouts/Customlayout";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";

const AboutPage = () => {
  const headingProps = {
    lineHeight: "1.2",
    fontFamily: "inherit",
    w: "100%",
    fontStyle: "normal",
    letterSpacing: "1.2",
    wordBreak: "break-word" as any,
    color: "brand.heading", // Add your brand color here
  };
  return (
    <>
      <Head>
        <title>About Us - Oxbourn Consulting</title>
      </Head>
      <Customlayout>
        <Container
          as={"section"}
          marginInline={"0px"}
          paddingInline={"0px"}
          maxW={"none"}
          w={"100%"}
          minH={"200px"}
          display={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          bgColor={"brand.primary"}
          bgImage={"url('/assets/footer.png')"}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          bgSize={"center"}
          pos={"relative"}
        >
          <Heading
            fontFamily={"inherit"}
            fontWeight={600}
            fontSize={{ base: 20, sm: 20, md: 40 }}
            lineHeight={"110%"}
            color={"white"}
            noOfLines={50}
            maxW={{ base: "none", sm: "none", md: "none", lg: "50%" }}
            textTransform={"capitalize"}
          >
            About Us
          </Heading>
        </Container>
        <PrimaryContainer name="about-page">
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
            gap={{ base: "0px", sm: "0px", md: "2rem", lg: "2rem" }}
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
              <Center w={"100%"}>
                <Image
                  src={"aup_af8ost.png"}
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
              <Box data-aos="fade-up">
                <Heading
                  as={"h1"}
                  fontSize={{ base: 25, sm: 25, md: 25 }}
                  textAlign={{ base: "start", sm: "start" }}
                  {...headingProps}
                >
                  About Oxbourn Consulting
                </Heading>
              </Box>
              <Box data-aos="fade-up" data-aos-delay="0">
                <Text
                  fontFamily={"inherit"}
                  margin={"5px 0 0 0"}
                  fontSize={{
                    base: "14px",
                    sm: "14px",
                    md: "16px",
                    lg: "16px",
                  }}
                  color={"brand.text"}
                  textAlign={{
                    base: "start",
                    sm: "start",
                    md: "start",
                    lg: "start",
                  }}
                >
                  At Oxbourn Consulting, we thrive on crafting your vision into
                  a powerful strategy. As a dynamic consulting firm, we blend
                  innovative thinking with a passion for problem-solving to
                  drive businesses towards excellence.
                </Text>
              </Box>
              <Stack mt={5}>
                <Heading
                  as="h3"
                  fontSize={{ base: 25, sm: 25, md: 25 }}
                  {...headingProps}
                >
                  Commitment to Excellence
                </Heading>
                <Box data-aos="fade-up" data-aos-delay="0">
                  <Text
                    fontFamily={"inherit"}
                    margin={"5px 0 0 0"}
                    fontSize={{
                      base: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    }}
                    color={"brand.text"}
                    textAlign={{
                      base: "start",
                      sm: "start",
                      md: "start",
                      lg: "start",
                    }}
                  >
                    With a relentless commitment to excellence, we are your
                    trusted partners in navigating complexity, crafting
                    innovative solutions, and elevating businesses to new
                    heights. Our team specializes in optimizing operational
                    processes, identifying inefficiencies, and implementing
                    solutions to enhance productivity and reduce costs. We
                    conduct in-depth market research and analysis to provide
                    businesses with valuable insights into market trends,
                    customer behavior, and competitive landscapes.
                    <br />
                    <br />
                    Our unique advantage lies in our team&apos;s ability to
                    adapt to new challenges and our unwavering dedication to
                    lifelong learning. At Oxbourn Consulting, we believe that
                    success is not just a destination; it&apos;s a continuous
                    journey of improvement and innovation. <br />
                    <br />
                    Choose Oxbourn Consulting as your strategic ally, and
                    together, we&apos;ll embark on a journey to success.
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Flex>
        </PrimaryContainer>
        <Banner />
      </Customlayout>
    </>
  );
};
export default AboutPage;
