import { Box, Tag } from "@chakra-ui/react";

const SectionTag = ({ title }: { title: string }) => {
  return (
    <Box color={"white"} p={"0px"} mb={"5px"} bgColor={"brand.primary"}>
      <Tag size={"md"} rounded={"sm"} variant="solid" bgColor={"brand.primary"}>
        {title}
      </Tag>
    </Box>
  );
};

export default SectionTag;

/** <Box color={"white"} p={"4px 0px"} mb={"5px"}>
      <Stack gap={"5px"}>
        <Text
          as={"span"}
          color={"brand.primary"}
          alignSelf={"flex-start"}
          //textTransform={"capitalize"}
          fontSize="1.5em"
          //fontSize={20}
          contrast={"10px"}
          fontWeight={600}
          fontFamily={"inherit"}
          bg="linear-gradient(orange, orange)"
          backgroundSize="100% 20px"
          backgroundRepeat="no-repeat"
          backgroundPosition="100% 0%"
          transition="all .7s, backgroundPosition .5s ease-in-out"
          _hover={{
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 100%",
            transition: "all .7s, backgroundPosition .5s ease-in-out",
          }} 
          >
          {title}
        </Text>
        <Flex>
          <Box
            w={"50%"}
            borderBottom={5}
            borderBottomColor={"brand.primary"}
            borderBottomStyle={"solid"}
          ></Box>
          <Box
            w={"50%"}
            borderBottom={5}
            borderBottomColor={"brand.primary"}
            borderBottomStyle={"solid"}
          ></Box>
          <Box
            w={"50%"}
            borderBottom={5}
            borderBottomColor={"brand.primary"}
            borderBottomStyle={"solid"}
          ></Box>
        </Flex>
      </Stack>
    </Box> */
