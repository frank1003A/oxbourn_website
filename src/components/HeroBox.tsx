import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { BiBriefcase, BiBulb, BiCog, BiWorld } from "react-icons/bi";
const HeroBox = () => {
  return (
    <SimpleGrid
      role="group"
      w={{ base: "100%", sm: "100%", md: "auto", lg: "auto" }}
      columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
      gap={{ base: 5, sm: 5, md: 0, lg: 0 }}
    >
      <Box
        transition={".5s"}
        h={"200px"}
        w={{ base: "100%", sm: "100%", md: "200px", lg: "200px" }}
        bgColor={"white"}
        cursor={"pointer"}
        color={"brand.primary"}
        _hover={{
          bgColor: "black",
          color: "white",
        }}
        _groupHover={{
          transform: {
            base: "none",
            sm: "none",
            md: "translateY(-10px) translateX(-10px)",
            lg: "translateY(-10px) translateX(-10px)",
          },
        }}
        boxShadow={"md"}
      >
        <Item icon={<BiWorld />} title="global research" />
      </Box>
      <Box
        h={"200px"}
        w={{ base: "100%", sm: "100%", md: "200px", lg: "200px" }}
        transition={".5s"}
        bgColor={"brand.primary"}
        cursor={"pointer"}
        color={"white"}
        _hover={{
          bgColor: "black",
          color: "white",
        }}
        _groupHover={{
          transform: {
            base: "none",
            sm: "none",
            md: "translateY(-10px) translateX(10px)",
            lg: "translateY(-10px) translateX(10px)",
          },
        }}
        boxShadow={"md"}
      >
        <Item title="creative ideas" icon={<BiBulb />} />
      </Box>
      <Box
        h={"200px"}
        w={{ base: "100%", sm: "100%", md: "200px", lg: "200px" }}
        transition={".5s"}
        bgColor={"brand.primary"}
        color={"white"}
        cursor={"pointer"}
        _hover={{
          bgColor: "black",
          color: "white",
        }}
        _groupHover={{
          transform: {
            base: "none",
            sm: "none",
            md: "translateY(10px) translateX(-10px)",
            lg: "translateY(10px) translateX(-10px)",
          },
        }}
        boxShadow={"md"}
      >
        <Item title="new services" icon={<BiCog />} />
      </Box>
      <Box
        h={"200px"}
        w={{ base: "100%", sm: "100%", md: "200px", lg: "200px" }}
        transition={".5s"}
        bgColor={"white"}
        cursor={"pointer"}
        color={"brand.primary"}
        _hover={{
          bgColor: "black",
          color: "white",
        }}
        _groupHover={{
          transform: {
            base: "none",
            sm: "none",
            md: "translateY(10px) translateX(10px)",
            lg: "translateY(10px) translateX(10px)",
          },
        }}
        boxShadow={"md"}
      >
        <Item title="pro management" icon={<BiBriefcase />} />
      </Box>
    </SimpleGrid>
  );
};

const Item = ({ icon, title }: { icon: React.JSX.Element; title: string }) => {
  return (
    <Stack h={"100%"} align={"center"} justify={"center"}>
      <Box as={"span"} fontSize={"65px"}>
        {icon}
      </Box>
      <Text as={"span"} textTransform={"capitalize"} fontSize={"20px"}>
        {title}
      </Text>
    </Stack>
  );
};

export default HeroBox;
