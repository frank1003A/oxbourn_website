import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CustomCarousel = () => {
  const [isNotDesktop] = useMediaQuery("(max-width: 960px)");
  return (
    <Flex
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      height={"100%"}
      align={"center"}
      justify={"center"}
      gap={10}
      fontSize={"16px"}
    >
      {isNotDesktop ? (
        <Carousel
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          autoPlay
          dynamicHeight
          infiniteLoop
        >
          <BannerItem
            imgSrc="/assets/cse2.png"
            title="15+ years of experience"
          />
          <BannerItem
            imgSrc="/assets/prj.png"
            title="100+ Successful Projects"
          />
          <BannerItem imgSrc="/assets/pp.png" title="30+ patner projects" />
        </Carousel>
      ) : (
        <>
          <BannerItem
            imgSrc="/assets/cse2.png"
            title="15+ years of experience"
          />
          <BannerItem
            imgSrc="/assets/prj.png"
            title="100+ Successful Projects"
          />
          <BannerItem imgSrc="/assets/pp.png" title="30+ patner projects" />
        </>
      )}
    </Flex>
  );
};

const BannerItem = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <Stack
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      align={"center"}
      justify={"center"}
      gap={0}
    >
      <Box
        bgImage={imgSrc}
        width={16}
        height={16}
        bgRepeat={"no-repeat"}
        bgSize={40}
        bgPos={"center"}
      />
      <Text
        color={"brand.primary"}
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

export default CustomCarousel;
