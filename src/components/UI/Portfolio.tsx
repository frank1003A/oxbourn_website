import { Box, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import PrimaryContainer from "../PrimaryContainer";
import SectionTag from "../SectionTag";
import PortfolioBtn from "../portfolio/PortfolioBtn";
import PortfolioCard from "../portfolio/PortfolioCard";

const portfolioCategory = [
  "all",
  "business",
  "design",
  "development",
  "sofware",
];

const portfolioList = [
  {
    img: "url('/assets/portfolio/pt2.jpg')",
    category: "design",
    alt: "Modern card design",
  },
  {
    img: "url('/assets/portfolio/pt3.jpg')",
    category: "sofware",
    alt: "Modern site design",
  },
  {
    img: "url('/assets/portfolio/pt4.jpg')",
    category: "design",
    alt: "Brand design",
  },
  {
    img: "url('/assets/portfolio/pt5.jpg')",
    category: "business",
    alt: "Marketing strategy",
  },
  {
    img: "url('/assets/portfolio/pt6.jpg')",
    category: "development",
    alt: "Business development",
  },
  {
    img: "url('/assets/portfolio/pt8.jpg')",
    category: "business",
    alt: "Buisness plan devlopment",
  },
];

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState("all");

  const handleActive = (cat: string) => {
    if (activeCat === cat) {
      return true;
    } else {
      return false;
    }
  };

  const gridComponent = (
    <>
      {portfolioList
        .filter((pl) =>
          activeCat === "all" ? pl.category : pl.category === activeCat
        )
        .map((pl) => {
          return (
            <PortfolioCard
              img={pl.img}
              key={pl.img}
              category={pl.category}
              alt={pl.alt}
            />
          );
        })}
    </>
  );

  return (
    <PrimaryContainer
      /**py={{ base: 5, md: 20, lg: "65px" }}
      px={{ base: 5, sm: 5, md: 10, xl: 32, lg: 16 }} */
      id="#portfolio"
      name="portfolio"
    >
      <Stack align={"center"} m={"auto"} textAlign={"center"} mb={"35px"}>
        <SectionTag title="Portfolio" />
        <Box data-aos="zoom-in-up">
          <Heading
            fontSize={{ base: 25, sm: 25, md: 36, lg: 36 }}
            color={"brand.heading"}
            lineHeight={"1.2"}
            fontWeight={700}
            fontFamily={"inherit"}
          >
            Explore Our Success Stories
          </Heading>
        </Box>
        <Box data-aos="zoom-in-up">
          <Text
            fontSize={{ base: 14, sm: 14, md: 16, lg: 16 }}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "53%" }}
            margin={"12px auto 0"}
            fontWeight={400}
            color={"brand.text"}
          >
            Discover the tangible results of our expertise through a selection
            of projects that showcase our commitment to excellence and
            innovation.
          </Text>
        </Box>
      </Stack>
      <Stack align={"center"} h={"100%"} mb={"35px"}>
        <Flex
          direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "center",
          }}
          w={"100%"}
          gap={"1rem"}
        >
          {portfolioCategory.map((pc) => {
            return (
              <PortfolioBtn
                key={pc}
                handleClick={() => setActiveCat(pc)}
                title={pc}
                active={handleActive(pc)}
              />
            );
          })}
        </Flex>
      </Stack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        justifyItems={"center"}
        row={2}
        spacing={"2rem"}
        transition={"transform 0.3s ease-in-out"}
        id="chakra-grid"
      >
        {gridComponent}
      </SimpleGrid>
    </PrimaryContainer>
  );
};

export default Portfolio;
