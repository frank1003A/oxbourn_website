import About from "@/components/UI/About";
import ChooseUs from "@/components/UI/ChooseUs";
import Hero from "@/components/UI/Hero";
import LatestArticle from "@/components/UI/LatestArticle";
import Portfolio from "@/components/UI/Portfolio";
import Services from "@/components/UI/Services";
import Stats from "@/components/stats/Stats";
import Customlayout from "@/layouts/Customlayout";

export default function Home() {
  return (
    <Customlayout>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Portfolio />
      <ChooseUs />
      <LatestArticle />
    </Customlayout>
  );
}
