import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import CustomBtn from "../CustomBtn";
import SectionTag from "../SectionTag";

export default function Hero() {
  return (
    <>
      <Container
        as={"section"}
        marginInline={"0px"}
        paddingInline={"0px"}
        maxW={"none"}
        w={"100%"}
        bgColor={"brand.primary"}
        bgImage={"url('/assets/footer.png')"}
        bgRepeat={"no-repeat"}
        bgSize={"center"}
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
          py={{ base: 5, sm: 20, md: 20, lg: 32 }}
          px={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
          zIndex={10}
          data-aos="fade-up"
        >
          <SectionTag title="welcome to oxbourn consulting" />
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
              rounded={"md"}
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
              rounded={"md"}
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
