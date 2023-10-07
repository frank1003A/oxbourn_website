import { Box, Text } from "@chakra-ui/react";

const SectionTag = ({ title }: { title: string }) => {
  return (
    <Box
      bg={"brand.primary"}
      color={"white"}
      borderRadius={4}
      p={"0px 10px"}
      m={"0 0 23px 0"}
    >
      <Text as={"h1"} alignSelf={"flex-start"} textTransform={"capitalize"}>
        {title}
      </Text>
    </Box>
  );
};

export default SectionTag;
