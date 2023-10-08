import { Box, Button, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBlog } from "react-icons/fa";
import BlogAuthor from "./BlogAuthor";
import BlogImageBox from "./BlogImageBox";
import BlogTags from "./BlogTags";

const SingleBlog = () => {
  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      gap={{ base: "1rem", sm: "1rem", md: "1rem", lg: "0px" }}
      justifyContent="space-between"
    >
      <BlogImageBox />
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        alignItems={{
          base: "center",
          sm: "center",
          md: "flex-start",
          lg: "flex-start",
        }}
        textAlign={{ base: "center", sm: "center", md: "start", lg: "start" }}
        justifyContent="flex-start"
        marginTop={{ base: "3", sm: "0", md: 2, lg: 5 }}
        fontFamily={"inherit"}
      >
        <BlogTags tags={["Engineering", "Product"]} />
        <Box w={"100%"}>
          <Text
            textDecoration="none"
            fontSize={30}
            fontFamily={"inherit"}
            color={"brand.heading"}
            lineHeight={"1.2"}
            fontWeight={700}
            mt={3}
            _hover={{ textDecoration: "none" }}
          >
            Navigating Uncertainty
          </Text>
        </Box>
        <Box mt={"5px"}>
          <Text
            as="p"
            fontSize={16}
            w={"100%"}
            margin={"12px auto 0"}
            fontWeight={400}
            color={"brand.text"}
            noOfLines={4}
          >
            In today&apos;s fast-paced and unpredictable business world,
            resilience is the key to survival and growth. In our latest blog, we
            delve into effective strategies that businesses can implement to not
            only weather uncertainties but also emerge stronger. Discover
            insights on adaptability, risk management, and maintaining a
            competitive edge in an ever-changing landscape. Stay resilient, stay
            ahead.
          </Text>
        </Box>
        <Box mt={"5px"}>
          <Link
            as={NextLink}
            href={"#"}
            color="brand.primary"
            textDecoration={"underline"}
            fontSize={"14px"}
          >
            Read More
          </Link>
        </Box>
        <Box mt={"4px"}>
          <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} />
        </Box>
        <HStack mt={"10px"}>
          <Button rightIcon={<FaBlog />}>View Blogs</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default SingleBlog;
