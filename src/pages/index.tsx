import About from "@/components/UI/About";
import ChooseUs from "@/components/UI/ChooseUs";
import Hero from "@/components/UI/Hero";
import LatestArticle from "@/components/UI/LatestArticle";
import Portfolio from "@/components/UI/Portfolio";
import Services from "@/components/UI/Services";
import Stats from "@/components/stats/Stats";
import Customlayout from "@/layouts/Customlayout";
import { AbsoluteCenter, Box, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for the initial delay (400ms) before animations start
  useEffect(() => {
    const animationDelay = 400;
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the initial delay
    }, animationDelay);

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []);
  return (
    <>
      {loading ? (
        <Box width={"100%"} height={"100vh"}>
          <AbsoluteCenter>
            <Stack>
              <Spinner size="xl" thickness="8px" color="brand.primary" />
              <Text>Please wait...</Text>
            </Stack>
          </AbsoluteCenter>
        </Box>
      ) : (
        <Customlayout>
          <Hero />
          <About />
          <Services />
          <Stats />
          <Portfolio />
          <ChooseUs />
          <LatestArticle />
          <ScrollToTop
            component={<FaArrowUp />}
            smooth
            style={{
              backgroundColor: "#2F3C7E",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Customlayout>
      )}
    </>
  );
}
