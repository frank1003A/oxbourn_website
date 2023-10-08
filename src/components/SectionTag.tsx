import { Box, Text } from "@chakra-ui/react";

const SectionTag = ({ title }: { title: string }) => {
  return (
    <Box
      bg={"brand.primary"}
      color={"white"}
      borderRadius={4}
      p={"0px 10px"}
      m={"0 0 23px 0"}
      boxShadow={
        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      }
    >
      <Text as={"h1"} alignSelf={"flex-start"} textTransform={"capitalize"}>
        {title}
      </Text>
    </Box>
  );
};

export default SectionTag;
