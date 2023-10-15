import {
  AbsoluteCenter,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiSolidImage } from "react-icons/bi";
import BlogTags from "./BlogTags";

interface BlogCardProps {
  imgSrc: string;
  tags: string[];
  title: string;
}
const BlogCard = (props: BlogCardProps) => {
  return (
    <Card
      transition={"0.5s"}
      borderRadius={"5px"}
      pos={"relative"}
      zIndex={1}
      overflow={"hidden"}
      shadow={"none"}
      p={"0px"}
      maxW={{ base: "100%", sm: "100%", md: "300px", lg: "300px" }}
      borderBottom={2}
      borderBottomStyle={"solid"}
      borderBottomColor={"brand.primary"}
      borderBottomRadius={"0px"}
      cursor={"pointer"}
      _hover={{
        boxShadow: "md",
      }}
      role="group"
    >
      <CardBody p={"0px"} w={"100%"} h={"100%"}>
        <Stack w={"100%"} h={"100%"}>
          <Box w={"100%"} h={"60%"} overflow={"hidden"}>
            <Image
              src={props.imgSrc}
              fallback={<BlogImageFallbackComponent />}
              alt="some good alt text"
              objectFit="contain"
              bgPosition={"center"}
              transition={"all .5s"}
              borderBottomRadius={"0px"}
              _groupHover={{
                transform: "scale(1.2)",
                _before: {
                  opacity: 1,
                },
              }}
            />
          </Box>
          <Box p={"10px"}>
            <Stack>
              <Box w={"100%"}>
                <Box>
                  <BlogTags tags={props.tags} />
                </Box>
                <Box mt={"10px"}>
                  <Text
                    textDecoration="none"
                    fontSize={{ base: 20, sm: 20, md: 20, lg: 20 }}
                    fontFamily={"inherit"}
                    color={"brand.heading"}
                    lineHeight={"1.2"}
                    fontWeight={700}
                    noOfLines={1}
                    _hover={{ textDecoration: "none" }}
                  >
                    {props.title}
                  </Text>
                </Box>
                <Box>
                  <Text
                    as="p"
                    fontSize={{
                      base: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    }}
                    w={"100%"}
                    margin={"12px auto 0"}
                    fontWeight={400}
                    color={"brand.text"}
                    noOfLines={2}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae magnam totam architecto at tenetur mollitia
                    natus. Ratione nobis, ullam aperiam aut eaque, porro dolorum
                    debitis iure exercitationem, eligendi animi? Error.
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

const BlogImageFallbackComponent = () => {
  return (
    <Box pos={"relative"} width={"100%"} height={"150px"}>
      <AbsoluteCenter fontSize={30} color={"brand.primary"}>
        <BiSolidImage />
      </AbsoluteCenter>
    </Box>
  );
};

export default BlogCard;
