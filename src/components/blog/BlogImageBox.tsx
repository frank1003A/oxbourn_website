import {
  AbsoluteCenter,
  Box,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiSolidImage } from "react-icons/bi";

const BlogImageBox = () => {
  return (
    <Box
      display="flex"
      flex="1"
      marginRight="3"
      position="relative"
      alignItems="center"
      data-aos="zoom-in-up"
    >
      <Box
        width={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
        zIndex="2"
        role="group"
        padding={"20px"}
      >
        <Box
          overflow={"hidden"}
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Image
            borderRadius="lg"
            src={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            }
            fallback={<BlogImageFallbackComponent />}
            alt="some good alt text"
            objectFit="contain"
            bgPosition={"center"}
            transition={"all .5s"}
            _groupHover={{
              transform: "scale(1.2)",
              _before: {
                opacity: 1,
              },
            }}
          />
        </Box>
      </Box>
      <Box zIndex="1" width="100%" position="absolute" height="100%">
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
  );
};

const BlogImageFallbackComponent = () => {
  return (
    <Box pos={"relative"} width={"100%"} height={"100%"}>
      <AbsoluteCenter>
        <BiSolidImage />
      </AbsoluteCenter>
    </Box>
  );
};

export default BlogImageBox;
