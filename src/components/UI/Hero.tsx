import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import CustomBtn from "../CustomBtn";
import HeroBox from "../HeroBox";

export default function Hero() {
  return (
    <>
      <Container
        as={"section"}
        marginInline={"0px"}
        paddingInline={"0px"}
        maxW={"none"}
        w={"100%"}
        //bgGradient="linear-gradient(228deg, rgba(185, 227, 237, 1) 14%, rgba(255, 255, 255, 1) 100%)"
        /** bgColor="#2876f9"
        bgGradient="linear-gradient(315deg, #2876f9 0%, #6d17cb 74%)" */
        // bgColor="#2a52be"
        //bgGradient="linear-gradient(315deg, #2234ae 0%, #191714 74%)"
        bgColor={"brand.primary"}
        bgImage={"url('/assets/footer.png')"}
        bgRepeat={"no-repeat"}
        bgSize={"center"}
        pos={"relative"}
      >
        {/** hero box */}
        <Box
          pos={{
            base: "relative",
            sm: "relative",
            md: "absolute",
            lg: "absolute",
          }}
          width={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          alignItems={"center"}
          justifyContent={"center"}
          top={0}
          right={0}
          bottom={"7%"}
          p={{ base: "2rem", sm: "2rem", md: "0px", lg: "0px" }}
          px={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
          /**bgImage={"url('/assets/twopepo.png')"}
          bgPosition={"bottom"}
          bgRepeat={"no-repeat"}
          bgPos={"center"}
          bgSize={"contain"} */
          zIndex={15}
          data-aos="zoom-in-up"
        >
          <HeroBox />
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
          py={{ base: 5, sm: 20, md: 20, lg: 32 }}
          px={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
          zIndex={10}
          data-aos="fade-up"
        >
          <Box
            rounded={"sm"}
            bg={"brand.primary"}
            p={"10px"}
            color={"brand.primary"}
            border={1}
            borderStyle={"solid"}
            borderColor={"white"}
          >
            <Box
              fontFamily={"inherit"}
              fontWeight={600}
              transition={".3s"}
              color={"white"}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Welcome to oxbourn consulting")
                    .pauseFor(2500)
                    .start();
                }}
              />
              {/**<Typewriter
                options={{
                  strings: ["Welcome to oxbourn consulting"],
                  autoStart: true,
                  loop: false,
                  skipAddStyles: true,
                }}
              /> */}
            </Box>
          </Box>
          <Heading
            fontFamily={"inherit"}
            fontWeight={600}
            fontSize={{ base: 50, sm: 50, md: 60 }}
            lineHeight={"110%"}
            color={"white"}
            noOfLines={50}
            maxW={{ base: "none", sm: "none", md: "none", lg: "50%" }}
            textTransform={"capitalize"}
          >
            Unlock your potential, Elevate your business
          </Heading>
          <Text
            color={"white"}
            noOfLines={50}
            maxW={{ base: "none", sm: "none", md: "none", lg: "50%" }}
            lineHeight={"1.7"}
            mb={{ lg: 35 }}
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
              base: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            }}
            alignSelf={"flex-start"}
            w={"100%"}
            position={"relative"}
          >
            <CustomBtn
              bg={"brand.primary"}
              rounded={"sm"}
              padding={"16px 34px 16px 28px"}
              marginRight={"10px"}
              height={"auto"}
              fontWeight={500}
              rightIcon={<FaArrowRight />}
              transition=".3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2)",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Get Started
            </CustomBtn>
            <Button
              borderRadius={"sm"}
              padding={"16px 34px 16px 28px"}
              marginRight={"10px"}
              height={"auto"}
              borderColor={"brand.primary"}
              bgColor={"white"}
              color={"brand.primary"}
              fontWeight={500}
              variant={"outline"}
              transition=".3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2)",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Get Quote
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

/**<Box pos={"relative"} w={"100%"} height={"100%"}>
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
          </Box> */
