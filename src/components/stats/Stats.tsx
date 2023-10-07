import { Container, SimpleGrid } from "@chakra-ui/react";
import StatsCard from "./StatsCard";

const Stats = () => {
  const stats = [
    { stat: "100+", description: "brands joined" },
    { stat: "350+", description: "marketing experts" },
    { stat: "200+", description: "satisfied client" },
    { stat: "310+", description: "successful campaigns" },
  ];
  return (
    <Container
      minH={150}
      bgImage={{
        base: "/assets/bg-tree.png",
        sm: "/assets/bg-tree.png",
        md: "/assets/bg-bottom.png",
      }}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgColor={"brand.primary"}
      py={{ base: 5, sm: 30, md: 30, lg: 10 }}
      px={{ base: 5, sm: 10, md: 10, xl: 32, lg: 16 }}
      margin={0}
      width={"100%"}
      pos={"relative"}
      maxW={"none"}
      zIndex={2}
      id="#qo"
    >
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
        spacing={{ base: 10, sm: 10 }}
      >
        {stats.map((stat, index) => {
          return (
            <StatsCard
              key={stat.stat + index}
              stat={stat.stat}
              description={stat.description}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Stats;
