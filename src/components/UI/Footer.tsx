import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { BiMailSend, BiSolidBriefcase } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue("brand.footer", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Stack align={{ sm: "center", md: "flex-start" }}>
          <ListHeader>Stay up to date</ListHeader>
          <Stack direction={"row"} w={{ sm: "100%", md: "auto" }}>
            <Input
              placeholder={"Your email address"}
              bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
              border={0}
              _focus={{
                bg: "whiteAlpha.300",
              }}
            />
            <IconButton
              colorScheme={"orange"}
              bg={useColorModeValue("brand.primary", "green.800")}
              color={useColorModeValue("white", "gray.800")}
              aria-label="Subscribe"
              icon={<BiMailSend />}
            />
          </Stack>
        </Stack>
        <Divider mb={5} mt={5} />
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "2fr 1fr 1fr" }}
          justifyItems={{ sm: "center", md: "flex-start" }}
          spacing={8}
        >
          <Stack spacing={6} align={{ sm: "center", md: "flex-start" }}>
            <Box>
              <Link href={"/"}>
                <Flex
                  align={"center"}
                  justifyContent={"flex-start"}
                  gap={"5px"}
                  fontSize={"40px"}
                >
                  <Box as={"span"} color={"white"}>
                    <BiSolidBriefcase />
                  </Box>
                  <Heading fontFamily={"inherit"} fontWeight={600}>
                    Oxbourn
                  </Heading>
                </Flex>
              </Link>
            </Box>
            <Text fontSize={"sm"} textAlign={"center"}>
              Embark on a journey of growth, resilience, and transformation
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={{ sm: "center", md: "flex-start" }}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={"#"}>
              About us
            </Box>
            <Box as="a" href={"#"}>
              Blog
            </Box>
            <Box as="a" href={"#"}>
              Contact us
            </Box>
            <Box as="a" href={"#"}>
              Pricing
            </Box>
            <Box as="a" href={"#"}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={{ sm: "center", md: "flex-start" }}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Terms of Service
            </Box>
            <Box as="a" href={"#"}>
              Legal
            </Box>
            <Box as="a" href={"#"}>
              Privacy Policy
            </Box>
            <Box as="a" href={"#"}>
              Satus
            </Box>
          </Stack>
        </SimpleGrid>
        <Divider mt={5} />
        <Text mt={5}>© 2022 All Rights Reserved Oxbourn</Text>
      </Container>
    </Box>
  );
}
