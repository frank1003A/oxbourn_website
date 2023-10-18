import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
const CustomMarquee = () => {
  return (
    <Flex
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      height={"100%"}
      align={"center"}
      justify={"center"}
      gap={10}
      fontSize={"16px"}
    >
      <Marquee>
        <BannerItem imgSrc="/assets/cse3.png" title="15+ years of experience" />
        <BannerItem
          imgSrc="/assets/prj2.png"
          title="100+ Successful Projects"
        />
        <BannerItem imgSrc="/assets/pp2.png" title="30+ patner projects" />
      </Marquee>
    </Flex>
  );
};

const BannerItem = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <Stack direction={"row"} align={"center"} justify={"center"} gap={0} mr={5}>
      <Box
        bgImage={imgSrc}
        width={16}
        height={16}
        bgRepeat={"no-repeat"}
        bgSize={40}
        bgPos={"center"}
      />
      <Text
        color={"white"}
        fontSize={20}
        fontWeight={700}
        lineHeight={"1.2"}
        fontStyle={"normal"}
        wordBreak={"normal"}
        textTransform={"capitalize"}
      >
        {title}
      </Text>
    </Stack>
  );
};

export default CustomMarquee;
