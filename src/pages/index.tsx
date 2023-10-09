import Loader from "@/components/Loader";
import About from "@/components/UI/About";
import ChooseUs from "@/components/UI/ChooseUs";
import Hero from "@/components/UI/Hero";
import LatestArticle from "@/components/UI/LatestArticle";
import Portfolio from "@/components/UI/Portfolio";
import Services from "@/components/UI/Services";
import Stats from "@/components/stats/Stats";
import Customlayout from "@/layouts/Customlayout";
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
        <Loader />
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
