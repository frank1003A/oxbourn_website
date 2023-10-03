import CallToActionWithAnnotation from "@/components/Hero";
import Customlayout from "@/layouts/Customlayout";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiMailSend, BiServer, BiSolidCheckCircle } from "react-icons/bi";
import { FaStackExchange } from "react-icons/fa";

export default function Home() {
  return (
    <Customlayout>
      <CallToActionWithAnnotation />
      <Container
        py={{ base: 20, md: 36 }}
        px={32}
        margin={0}
        width={"100%"}
        pos={"relative"}
        maxW={"none"}
      >
        <Flex direction={"row"} gap={"2rem"}>
          <Box w={"50%"} data-aos="zoom-in-up">
            <Center>
              <Image
                src="/assets/about-img.png"
                alt="about-image"
                height={470}
                width={470}
              />
            </Center>
          </Box>
          <Stack
            w={"50%"}
            h="100%"
            align={"flex-start"}
            height={"auto"}
            pos={"relative"}
          >
            <Flex
              direction={"row"}
              bg={"#694fff"}
              color={"white"}
              borderRadius={"md"}
              p={"0px 10px"}
              m={"0 0 23px 0"}
            >
              <Text alignSelf={"flex-start"}>about us</Text>
            </Flex>
            <Heading
              color={"#39364e"}
              as="h3"
              fontSize={36}
              lineHeight={"1.2"}
              fontFamily={"inherit"}
              data-aos="fade-down"
            >
              15 Years Of Experiences In{" "}
            </Heading>
            <Heading
              color={"#39364e"}
              fontFamily={"inherit"}
              as="h2"
              fontSize={36}
              data-aos="fade-down"
            >
              Social Branding Agency
            </Heading>
            <Text
              fontFamily={"inherit"}
              margin={"25px 0 0 0"}
              fontSize={"16px"}
              color={"#445781"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .
            </Text>
            <Stack
              fontSize={"16px"}
              mt={5}
              fontFamily={"inherit"}
              color={"#445781"}
              gap={"1.2rem"}
            >
              <Flex
                align={"center"}
                gap={"10px"}
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <Box as={"span"} fontSize={"2em"} color={"#694fff"}>
                  <BiSolidCheckCircle />
                </Box>{" "}
                <Text>Lorem Ipsum generators on the tend to repeat.</Text>
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
                <Text>If you are going to use a passage.</Text>
              </Flex>
            </Stack>
            <Button
              colorScheme={"blue"}
              bg={"#694fff"}
              rounded={"md"}
              pos={"absolute"}
              padding={"16px 34px 16px 28px"}
              marginRight={"10px"}
              height={"auto"}
              fontWeight={500}
              bottom={"0px"}
              _hover={{
                bg: "blue.700",
              }}
            >
              About us
            </Button>
          </Stack>
        </Flex>
      </Container>
      <Container
        py={{ base: 20, md: "65px" }}
        px={32}
        margin={0}
        width={"100%"}
        pos={"relative"}
        maxW={"none"}
        bgColor={"#ebeaf9"}
      >
        <Stack align={"center"}>
          <Stack align={"center"} m={"auto"} textAlign={"center"} mb={"35px"}>
            <Flex
              direction={"row"}
              bg={"#694fff"}
              color={"white"}
              borderRadius={"md"}
              p={"0px 10px"}
              m={"0 0 23px 0"}
            >
              <Text alignSelf={"flex-start"}>our services</Text>
            </Flex>
            <Heading
              fontSize={36}
              color={"#39364e"}
              lineHeight={"1.2"}
              fontWeight={700}
            >
              We Provide The Best Service For You
            </Heading>
            <Text
              fontSize={16}
              w={"53%"}
              margin={"12px auto 0"}
              fontWeight={400}
              color={"#445781"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua
            </Text>
          </Stack>
          <SimpleGrid columns={3} gap={5}>
            <CustomCard
              icon={<BiMailSend />}
              heading="Email Marketing"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
                      do eiusmod tempor incidiunt ut labore"
            />
            <CustomCard
              icon={<FaStackExchange />}
              heading="Business Strategy"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
                      do eiusmod tempor incidiunt ut labore"
            />
            <CustomCard
              icon={<BiServer />}
              heading="SEO Management"
              description="Lorem ipsum dolor sit amet, consecte adipiscing elit, sed
                      do eiusmod tempor incidiunt ut labore"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </Customlayout>
  );
}

const CustomCard = ({
  icon,
  heading,
  description,
}: {
  icon: React.JSX.Element;
  heading: string;
  description: string;
}) => {
  const cardRef = useRef(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    let card = cardRef.current as HTMLDivElement;

    card.addEventListener("mouseenter", () => {
      setIsOver(true);
    });
    card.addEventListener("mouseleave", () => {
      setIsOver(false);
    });

    return () => {
      card.removeEventListener("mouseenter", () => {
        setIsOver(true);
      });
      card.removeEventListener("mouseleave", () => {
        setIsOver(false);
      });
    };
  }, []);
  return (
    <Card
      ref={cardRef}
      p={"42px 25px 32px 25px"}
      transition={"0.5s"}
      borderRadius={"5px"}
      pos={"relative"}
      zIndex={1}
      textAlign={"center"}
      overflow={"hidden"}
      shadow={"none"}
      _before={{
        content: `""`,
        pos: "absolute",
        h: isOver ? "100%" : "6%",
        w: isOver ? "100%" : "6%",
        right: 0,
        bottom: 0,
        borderRadius: "5px",
        zIndex: -1,
        bg: "#694fff",
        transition: "0.5s",
      }}
    >
      <CardBody p={"0px"}>
        <Stack align={"center"}>
          <Box>
            <Box
              bgColor={isOver ? "white" : "#f3f1fb"}
              borderRadius={"5px"}
              color={"#694fff"}
              p={"1rem"}
              fontSize={"2rem"}
            >
              {icon}
            </Box>
          </Box>
          <Box w="100%" margin={"19px 0 11px 0"}>
            <Heading
              as={"h2"}
              fontSize={"22px"}
              fontWeight={700}
              transition={"0.5s"}
              lineHeight={"28px"}
              color={isOver ? "white" : "#39364e"}
            >
              {heading}
            </Heading>
          </Box>
          <Box w="100%">
            <Text
              fontSize={"16px"}
              fontWeight={400}
              textAlign={"center"}
              transition={"0.5s"}
              lineHeight={"29px"}
              color={isOver ? "white" : "#445781"}
            >
              {description}
            </Text>
          </Box>
          <Link
            href={"#"}
            style={{ fontSize: "16px", color: isOver ? "white" : "#694fff" }}
          >
            Learn More
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
};
